import { scalar, dynamicToScalar, scalarToDynamic } from './scalar';

describe('Unknown unit into the system', () => 
{
	test('(Runtime) Hectares to (Compiletime) Acres', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'ha';
		const outputAcres = dynamicToScalar(inputValue, inputUnit, 'ac');
		expect(outputAcres.value).toBeCloseTo(3.21237);
		expect(outputAcres.unit).toBe('ac');
	});

	test('(Runtime) Hectares to (Compiletime) Acres as scalar', () => 
	{
		const inputValue = scalar(1.3, 'ha' as string);
		const outputAcres = dynamicToScalar(inputValue, 'ac');
		expect(outputAcres.value).toBeCloseTo(3.21237);
		expect(outputAcres.unit).toBe('ac');
	});

	test('Invalid unit conversion', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'ha';
		expect(() => dynamicToScalar(inputValue, inputUnit, 's')).toThrowError('Cannot convert incompatible measures of time and area');
	});

	test('Unknown runtime unit', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'unknown_doesnt_exist';
		expect(() => dynamicToScalar(inputValue, inputUnit, 's')).toThrowError();
	});	

	test('Unknown compiletime unit', () => 
	{
		const inputValue = 1.3;
		const inputUnit = 'ha';
		expect(() => dynamicToScalar(inputValue, inputUnit, 'unknown_doesnt_exist')).toThrowError();
	});	
});

describe('Unknown unit out of the system', () =>
{
	test('(Compiletime) Hectares to (Runtime) Acres', () => 
	{
		const inputValue = scalar(1.3, 'ha');
		const outputUnits = 'ac';
		const outputAcres = scalarToDynamic(inputValue, outputUnits);
		expect(outputAcres).toBeCloseTo(3.21237);
	});

	test('Invalid unit conversion', () => 
	{
		const inputValue = scalar(1.3, 'ha');
		const outputUnits = 's';
		expect(() => scalarToDynamic(inputValue, outputUnits)).toThrowError('Cannot convert incompatible measures of time and area');
	});

	test('Unknown runtime unit', () => 
	{
		const inputValue = scalar(1.3, 'ha');
		const outputUnits = 'unknown_doesnt_exist';
		expect(() => scalarToDynamic(inputValue, outputUnits)).toThrowError();
	});	

	test('Unknown compiletime unit', () => 
	{
		const inputValue = scalar(1.3, 'unknown_doesnt_exist');
		const outputUnits = 'ac';
		expect(() => scalarToDynamic(inputValue, outputUnits)).toThrowError();
	});	
});

describe('Passing around unknown', () => 
{
	const unit: string = 'ha';
	const outUnit: string = 'ac';
	const value = scalar(1.3, unit);
	const output = dynamicToScalar(value, outUnit);
});

