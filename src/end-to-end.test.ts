import { ratio } from './ratio';
import { scalar } from './scalar';
import { converter } from './converter';

describe('End to End', () => 
{
	test('Seeding rates', () => 
	{
		const seedsPerAcre = ratio(44000, 'seeds', 'ac');
		const confidenceCoefficent = converter(1, 'seeds', 0.8, 'plants');
		const fieldArea = scalar(10, 'ha');
		const hectaresToAcres = converter('ha', 'ac');
		const seedsPerBag = ratio(50000, 'seeds', 1, 'bags');
		const costPerBag = ratio(50, 'dollars', 'bags'); 
		const expectedYieldPerHectare = ratio(12, 'bushels', 'ha');
		const pricePerTon = ratio(84, 'dollars', 'tons');
		const bushelsPerTon = ratio(0.0254, 'tons', 'bushels');

		// What is our planting emergence rate?
		const emergenceRate = seedsPerAcre.convertNumerator(confidenceCoefficent);
		expect(emergenceRate.value).toBe(35200);

		// Figure out our costs
		const seedsPerHectare = seedsPerAcre.convertDenominator(hectaresToAcres.inverse());
		expect(seedsPerHectare.value).toBeCloseTo(17806.18, 1);
		const totalSeedsRequired = seedsPerHectare.multiply(fieldArea);
		expect(totalSeedsRequired.value).toBeCloseTo(178061.81, 1);
		const bagsRequired = totalSeedsRequired.divideByMeasurement(seedsPerBag);
		const roundedUpBagsRequired = bagsRequired.modify(Math.ceil);
		expect(roundedUpBagsRequired.value).toBe(4);
		const costOfField = roundedUpBagsRequired.multiplyByMeasurement(costPerBag);
		expect(costOfField.value).toBe(200);

		// Figure out our revenue
		const expectedYieldForField = expectedYieldPerHectare.multiply(fieldArea);
		expect(expectedYieldForField.value).toBe(120);
		const totalTonsOfYield = expectedYieldForField.multiplyByMeasurement(bushelsPerTon);
		expect(totalTonsOfYield.value).toBe(3.048);
		const totalRevenueOfField = totalTonsOfYield.multiplyByMeasurement(pricePerTon);
		expect(totalRevenueOfField.value).toBe(256.032);

		const profit = totalRevenueOfField.subtract(costOfField);
		expect(profit.value).toBeCloseTo(56.032,3);
	});

	// The original use case was fitting to a benefit (ROI) calculator for farmers.
	test('Actual logic for benefit calculations', () => 
	{
		const cornPrice = ratio(200, 'euros', 'tons');
		const costPerBag = ratio(99, 'euros', 'bags');
		const seedsPerBag = ratio(50000, 'seeds', 'bags');

		const area = scalar(7.49, 'ha');
		const convertArea = converter('m2', 'ha');
		const expectedYield = ratio(10.3, 'tons', 'ha');

		const yieldOptimumYield = ratio(10.72, 'tons', 'ha');
		const yieldPlantingRate = ratio(6.8, 'seeds', 'm2');

		const economicOptimumYield = ratio(10.701803208870, 'tons', 'ha');
		const economicPlantingRate = ratio(6.359325538925, 'seeds', 'm2');

		const standardYield = ratio(10.696071670641, 'tons', 'ha');
		const standardPlantingRate = ratio(7.2, 'seeds', 'm2');

		const yieldAdvantage = (economicOptimumYield.subtract(standardYield)).multiply(area);
		expect(yieldAdvantage.value).toBeCloseTo(0.042929221334,5);		
		
		const extraRevenue = yieldAdvantage.multiplyByMeasurement(cornPrice);
		const extraSeeds = (economicPlantingRate.subtract(standardPlantingRate)).multiply(area.convert(convertArea.inverse()));
		const extraBags = extraSeeds.divideByMeasurement(seedsPerBag);
		const extraCost = extraBags.multiplyByMeasurement(costPerBag);
		const profit = extraRevenue.subtract(extraCost);

		expect(profit.value).toBeCloseTo(133.26, 2);
	});
});