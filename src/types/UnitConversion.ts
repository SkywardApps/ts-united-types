import { UnitedScalar } from './UnitedScalar';

/**
 * NOT FOR GENERAL USE -- use the `converter` factory method, typically.
 * This represents a conversion from one unit to another of the same category.
 * 
 * It has a source unit and a destination unit, along with a ratio.  For precision
 * reasons, this is actually stored as a fraction -- so you can store 1 / 3 rather 
 * than 0.333333.
 * 
 * Logic for applying the conversion is contained in the value class.
 */
export class UnitConversion<T extends string, D extends string> 
{
	/**
	 * Runtime type guard to test if the parameter appears to be a unit conversion class.
	 */
	public static isConversion<T extends string, D extends string>(v: any) : v is UnitConversion<T, D>
	{
		return !!v.source?.unit && !!v.dest?.unit;
	}

	public readonly source: UnitedScalar<T>;
	public readonly dest: UnitedScalar<D>;

	/**
	 * Default constructor requires the source unit to convert _from_ and the source unit to convert _to_.
	 */
	public constructor(source: UnitedScalar<T>, dest: UnitedScalar<D>) 
	{
		this.source = source;
		this.dest = dest;
	}

	/**
	 * Invert the conversion from source -> destination to destination -> source.
	 */
	public inverse() : UnitConversion<D, T>
	{
		return new UnitConversion<D, T>(this.dest, this.source);
	}
}
