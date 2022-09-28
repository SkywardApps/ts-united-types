import { ratio } from '../ratio';

describe('Ratio', () => 
{
	test('constructor', () => 
	{
		const newValue = ratio(5.5, 'meters', 'second');
		expect(newValue).not.toBeFalsy();
		expect(newValue.value).toBe(5.5);
	});
});