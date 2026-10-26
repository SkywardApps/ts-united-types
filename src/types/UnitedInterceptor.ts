import { UnitConversion } from './UnitConversion';
import { UnitTypeError } from './UnitTypeError';
import { interceptor } from '../interceptor';
import { ratio } from '../ratio';

/**
 * NOT FOR GENERAL USE -- use the `interceptor` factory method, typically.
 * A `Unit`-ed interceptor value is a simple number with a specific unit attached to it.
 * 
 * Examples: 35.6 F or 2 C.
 */
export class UnitedInterceptor<N extends string>
{
	public readonly unit: N;
	public readonly value: number;

	/**
	 * The default constructor takes the value and the unit.
	 */
	public constructor(v: number, u: N) 
	{
		this.value = v;
		this.unit = u;
	}

	/**
	 * Return a new interceptor of the same unit with a modified value.
	 */
	public modify(func: (x: number) => number) 
	{
		return new UnitedInterceptor<N>(func(this.value), this.unit);		
	}

	/**
	 * Return a new interceptor of the same unit with a value that is the sum of this and the parameter.
	 */
	public add<T>(other: T extends N ? UnitedInterceptor<T> : UnitTypeError<'Unit mismatch', N, T>) 
	{
		return new UnitedInterceptor<N>(this.value + other.value, this.unit);
	}

	/**
	 * Return a new interceptor of the same unit with a value that is the parameter subtracted from this.
	 */
	public subtract<T>(other: T extends N ? UnitedInterceptor<T> : UnitTypeError<'Unit mismatch', N, T>) 
	{
		return new UnitedInterceptor<N>(this.value - other.value, this.unit);
	}

	/**
	 * Return a ratio that is this over the provided parameter.
	 */
	public divideBy<T extends string>(other: UnitedInterceptor<T>)
	{
		return ratio(this.value, this.unit, other.value, other.unit);
	}

	/**
	 * Return a new interceptor of the same unit with a value that has been scaled by the provided parameter.
	 */
	public multiply(unitlessValue: number)
	{
		return interceptor(this.value * unitlessValue, this.unit);
	}

	/**
	 * Convert this interceptor from one unit to another.
	 */
	public convert<TN extends string, TD extends string>(
		converter: TN extends N ? UnitConversion<TN, TD> : UnitTypeError<'Conversion unit mismatch', N, TN>
	) 
	{
		if (!UnitConversion.isConversion<TN, TD>(converter))
		{
			throw new Error('Invalid conversion object');
		}
		return new UnitedInterceptor<TD>((this.value / converter.source.value) * converter.dest.value, converter.dest.unit);
	}
}