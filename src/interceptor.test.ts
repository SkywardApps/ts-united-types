import { dynamicToInterceptor, interceptor, interceptorToDynamic } from './interceptor';

describe('Unknown unit into the system', () => 
{
	test('(Runtime) Celsius to (Compiletime) Fahrenheit', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'C';
		const outputFahrenheit = dynamicToInterceptor(inputValue, inputUnit, 'F');
		expect(outputFahrenheit.value).toBe(34.34);
		expect(outputFahrenheit.unit).toBe('F');
	});

	test('(Runtime) Celsius to (Compiletime) Fahrenheit as interceptor', () => 
	{
		const inputValue = interceptor(1.3, 'C' as string);
		const outputFahrenheit = dynamicToInterceptor(inputValue, 'F');
		expect(outputFahrenheit.value).toBe(34.34);
		expect(outputFahrenheit.unit).toBe('F');
	});

	test('Invalid unit conversion', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'C';
		expect(() => dynamicToInterceptor(inputValue, inputUnit, 's'))
			.toThrowError('Cannot convert incompatible measures of time and temperature');
	});

	test('Unknown runtime unit', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'unknown_doesnt_exist';
		expect(() => dynamicToInterceptor(inputValue, inputUnit, 's')).toThrowError();
	});	

	test('Unknown compiletime unit', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'C';
		expect(() => dynamicToInterceptor(inputValue, inputUnit, 'unknown_doesnt_exist')).toThrowError();
	});	
});

describe('Unknown unit out of the system', () =>
{
	test('(Compiletime) Celsius to (Runtime) Fahrenheit', () => 
	{
		const inputValue = interceptor(1.3, 'C');
		const outputUnits = 'F';
		const outputFahrenheit = interceptorToDynamic(inputValue, outputUnits);
		expect(outputFahrenheit).toBe(34.34);
	});

	test('Invalid unit conversion', () => 
	{
		const inputValue = interceptor(1.3, 'C');
		const outputUnits = 's';
		expect(() => interceptorToDynamic(inputValue, outputUnits))
			.toThrowError('Cannot convert incompatible measures of time and temperature');
	});

	test('Unknown runtime unit', () => 
	{
		const inputValue = interceptor(1.3, 'C');
		const outputUnits = 'unknown_doesnt_exist';
		expect(() => interceptorToDynamic(inputValue, outputUnits)).toThrowError();
	});	

	test('Unknown compiletime unit', () => 
	{
		const inputValue = interceptor(1.3, 'unknown_doesnt_exist');
		const outputUnits = 'F';
		expect(() => interceptorToDynamic(inputValue, outputUnits)).toThrowError();
	});	
});