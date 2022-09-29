import { ratio } from '../ratio';
import { scalar } from '../scalar';
import { UnitConversion } from './UnitConversion';
import { UnitedScalar } from './UnitedScalar';
import { UnitTypeError } from './UnitTypeError';


/**
 * A `Unit`-ed ratio is a relationship between two differently-`unit`-ed scalar values.
 * 
 * Examples: 10 meters per second or 4 width : 3 height
 * This stores the source as the numerator and the dest as the denominator.
 */
export class UnitedRatio<T extends string, D extends string> extends UnitConversion<T, D>
{
	/**
	 * A typeguard to ensire that the provider looks like a ratio class.
	 */
	public static isRatio<T extends string, D extends string>(v: any) : v is UnitedRatio<T, D>
	{
		return !!v.source?.unit && !!v.dest?.unit;
	}

	/**
	 * Get the ratio as a single number.
	 */
	public get value() 
	{
		return this.source.value / this.dest.value;
	}

	/**
	 * The default constructor takes the two unit-ed scalars and stores their relationship.
	 */
	public constructor(source: UnitedScalar<T>, dest: UnitedScalar<D>) 
	{
		super(source, dest);
	}

	/**
	 * Flip the numerator and denominator for the inverse relationship.
	 */
	public inverse() : UnitedRatio<D, T>
	{
		return new UnitedRatio<D, T>(this.dest, this.source);
	}

	/**
	 * Convert the units of the numerator.
	 */
	public convertNumerator<TN extends string, TD extends string>(converter: TN extends T ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', T, TN>) 
	{
		if(!UnitConversion.isConversion<TN, TD>(converter))
		{
			throw new Error('Invalid conversion object');
		}
		const calculatedN = (this.source.value / converter.source.value) * converter.dest.value;
		return ratio(calculatedN, converter.dest.unit, this.dest.value, this.dest.unit);
	}

	/**
	 * Convert the units of the denominator.
	 */
	public convertDenominator<TN extends string, TD extends string>(converter: TN extends D ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', D, TN>) 
	{
		if(!UnitConversion.isConversion<TN, TD>(converter))
		{
			throw new Error('Invalid conversion object');
		}
		const calculatedD = (this.dest.value / converter.dest.value) * converter.source.value;
		return ratio(this.source.value, this.source.unit, calculatedD, converter.dest.unit);
	}
	
	/**
	 * Add two ratios of identical units.
	 */
	public add<TN, TD>(other: TN extends T ? TD extends D ? UnitedRatio<TN, TD> : UnitTypeError<'Denominator mismatch', TD, D> : UnitTypeError<'Numerator mismatch', TN, T>) 
	{
		return ratio(this.value + other.value, this.source.unit, 1, this.dest.unit);
	}

	/**
	 * Subtract the parameter ratio from this, requiring identical units.
	 */
	public subtract<TN, TD>(other: TN extends T ? TD extends D ? UnitedRatio<TN, TD> : UnitTypeError<'Denominator mismatch', TD, D> : UnitTypeError<'Numerator mismatch', TN, T>) 
	{
		return ratio(this.value - other.value, this.source.unit, 1, this.dest.unit);
	}

	/**
	 * Multiply this ratio by a scalar.
	 * 
	 * The scalar's unit's must match the denominator of this ratio.
	 * The resulting scalar's units will match the numerator of this ratio.
	 */
	public multiply<TD extends string>(other: TD extends D ? UnitedScalar<TD> : UnitTypeError<'Denominator mismatch', D, TD>) 
	{
		return scalar(this.source.value * other.value / this.dest.value, this.source.unit);
	}
}
