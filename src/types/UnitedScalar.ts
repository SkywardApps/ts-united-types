import { UnitTypeError } from './UnitTypeError';
import { ratio } from '../ratio';
import { UnitConversion } from './UnitConversion';
import { scalar } from '../scalar';
import { UnitedRatio } from './UnitedRatio';

/**
 * A `Unit`-ed scalar value is a simple number with a specific unit attached to it.
 * 
 * Examples: 5 meters or 2.2 seconds.
 */
export class UnitedScalar<N extends string>
{
	public readonly unit : N;
	public readonly value : number;

	/**
	 * The default constructor takes the value and the unit.
	 */
	public constructor(v: number, u: N) 
	{
		this.value = v;
		this.unit = u;
	}

	/**
	 * Return a new scalar of the same unit with a modified value.
	 */
	public modify(func: (x: number) => number) 
	{
		return new UnitedScalar<N>(func(this.value), this.unit);		
	}

	/**
	 * Return a new scalar of the same unit with a value that is the sum of 
	 * this and the parameter.
	 */
	public add<T>(other: T extends N ? UnitedScalar<T> : UnitTypeError<'Unit mismatch', N, T>) 
	{
		return new UnitedScalar<N>(this.value + other.value, this.unit);
	}

	/**
	 * Return a new scalar of the same unit with a value that is the parameter 
	 * subtracted from this.
	 */
	public subtract<T>(other: T extends N ? UnitedScalar<T> : UnitTypeError<'Unit mismatch', N, T>) 
	{
		return new UnitedScalar<N>(this.value - other.value, this.unit);
	}

	/**
	 * Return a ratio that is this over the provided parameter.
	 */
	public divideBy<T extends string>(other: UnitedScalar<T>)
	{
		return ratio(this.value, this.unit, other.value, other.unit);
	}

	/**
	 * Return a new scalar of the same unit with a value that has been scaled
	 * by the provided parameter;
	 */
	public multiply(unitlessValue: number)
	{
		return scalar(this.value * unitlessValue, this.unit);
	}

	/**
	 * Return a new measurement that is the result of this scalar divided by the
	 * provided ratio's numerator multipled by the ratio's denominator. Essentially,
	 * apply the inverse of the ratio.
	 * 
	 * The unit of the ratio's numerator should match this scalar's unit, and the 
	 * resulting scalar's units will match the ratio's denominator.
	 * 
	 * For example "meters" divideByMeasurement  "meters" / "seconds" => "seconds"
	 */
	public divideByMeasurement<TN extends string, TD extends string>(other: TN extends N ? UnitedRatio<TN, TD> : UnitTypeError<'Unit mismatch', N, TN>) 
	{
		if(!UnitedRatio.isRatio<N, TD>(other))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedScalar<TD>(this.value / other.value, other.dest.unit);
	}

	/**
	 * Return a new measurement that is the result of this scalar divided by the
	 * provided ratio's denominator multipled by the ratio's numerator. Essentially,
	 * apply the ratio.
	 * 
	 * The unit of the ratio's denominator should match this scalar's unit, and the 
	 * resulting scalar's units will match the ratio's numerator.
	 * 
	 * For example "seconds" multiplyByMeasurement  "meters" / "seconds" => "meters"
	 */
	public multiplyByMeasurement<TN extends string, TD extends string>(other: TD extends N ? UnitedRatio<TN, TD> : UnitTypeError<'Unit mismatch', N, TD>) 
	{
		if(!UnitedRatio.isRatio<TN, TD>(other))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedScalar<TN>(this.value * other.value, other.source.unit);
	}

	/**
	 * Convert this scalar from one unit to another.
	 */
	public convert<TN extends string, TD extends string>(converter: TN extends N ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', N, TN>) 
	{
		if(!UnitConversion.isConversion<TN, TD>(converter))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedScalar<TD>((this.value / converter.source.value) * converter.dest.value, converter.dest.unit);
	}
}
