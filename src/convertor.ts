import { scalar } from './scalar';
import { UnitConversion } from './types/UnitConversion';


export function convertor<InT extends string, OutT extends string>(inV: number, inT: InT, outV: number, outT: OutT) 
{
	return new UnitConversion<InT, OutT>(scalar(inV, inT), scalar(outV, outT));
}
