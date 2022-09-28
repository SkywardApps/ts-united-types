import { ratio } from './ratio';
import { scalar } from './scalar';
import { convertor } from './convertor';

describe('End to End', () => 
{
	test('Seeding rates', () => 
	{
		const seedsPerAcre = ratio(44000, 'seeds', 'acres');
		const confidenceCoefficent = convertor(1, 'seeds', 0.8, 'plants');
		const fieldArea = scalar(10, 'hectares');
		const hectaresToAcres = convertor(1, 'hectares', 2.471052, 'acres');
		const seedsPerBag = ratio(50000, 'seeds', 1, 'bags');
		const costPerBag = ratio(50, 'dollars', 'bags'); 
		const expectedYieldPerHectare = ratio(12, 'bushels', 'hectares');
		const pricePerTon = ratio(84, 'dollars', 'tons');
		const bushelsPerTon = ratio(0.0254, 'tons', 'bushels');

		// What is our planting emergence rate?
		const emergenceRate = seedsPerAcre.convertNumerator(confidenceCoefficent);
		expect(emergenceRate.value).toBe(35200);

		// Figure out our costs
		const seedsPerHectare = seedsPerAcre.convertDenominator(hectaresToAcres.inverse());
		expect(seedsPerHectare.value.toFixed(5)).toBe(17806.181334.toFixed(5));
		const totalSeedsRequired = seedsPerHectare.multiply(fieldArea);
		expect(totalSeedsRequired.value.toFixed(5)).toBe(178061.813349.toFixed(5));
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
		expect(profit.value.toFixed(3)).toBe(56.032.toFixed(3));
	});

	// The original use case was fitting to a benefit (ROI) calculator for farmers.
	test('Actual logic for benefit calculations', () => 
	{
		const cornPrice = ratio(200, 'euros', 'tons');
		const costPerBag = ratio(99, 'euros', 'bags');
		const seedsPerBag = ratio(50000, 'seeds', 'bags');

		const area = scalar(7.49, 'hectares');
		const convertArea = convertor(10000, 'square meters', 1, 'hectares');
		const expectedYield = ratio(10.3, 'tons', 'hectares');

		const yieldOptimumYield = ratio(10.72, 'tons', 'hectares');
		const yieldPlantingRate = ratio(6.8, 'seeds', 'square meters');

		const economicOptimumYield = ratio(10.701803208870, 'tons', 'hectares');
		const economicPlantingRate = ratio(6.359325538925, 'seeds', 'square meters');

		const standardYield = ratio(10.696071670641, 'tons', 'hectares');
		const standardPlantingRate = ratio(7.2, 'seeds', 'square meters');

		const yieldAdvantage = (economicOptimumYield.subtract(standardYield)).multiply(area);
		expect(yieldAdvantage.value.toFixed(5)).toBe(0.042929221334.toFixed(5));		
		
		const extraRevenue = yieldAdvantage.multiplyByMeasurement(cornPrice);
		const extraSeeds = (economicPlantingRate.subtract(standardPlantingRate)).multiply(area.convert(convertArea.inverse()));
		const extraBags = extraSeeds.divideByMeasurement(seedsPerBag);
		const extraCost = extraBags.multiplyByMeasurement(costPerBag);
		const profit = extraRevenue.subtract(extraCost);

		expect(profit.value.toFixed(2)).toBe(133.26.toFixed(2));
	});
});