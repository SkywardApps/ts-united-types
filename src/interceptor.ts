import autoConverter from 'convert-units';
import { UnitedInterceptor } from './types/UnitedInterceptor';

export function interceptor<N extends string>(v: number, u: N): UnitedInterceptor<N> 
{
	return new UnitedInterceptor<N>(v, u);
}

export function dynamicToInterceptor<N extends string>(value: UnitedInterceptor<string>, outUnit: N): UnitedInterceptor<N>
export function dynamicToInterceptor<N extends string>(value: number, inUnit: string, outUnit: N): UnitedInterceptor<N>
export function dynamicToInterceptor<N extends string>(
	value: number | UnitedInterceptor<string>,
	inUnit: string | N,
	outUnit?: N
): UnitedInterceptor<N>
{
	// by providing types, providing just a string is no longer allowed- even though that's the primary use-case in Javascript
	const numericValue = typeof value === 'number' ? value : value.value;
	const inUnitName = typeof value === 'number' ? inUnit : value.unit;
	const outUnitName = (typeof outUnit === 'string' ? outUnit : inUnit) as N;
	const convertedValue = autoConverter(numericValue).from(inUnitName as any).to(outUnitName as any);
	return new UnitedInterceptor<N>(convertedValue, outUnitName);
}

export function interceptorToDynamic<InT extends string>(value: UnitedInterceptor<InT>, outUnit: string): number
{
	const convertedValue = autoConverter(value.value).from(value.unit as any).to(outUnit as any);
	return convertedValue;
}