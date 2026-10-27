/**
 * Compile-time tests for the unit type system.
 *
 * Nothing here runs. `yarn test:types` type-checks this file with `tsc --noEmit`:
 * - every `// @ts-expect-error` line must fail to compile (a unit mismatch is rejected),
 *   and tsc reports an unused directive if that line ever starts compiling;
 * - every `expectType` line must infer exactly the stated type.
 */
import { converter, ratio, scalar, UnitConversion, UnitedRatio, UnitedScalar } from '../src';
import { UnitTypeError } from '../src/types/UnitTypeError';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

function expectType<Expected>()
{
	return <Actual>(_actual: Actual, ..._check: Equal<Actual, Expected> extends true ? [] : [never]) => undefined;
}

const meters = scalar(5, 'm');
const moreMeters = scalar(10, 'm');
const seconds = scalar(3, 's');
const hours = scalar(1, 'h');
const metersPerSecond = ratio(10, 'm', 's');
const metersPerHour = ratio(10, 'm', 'h');
const feetPerSecond = ratio(10, 'ft', 's');
const secondsToHours = converter('s', 'h');

// --- Scalars ---------------------------------------------------------------

expectType<UnitedScalar<'m'>>()(meters);
expectType<UnitedScalar<'m'>>()(meters.add(moreMeters));
expectType<UnitedScalar<'m'>>()(meters.subtract(moreMeters));
expectType<UnitedScalar<'m'>>()(meters.multiply(2));
expectType<UnitedScalar<'m'>>()(meters.modify(Math.ceil));

// @ts-expect-error adding seconds to meters
meters.add(seconds);
// @ts-expect-error subtracting seconds from meters
meters.subtract(seconds);
// @ts-expect-error a seconds scalar is not a meters scalar
const notMeters: UnitedScalar<'m'> = seconds;

// --- Scalar <-> ratio ------------------------------------------------------

expectType<UnitedRatio<'m', 's'>>()(meters.divideBy(seconds));
expectType<UnitedRatio<'m', 's'>>()(metersPerSecond);
expectType<UnitedRatio<'s', 'm'>>()(metersPerSecond.inverse());
expectType<UnitedScalar<'m'>>()(seconds.multiplyByRatio(metersPerSecond));
expectType<UnitedScalar<'s'>>()(meters.divideByRatio(metersPerSecond));
expectType<UnitedScalar<'m'>>()(metersPerSecond.multiply(seconds));

// @ts-expect-error ratio denominator is seconds, scalar is hours
metersPerSecond.multiply(hours);
// @ts-expect-error ratio denominator is seconds, scalar is meters
meters.multiplyByRatio(metersPerSecond);
// @ts-expect-error ratio numerator is feet, scalar is meters
meters.divideByRatio(feetPerSecond);

// --- Ratio arithmetic ------------------------------------------------------

expectType<UnitedRatio<'m', 's'>>()(metersPerSecond.add(ratio(1, 'm', 's')));
expectType<UnitedRatio<'m', 's'>>()(metersPerSecond.subtract(ratio(1, 'm', 's')));

// @ts-expect-error denominator mismatch (seconds vs hours)
metersPerSecond.add(metersPerHour);
// @ts-expect-error numerator mismatch (meters vs feet)
metersPerSecond.add(feetPerSecond);
// @ts-expect-error denominator mismatch (seconds vs hours)
metersPerSecond.subtract(metersPerHour);
// @ts-expect-error a meters-per-hour ratio is not a meters-per-second ratio
const notMetersPerSecond: UnitedRatio<'m', 's'> = metersPerHour;

// --- Conversions -----------------------------------------------------------

expectType<UnitConversion<'s', 'h'>>()(secondsToHours);
expectType<UnitConversion<'h', 's'>>()(secondsToHours.inverse());
expectType<UnitedScalar<'h'>>()(seconds.convert(secondsToHours));
expectType<UnitedRatio<'m', 'h'>>()(metersPerSecond.convertDenominator(secondsToHours));
expectType<UnitedRatio<'ft', 's'>>()(metersPerSecond.convertNumerator(converter('m', 'ft')));
expectType<UnitConversion<'seeds', 'plants'>>()(converter(1, 'seeds', 0.8, 'plants'));

// @ts-expect-error converter is from seconds, scalar is meters
meters.convert(secondsToHours);
// @ts-expect-error converter is from seconds, ratio numerator is meters
metersPerSecond.convertNumerator(secondsToHours);
// @ts-expect-error converter is from meters, ratio denominator is seconds
metersPerSecond.convertDenominator(converter('m', 'ft'));

// A cross-category auto conversion (distance -> time) is typed as an error, not a converter...
const metersToSeconds = converter('m', 's');
expectType<UnitTypeError<'Mismatched unit type for converter', 'mm' | 'cm' | 'm' | 'km' | 'in' | 'ft-us' | 'ft' | 'mi', 's'>>()(metersToSeconds);
// @ts-expect-error ...so it cannot be used to convert anything.
meters.convert(metersToSeconds);
