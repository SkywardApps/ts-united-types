import { converter } from '../converter';
import { scalar } from '../scalar';

describe('Scalar', () => 
{
	test('constructor', () => 
	{
		const newValue = scalar(5.5, 'meters');
		expect(newValue).not.toBeFalsy();
		expect(newValue.value).toBe(5.5);
		expect(newValue.unit).toBe('meters');
	});

	test('add', () => 
	{
		const v1 = (Math.random() - 0.5) * 100000000;
		const m1 = scalar(v1, 'meters');
		
		const v2 = (Math.random() - 0.5) * 100000000;
		const m2 = scalar(v2, 'meters');

		const m12 = m1.add(m2);
		expect(m12).not.toBeUndefined();
		expect(m12.value).toBe(v1 + v2);

		const m21 = m2.add(m1);
		expect(m21).not.toBeUndefined();
		expect(m21.value).toBe(v1 + v2);
	});

	test('subtract', () => 
	{
		const v1 = (Math.random() - 0.5) * 100000000;
		const m1 = scalar(v1, 'meters');
		
		const v2 = (Math.random() - 0.5) * 100000000;
		const m2 = scalar(v2, 'meters');

		const m12 = m1.subtract(m2);
		expect(m12).not.toBeUndefined();
		expect(m12.value).toBe(v1 - v2);

		const m21 = m2.subtract(m1);
		expect(m21).not.toBeUndefined();
		expect(m21.value).toBe(v2 - v1);

		expect(m21.value).not.toBe(m12.value);
	});

	test('divideBy', () => 
	{
		const meters = scalar(5.5, 'meters');
		const seconds = scalar(3.1, 'seconds');
		const metersPerSecond = meters.divideBy(seconds);

		expect(metersPerSecond).not.toBeFalsy();
		expect(metersPerSecond.value).toBe(5.5 / 3.1);
	});
});


const distance1 = scalar(5, 'm');	// type: UnitedScalar<'m'>
const distance2 = scalar(10, 'm');	// type: UnitedScalar<'m'>
const time  = scalar(3, 's');		// type: UnitedScalar<'s'>

// Add two scalars together.  This uses type-safety to encorce 
// unit compatibility.
const totalDistance = distance1.add(distance2); // type: UnitedScalar<'m'>

// Convert a scalar to a ratio
const rate = totalDistance.divideBy(time); // type: UnitedRatio<'m','s'> 
const metersPerSecond = rate.value;

const secondsToHours = converter('s', 'h');	// type: UnitConversion<'s', 'h'>
const rateInHours = rate.convertDenominator(secondsToHours); // type: UnitedRatio<'m','h'>
const metersPerHour = rateInHours.value;

