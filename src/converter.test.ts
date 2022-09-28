import { converter } from './converter';

describe('converter factory', () => 
{
	test('Basic Construction', () => 
	{
		const simple = converter(1, 'one', 2, 'two');
		expect(simple).not.toBeFalsy();
		expect(simple.source.value).toBe(1);
		expect(simple.source.unit).toBe('one');
		expect(simple.dest.value).toBe(2);
		expect(simple.dest.unit).toBe('two');
	});

	test('Auto Conversion Constructor', () => 
	{
		const auto = converter('ha', 'ac');
		expect(auto).not.toBeFalsy();
		expect(auto.source.value).toBe(1);
		expect(auto.source.unit).toBe('ha');
		expect(auto.dest.value).toBeCloseTo(2.4710514233241505);
		expect(auto.dest.unit).toBe('ac');
	});
});