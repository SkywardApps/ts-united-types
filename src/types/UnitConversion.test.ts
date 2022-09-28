import { convertor } from '../convertor';
import { ratio } from '../ratio';
import { scalar } from '../scalar';

describe('Conversion', () => 
{
	test('Constructor', () => 
	{
		const convert = convertor(1, 'hectares', 2.471052, 'acres');
		expect(convert).not.toBeFalsy();
		expect(convert.source.value).toBe(1);
		expect(convert.source.unit).toBe('hectares');
		expect(convert.dest.value).toBe(2.471052);
		expect(convert.dest.unit).toBe('acres');
	});

	test('Convert', () => 
	{
		const value = scalar(10, 'hectares');   
		const convert = convertor(1, 'hectares', 2.471052, 'acres');
		const result = value.convert(convert);
		expect(result).not.toBeFalsy();
		expect(result.value.toFixed(5)).toBe(24.71052.toFixed(5));
		expect(result.unit).toBe('acres');
	});

	test('Convert non-unit value', () => 
	{
		const value = scalar(10, 'hectares');   
		const convert = convertor(2.5, 'hectares', 6.177629, 'acres');
		const result = value.convert(convert);
		expect(result).not.toBeFalsy();
		expect(result.value.toFixed(5)).toBe(24.71052.toFixed(5));
		expect(result.unit).toBe('acres');		
	});

	test('Convert in reverse', () =>
	{
		const value = scalar(10, 'hectares');   
		const convert = convertor(2.471052, 'acres', 1, 'hectares');
		const result = value.convert(convert.inverse());
		expect(result).not.toBeFalsy();
		expect(result.value.toFixed(5)).toBe(24.71052.toFixed(5));
		expect(result.unit).toBe('acres');	
	});

	test('Convert a denominator', () => 
	{
		const measure = ratio(55.55, 'meters', 'seconds'); 
		const convert = convertor(1, 'seconds', 60, 'minutes');
		const converted = measure.convertDenominator(convert);
		expect(converted).not.toBeFalsy();
		expect(converted.value).toBe(55.55 * 60);
	});
	
	test('Convert a numerator', () => 
	{
		const measure = ratio(55.55, 'meters', 'seconds'); 
		const convert = convertor(1, 'meters', 100, 'centimeters');
		const converted = measure.convertNumerator(convert);
		expect(converted).not.toBeFalsy();
		expect(converted.value).toBe(5555);
	});
});