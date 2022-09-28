import { scalar } from './scalar';
import { UnitConversion } from './types/UnitConversion';
import autoConverter from 'convert-units';
import { UnitTypeError } from './types/UnitTypeError';


export function converter<InT extends string, OutT extends string>(inV: number, inT: InT, outV: number, outT: OutT) : UnitConversion<InT, OutT>;
export function converter<InT extends autoConverter.Area, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Area ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Area, OutT>;
export function converter<InT extends autoConverter.Distance, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Distance ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Distance, OutT>;
export function converter<InT extends autoConverter.Angle, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Angle ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Angle, OutT>;
export function converter<InT extends autoConverter.ApparentPower, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.ApparentPower ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.ApparentPower, OutT>;
export function converter<InT extends autoConverter.Current, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Current ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Current, OutT>;
export function converter<InT extends autoConverter.Ditgital, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Ditgital ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Ditgital, OutT>;
export function converter<InT extends autoConverter.Energy, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Energy ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Energy, OutT>;
export function converter<InT extends autoConverter.Frequency, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Frequency ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Frequency, OutT>;
export function converter<InT extends autoConverter.Illuminance, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Illuminance ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Illuminance, OutT>;
export function converter<InT extends autoConverter.Mass, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Mass ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Mass, OutT>;
export function converter<InT extends autoConverter.Pace, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Pace ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Pace, OutT>;
export function converter<InT extends autoConverter.PartsPer, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.PartsPer ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.PartsPer, OutT>;
export function converter<InT extends autoConverter.Power, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Power ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Power, OutT>;
export function converter<InT extends autoConverter.Pressure, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Pressure ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Pressure, OutT>;
export function converter<InT extends autoConverter.ReactiveEnergy, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.ReactiveEnergy ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.ReactiveEnergy, OutT>;
export function converter<InT extends autoConverter.ReactivePower, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.ReactivePower ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.ReactivePower, OutT>;
export function converter<InT extends autoConverter.Speed, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Speed ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Speed, OutT>;
export function converter<InT extends autoConverter.Temperature, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Temperature ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Temperature, OutT>;
export function converter<InT extends autoConverter.Time, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Time ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Time, OutT>;
export function converter<InT extends autoConverter.Voltage, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Voltage ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Voltage, OutT>;
export function converter<InT extends autoConverter.Volume, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.Volume ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.Volume, OutT>;
export function converter<InT extends autoConverter.VolumeFlowRate, OutT extends string>(inT: InT, outT: OutT) :  OutT extends autoConverter.VolumeFlowRate ?  UnitConversion<InT, OutT> : UnitTypeError<'Mismatched unit type for converter', autoConverter.VolumeFlowRate, OutT>;
export function converter<InT extends string, OutT extends string>(a: number | InT, b: InT | OutT, c?: number, d?: OutT) : UnitConversion<InT, OutT>
{
	if(typeof a === 'number' && typeof c === 'number')
	{
		const inV = a;
		const inT = b as InT;
		const outV = c;
		const outT = d as OutT;
		return new UnitConversion<InT, OutT>(scalar(inV, inT), scalar(outV, outT));
	}
	else
	{
		const inT = a as autoConverter.Unit;
		const inV = 1;
		const outT = b as autoConverter.Unit;
		const outV = autoConverter(inV).from(inT).to(outT);
		return new UnitConversion<InT, OutT>(scalar(inV, inT as InT), scalar(outV, outT as OutT));
	}
}


