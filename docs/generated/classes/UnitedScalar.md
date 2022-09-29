[@skywardapps/ts-united-types](../README.md) / [Exports](../modules.md) / UnitedScalar

# Class: UnitedScalar<N\>

A `Unit`-ed scalar value is a simple number with a specific unit attached to it.

Examples: 5 meters or 2.2 seconds.

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |

## Table of contents

### Constructors

- [constructor](UnitedScalar.md#constructor)

### Properties

- [unit](UnitedScalar.md#unit)
- [value](UnitedScalar.md#value)

### Methods

- [add](UnitedScalar.md#add)
- [convert](UnitedScalar.md#convert)
- [divideBy](UnitedScalar.md#divideby)
- [divideByMeasurement](UnitedScalar.md#dividebymeasurement)
- [modify](UnitedScalar.md#modify)
- [multiply](UnitedScalar.md#multiply)
- [multiplyByMeasurement](UnitedScalar.md#multiplybymeasurement)
- [subtract](UnitedScalar.md#subtract)

## Constructors

### constructor

• **new UnitedScalar**<`N`\>(`v`, `u`)

The default constructor takes the value and the unit.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `u` | `N` |

#### Defined in

[types/UnitedScalar.ts:20](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L20)

## Properties

### unit

• `Readonly` **unit**: `N`

#### Defined in

[types/UnitedScalar.ts:14](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L14)

___

### value

• `Readonly` **value**: `number`

#### Defined in

[types/UnitedScalar.ts:15](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L15)

## Methods

### add

▸ **add**<`T`\>(`other`): [`UnitedScalar`](UnitedScalar.md)<`N`\>

Return a new scalar of the same unit with a value that is the sum of 
this and the parameter.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` extends `N` ? [`UnitedScalar`](UnitedScalar.md)<`T`\> : `Readonly`<{ `error`: ``"Unit mismatch"`` ; `typeExpected`: `N` ; `typeReceived`: `T` ; `value`: `number`  }\> |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`N`\>

#### Defined in

[types/UnitedScalar.ts:38](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L38)

___

### convert

▸ **convert**<`TN`, `TD`\>(`converter`): [`UnitedScalar`](UnitedScalar.md)<`TD`\>

Convert this scalar from one unit to another.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TN` | extends `string` |
| `TD` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `converter` | `TN` extends `N` ? [`UnitConversion`](UnitConversion.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Conversion unit mismatch"`` ; `typeExpected`: `N` ; `typeReceived`: `TN` ; `value`: `number`  }\> |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`TD`\>

#### Defined in

[types/UnitedScalar.ts:110](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L110)

___

### divideBy

▸ **divideBy**<`T`\>(`other`): [`UnitedRatio`](UnitedRatio.md)<`N`, `T`\>

Return a ratio that is this over the provided parameter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`UnitedScalar`](UnitedScalar.md)<`T`\> |

#### Returns

[`UnitedRatio`](UnitedRatio.md)<`N`, `T`\>

#### Defined in

[types/UnitedScalar.ts:55](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L55)

___

### divideByMeasurement

▸ **divideByMeasurement**<`TN`, `TD`\>(`other`): [`UnitedScalar`](UnitedScalar.md)<`TD`\>

Return a new measurement that is the result of this scalar divided by the
provided ratio's numerator multipled by the ratio's denominator. Essentially,
apply the inverse of the ratio.

The unit of the ratio's numerator should match this scalar's unit, and the 
resulting scalar's units will match the ratio's denominator.

For example "meters" divideByMeasurement  "meters" / "seconds" => "seconds"

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TN` | extends `string` |
| `TD` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `TN` extends `N` ? [`UnitedRatio`](UnitedRatio.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Unit mismatch"`` ; `typeExpected`: `N` ; `typeReceived`: `TN` ; `value`: `number`  }\> |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`TD`\>

#### Defined in

[types/UnitedScalar.ts:79](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L79)

___

### modify

▸ **modify**(`func`): [`UnitedScalar`](UnitedScalar.md)<`N`\>

Return a new scalar of the same unit with a modified value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`x`: `number`) => `number` |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`N`\>

#### Defined in

[types/UnitedScalar.ts:29](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L29)

___

### multiply

▸ **multiply**(`unitlessValue`): [`UnitedScalar`](UnitedScalar.md)<`N`\>

Return a new scalar of the same unit with a value that has been scaled
by the provided parameter;

#### Parameters

| Name | Type |
| :------ | :------ |
| `unitlessValue` | `number` |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`N`\>

#### Defined in

[types/UnitedScalar.ts:64](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L64)

___

### multiplyByMeasurement

▸ **multiplyByMeasurement**<`TN`, `TD`\>(`other`): [`UnitedScalar`](UnitedScalar.md)<`TN`\>

Return a new measurement that is the result of this scalar divided by the
provided ratio's denominator multipled by the ratio's numerator. Essentially,
apply the ratio.

The unit of the ratio's denominator should match this scalar's unit, and the 
resulting scalar's units will match the ratio's numerator.

For example "seconds" multiplyByMeasurement  "meters" / "seconds" => "meters"

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TN` | extends `string` |
| `TD` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `TD` extends `N` ? [`UnitedRatio`](UnitedRatio.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Unit mismatch"`` ; `typeExpected`: `N` ; `typeReceived`: `TD` ; `value`: `number`  }\> |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`TN`\>

#### Defined in

[types/UnitedScalar.ts:98](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L98)

___

### subtract

▸ **subtract**<`T`\>(`other`): [`UnitedScalar`](UnitedScalar.md)<`N`\>

Return a new scalar of the same unit with a value that is the parameter 
subtracted from this.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` extends `N` ? [`UnitedScalar`](UnitedScalar.md)<`T`\> : `Readonly`<{ `error`: ``"Unit mismatch"`` ; `typeExpected`: `N` ; `typeReceived`: `T` ; `value`: `number`  }\> |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`N`\>

#### Defined in

[types/UnitedScalar.ts:47](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitedScalar.ts#L47)
