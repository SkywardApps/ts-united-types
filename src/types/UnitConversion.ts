import { UnitedScalar } from './UnitedScalar';

export class UnitConversion<T extends string, D extends string> 
{
	public static isConversion<T extends string, D extends string>(v: any) : v is UnitConversion<T, D>
	{
		return !!v.source?.unit && !!v.dest?.unit;
	}
	public readonly source: UnitedScalar<T>;
	public readonly dest: UnitedScalar<D>;

	public constructor(source: UnitedScalar<T>, dest: UnitedScalar<D>) 
	{
		this.source = source;
		this.dest = dest;
	}

	public inverse() : UnitConversion<D, T>
	{
		return new UnitConversion<D, T>(this.dest, this.source);
	}
}
