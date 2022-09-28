import { scalar } from './scalar';
import { UnitedRatio } from './types/UnitedRatio';



export function ratio<InT extends string, OutT extends string>(inV: number, inT: InT, outT: OutT): UnitedRatio<InT, OutT>;
export function ratio<InT extends string, OutT extends string>(inV: number, inT: InT, outV: number, outT: OutT): UnitedRatio<InT, OutT>;
export function ratio<InT extends string, OutT extends string>(inV: number, inT: InT, outV: number | OutT, outT?: OutT): UnitedRatio<InT, OutT> 
{
	const denominator = typeof outV === 'number' ? outV : 1;
	const outType = typeof outV === 'number' ? outT : outV;
	if (!outType) 
	{
		throw new Error('OutType was not provided');
	}
	return new UnitedRatio<InT, OutT>(scalar(inV, inT), scalar(denominator, outType));
}
