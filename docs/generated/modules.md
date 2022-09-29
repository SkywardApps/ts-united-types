[@skywardapps/ts-united-types](README.md) / Exports

# @skywardapps/ts-united-types

## Table of contents

### Classes

- [UnitConversion](classes/UnitConversion.md)
- [UnitedRatio](classes/UnitedRatio.md)
- [UnitedScalar](classes/UnitedScalar.md)

### Functions

- [converter](modules.md#converter)
- [ratio](modules.md#ratio)
- [scalar](modules.md#scalar)

## Functions

### converter

▸ **converter**<`InT`, `OutT`\>(`inV`, `inT`, `outV`, `outT`): [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `string` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inV` | `number` |
| `inT` | `InT` |
| `outV` | `number` |
| `outT` | `OutT` |

#### Returns

[`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\>

#### Defined in

[converter.ts:7](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L7)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Area` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Area`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Area` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Area` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Area`, `OutT`\>

#### Defined in

[converter.ts:8](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L8)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Distance` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Distance`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Distance` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Distance` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Distance`, `OutT`\>

#### Defined in

[converter.ts:9](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L9)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Angle` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Angle`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Angle` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Angle` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Angle`, `OutT`\>

#### Defined in

[converter.ts:10](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L10)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.ApparentPower` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.ApparentPower`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `ApparentPower` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.ApparentPower` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.ApparentPower`, `OutT`\>

#### Defined in

[converter.ts:11](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L11)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Current` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Current`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Current` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Current` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Current`, `OutT`\>

#### Defined in

[converter.ts:12](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L12)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Ditgital` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Ditgital`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Ditgital` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Ditgital` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Ditgital`, `OutT`\>

#### Defined in

[converter.ts:13](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L13)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Energy` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Energy`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Energy` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Energy` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Energy`, `OutT`\>

#### Defined in

[converter.ts:14](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L14)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Frequency` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Frequency`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Frequency` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Frequency` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Frequency`, `OutT`\>

#### Defined in

[converter.ts:15](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L15)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Illuminance` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Illuminance`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Illuminance` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Illuminance` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Illuminance`, `OutT`\>

#### Defined in

[converter.ts:16](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L16)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Mass` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Mass`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Mass` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Mass` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Mass`, `OutT`\>

#### Defined in

[converter.ts:17](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L17)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Pace` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Pace`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Pace` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Pace` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Pace`, `OutT`\>

#### Defined in

[converter.ts:18](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L18)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.PartsPer` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.PartsPer`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `PartsPer` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.PartsPer` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.PartsPer`, `OutT`\>

#### Defined in

[converter.ts:19](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L19)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Power` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Power`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Power` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Power` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Power`, `OutT`\>

#### Defined in

[converter.ts:20](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L20)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Pressure` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Pressure`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Pressure` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Pressure` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Pressure`, `OutT`\>

#### Defined in

[converter.ts:21](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L21)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.ReactiveEnergy` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.ReactiveEnergy`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `ReactiveEnergy` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.ReactiveEnergy` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.ReactiveEnergy`, `OutT`\>

#### Defined in

[converter.ts:22](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L22)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.ReactivePower` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.ReactivePower`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `ReactivePower` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.ReactivePower` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.ReactivePower`, `OutT`\>

#### Defined in

[converter.ts:23](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L23)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Speed` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Speed`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Speed` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Speed` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Speed`, `OutT`\>

#### Defined in

[converter.ts:24](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L24)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Temperature` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Temperature`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Temperature` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Temperature` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Temperature`, `OutT`\>

#### Defined in

[converter.ts:25](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L25)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Time` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Time`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Time` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Time` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Time`, `OutT`\>

#### Defined in

[converter.ts:26](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L26)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Voltage` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Voltage`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Voltage` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Voltage` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Voltage`, `OutT`\>

#### Defined in

[converter.ts:27](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L27)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.Volume` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Volume`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `Volume` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.Volume` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.Volume`, `OutT`\>

#### Defined in

[converter.ts:28](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L28)

▸ **converter**<`InT`, `OutT`\>(`inT`, `outT`): `OutT` extends `autoConverter.VolumeFlowRate` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.VolumeFlowRate`, `OutT`\>

Create a converter between one unit and another.

There are two ways to use this via overloads:
	1. Any arbitrary units: provide the values and unit types. `converter(1, 'meter', 100, 'centimeters')`
 2. Use `convert-units` to automatically generate the conversion. `converter('m','cm')`;  This will
only work for known units (see [`convert-units`](https://github.com/convert-units/convert-units) for a list).  
It will enforce that both units are of the same category -- eg both are AREA or both are DISTANCE, etc.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `VolumeFlowRate` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

`OutT` extends `autoConverter.VolumeFlowRate` ? [`UnitConversion`](classes/UnitConversion.md)<`InT`, `OutT`\> : `UnitTypeError`<``"Mismatched unit type for converter"``, `autoConverter.VolumeFlowRate`, `OutT`\>

#### Defined in

[converter.ts:29](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/converter.ts#L29)

___

### ratio

▸ **ratio**<`InT`, `OutT`\>(`inV`, `inT`, `outT`): [`UnitedRatio`](classes/UnitedRatio.md)<`InT`, `OutT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `string` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inV` | `number` |
| `inT` | `InT` |
| `outT` | `OutT` |

#### Returns

[`UnitedRatio`](classes/UnitedRatio.md)<`InT`, `OutT`\>

#### Defined in

[ratio.ts:6](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/ratio.ts#L6)

▸ **ratio**<`InT`, `OutT`\>(`inV`, `inT`, `outV`, `outT`): [`UnitedRatio`](classes/UnitedRatio.md)<`InT`, `OutT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InT` | extends `string` |
| `OutT` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `inV` | `number` |
| `inT` | `InT` |
| `outV` | `number` |
| `outT` | `OutT` |

#### Returns

[`UnitedRatio`](classes/UnitedRatio.md)<`InT`, `OutT`\>

#### Defined in

[ratio.ts:7](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/ratio.ts#L7)

___

### scalar

▸ **scalar**<`N`\>(`v`, `u`): [`UnitedScalar`](classes/UnitedScalar.md)<`N`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `u` | `N` |

#### Returns

[`UnitedScalar`](classes/UnitedScalar.md)<`N`\>

#### Defined in

[scalar.ts:3](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/scalar.ts#L3)
