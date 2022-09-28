import { ratio } from '../ratio';
import { scalar } from '../scalar';
import { UnitConversion } from './UnitConversion';
import { UnitedScalar } from './UnitedScalar';
import { UnitTypeError } from './UnitTypeError';


export class UnitedRatio<T extends string, D extends string> extends UnitConversion<T, D>
{
	public static isRatio<T extends string, D extends string>(v: any) : v is UnitedRatio<T, D>
	{
		return !!v.source?.unit && !!v.dest?.unit;
	}

	public get value() 
	{
		return this.source.value / this.dest.value;
	}

	public constructor(source: UnitedScalar<T>, dest: UnitedScalar<D>) 
	{
		super(source, dest);
	}

	public inverse() : UnitedRatio<D, T>
	{
		return new UnitedRatio<D, T>(this.dest, this.source);
	}

	public convertNumerator<TN extends string, TD extends string>(convertor: TN extends T ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', T, TN>) 
	{
		if(!UnitConversion.isConversion<TN, TD>(convertor))
		{
			throw new Error('Invalid conversion object');
		}
		const calculatedN = (this.source.value / convertor.source.value) * convertor.dest.value;
		return ratio(calculatedN, convertor.dest.unit, this.dest.value, this.dest.unit);
	}

	public convertDenominator<TN extends string, TD extends string>(convertor: TN extends D ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', D, TN>) 
	{
		if(!UnitConversion.isConversion<TN, TD>(convertor))
		{
			throw new Error('Invalid conversion object');
		}
		const calculatedD = (this.dest.value / convertor.dest.value) * convertor.source.value;
		return ratio(this.source.value, this.source.unit, calculatedD, convertor.dest.unit);
	}
	
	public add<TN, TD>(other: TN extends T ? TD extends D ? UnitedRatio<TN, TD> : UnitTypeError<'Denominator mismatch', TD, D> : UnitTypeError<'Numerator mismatch', TN, T>) 
	{
		return ratio(this.value + other.value, this.source.unit, 1, this.dest.unit);
	}

	public subtract<TN, TD>(other: TN extends T ? TD extends D ? UnitedRatio<TN, TD> : UnitTypeError<'Denominator mismatch', TD, D> : UnitTypeError<'Numerator mismatch', TN, T>) 
	{
		return ratio(this.value - other.value, this.source.unit, 1, this.dest.unit);
	}

	public multiply<TD extends string>(other: TD extends D ? UnitedScalar<TD> : UnitTypeError<'Denominator mismatch', D, TD>) 
	{
		return scalar(this.source.value * other.value / this.dest.value, this.source.unit);
	}
}

/*
export function ratio<TIn extends string, TDest extends string>(inValue: number, inUnits: TIn, outValue: number | TDest, outUnits?: TDest)
{
	const numerator = inValue;
	const denominator = typeof outValue == 'number' ? outValue : 1;
	return new UnitedRatio<UnitedScalar<TIn>, UnitedScalar<TDest>>(numerator / denominator);
}

class UnitedRatio<N extends string, D extends UnitedValue> 
{
	public readonly value: number;
	public constructor(source: Scalar<N>) 
	{
		this.value = v;
	}

	public add<TN, TD>(other: TN extends N ? TD extends D ? UnitedRatio<TN, TD> : UnitTypeError<'Denominator mismatch', TD, D> : UnitTypeError<'Numerator mismatch', TN, N>) 
	{
		return new UnitedRatio<N, D>(this.value + other.value);
	}

	public subtract<TN, TD>(other: TN extends N ? TD extends D ? UnitedRatio<TN, TD> : UnitTypeError<'Denominator mismatch', TD, D> : UnitTypeError<'Numerator mismatch', TN, N>) 
	{
		return new UnitedRatio<N, D>(this.value - other.value);
	}

	public multiply<TD extends UnitedValue>(other: TD extends D ? TD : UnitTypeError<'Denominator mismatch', D, TD>) 
	{
		return new UnitedValue(this.value * other.value) as N;
	}

	
}
*/