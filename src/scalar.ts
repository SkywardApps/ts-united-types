import autoConverter from 'convert-units';
import { UnitedScalar } from './types/UnitedScalar';

export function scalar<N extends string>(v: number, u: N): UnitedScalar<N> 
{
	return new UnitedScalar<N>(v, u);
}

export function dynamicToScalar<N extends string>(value: UnitedScalar<string>, outUnit: N): UnitedScalar<N>
export function dynamicToScalar<N extends string>(value: number, inUnit: string, outUnit: N): UnitedScalar<N>
export function dynamicToScalar<N extends string>(value: number | UnitedScalar<string>, inUnit: string | N, outUnit?: N): UnitedScalar<N>
{
	// Ironically by providing types, providing just a string is no longer allowed -- even though
	// that's the primary use-case in javascript.
	const numericValue = typeof value === 'number' ? value : value.value;
	const inUnitName = typeof value === 'number' ? inUnit : value.unit;
	const outUnitName = (typeof outUnit === 'string' ? outUnit : inUnit) as N;
	const convertedValue = autoConverter(numericValue).from(inUnitName as any).to(outUnitName as any);
	return new UnitedScalar<N>(convertedValue, outUnitName);
}

export function scalarToDynamic<InT extends string>(value: UnitedScalar<InT>, outUnit: string): number
{
	const convertedValue = autoConverter(value.value).from(value.unit as any).to(outUnit as any);
	return convertedValue;
}