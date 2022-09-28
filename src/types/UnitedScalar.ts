import { UnitedValue } from './UnitedValue';
import { UnitTypeError } from './UnitTypeError';
import { ratio } from '../ratio';
import { UnitConversion } from './UnitConversion';
import { scalar } from '../scalar';
import { UnitedRatio } from './UnitedRatio';

export class UnitedScalar<N extends string> extends UnitedValue 
{
	public readonly unit : N;

	public constructor(v: number, u: N) 
	{
		super(v);
		this.unit = u;
	}

	public modify(func: (x: number) => number) 
	{
		return new UnitedScalar<N>(func(this.value), this.unit);		
	}

	public add<T>(other: T extends N ? UnitedScalar<T> : UnitTypeError<'Unit mismatch', N, T>) 
	{
		return new UnitedScalar<N>(this.value + other.value, this.unit);
	}

	public subtract<T>(other: T extends N ? UnitedScalar<T> : UnitTypeError<'Unit mismatch', N, T>) 
	{
		return new UnitedScalar<N>(this.value - other.value, this.unit);
	}

	public divideBy<T extends string>(other: UnitedScalar<T>)
	{
		return ratio(this.value, this.unit, other.value, other.unit);// new UnitedRatio<UnitedScalar<N>, UnitedScalar<T>>(this.value / other.value);
	}

	public multiply(unitlessValue: number)
	{
		return scalar(this.value * unitlessValue, this.unit);
	}

	// this is where we take "meters" / metersPerSecond => seconds
	public divideByMeasurement<TN extends string, TD extends string>(other: TN extends N ? UnitedRatio<TN, TD> : UnitTypeError<'Unit mismatch', N, TN>) 
	{
		if(!UnitedRatio.isRatio<N, TD>(other))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedScalar<TD>(this.value / other.value, other.dest.unit);
	}

	public multiplyByMeasurement<TN extends string, TD extends string>(other: TD extends N ? UnitedRatio<TN, TD> : UnitTypeError<'Unit mismatch', N, TD>) 
	{
		if(!UnitedRatio.isRatio<TN, TD>(other))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedScalar<TN>(this.value * other.value, other.source.unit);
	}

	public convert<TN extends string, TD extends string>(converter: TN extends N ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', N, TN>) 
	{
		if(!UnitConversion.isConversion<TN, TD>(converter))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedScalar<TD>((this.value / converter.source.value) * converter.dest.value, converter.dest.unit);
	}
}
