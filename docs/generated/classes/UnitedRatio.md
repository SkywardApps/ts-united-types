[@skywardapps/ts-united-types](../README.md) / [Exports](../modules.md) / UnitedRatio

# Class: UnitedRatio<T, D\>

NOT FOR GENERAL USE -- use the `ratio` factory method, typically.
A `Unit`-ed ratio is a relationship between two differently-`unit`-ed scalar values.

Examples: 10 meters per second or 4 width : 3 height
This stores the source as the numerator and the dest as the denominator.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `D` | extends `string` |

## Hierarchy

- [`UnitConversion`](UnitConversion.md)<`T`, `D`\>

  ↳ **`UnitedRatio`**

## Table of contents

### Constructors

- [constructor](UnitedRatio.md#constructor)

### Properties

- [dest](UnitedRatio.md#dest)
- [source](UnitedRatio.md#source)

### Accessors

- [value](UnitedRatio.md#value)

### Methods

- [add](UnitedRatio.md#add)
- [convertDenominator](UnitedRatio.md#convertdenominator)
- [convertNumerator](UnitedRatio.md#convertnumerator)
- [inverse](UnitedRatio.md#inverse)
- [multiply](UnitedRatio.md#multiply)
- [subtract](UnitedRatio.md#subtract)
- [isConversion](UnitedRatio.md#isconversion)
- [isRatio](UnitedRatio.md#isratio)

## Constructors

### constructor

• **new UnitedRatio**<`T`, `D`\>(`source`, `dest`)

The default constructor takes the two unit-ed scalars and stores their relationship.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `D` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`UnitedScalar`](UnitedScalar.md)<`T`\> |
| `dest` | [`UnitedScalar`](UnitedScalar.md)<`D`\> |

#### Overrides

[UnitConversion](UnitConversion.md).[constructor](UnitConversion.md#constructor)

#### Defined in

[types/UnitedRatio.ts:36](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L36)

## Properties

### dest

• `Readonly` **dest**: [`UnitedScalar`](UnitedScalar.md)<`D`\>

#### Inherited from

[UnitConversion](UnitConversion.md).[dest](UnitConversion.md#dest)

#### Defined in

[types/UnitConversion.ts:24](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitConversion.ts#L24)

___

### source

• `Readonly` **source**: [`UnitedScalar`](UnitedScalar.md)<`T`\>

#### Inherited from

[UnitConversion](UnitConversion.md).[source](UnitConversion.md#source)

#### Defined in

[types/UnitConversion.ts:23](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitConversion.ts#L23)

## Accessors

### value

• `get` **value**(): `number`

Get the ratio as a single number.

#### Returns

`number`

#### Defined in

[types/UnitedRatio.ts:28](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L28)

## Methods

### add

▸ **add**<`TN`, `TD`\>(`other`): [`UnitedRatio`](UnitedRatio.md)<`T`, `D`\>

Add two ratios of identical units.

#### Type parameters

| Name |
| :------ |
| `TN` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `TN` extends `T` ? `TD` extends `D` ? [`UnitedRatio`](UnitedRatio.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Denominator mismatch"`` ; `typeExpected`: `TD` ; `typeReceived`: `D` ; `value`: `number`  }\> : `Readonly`<{ `error`: ``"Numerator mismatch"`` ; `typeExpected`: `TN` ; `typeReceived`: `T` ; `value`: `number`  }\> |

#### Returns

[`UnitedRatio`](UnitedRatio.md)<`T`, `D`\>

#### Defined in

[types/UnitedRatio.ts:78](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L78)

___

### convertDenominator

▸ **convertDenominator**<`TN`, `TD`\>(`converter`): [`UnitedRatio`](UnitedRatio.md)<`T`, `TD`\>

Convert the units of the denominator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TN` | extends `string` |
| `TD` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `converter` | `TN` extends `D` ? [`UnitConversion`](UnitConversion.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Conversion unit mismatch"`` ; `typeExpected`: `D` ; `typeReceived`: `TN` ; `value`: `number`  }\> |

#### Returns

[`UnitedRatio`](UnitedRatio.md)<`T`, `TD`\>

#### Defined in

[types/UnitedRatio.ts:65](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L65)

___

### convertNumerator

▸ **convertNumerator**<`TN`, `TD`\>(`converter`): [`UnitedRatio`](UnitedRatio.md)<`TD`, `D`\>

Convert the units of the numerator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TN` | extends `string` |
| `TD` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `converter` | `TN` extends `T` ? [`UnitConversion`](UnitConversion.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Conversion unit mismatch"`` ; `typeExpected`: `T` ; `typeReceived`: `TN` ; `value`: `number`  }\> |

#### Returns

[`UnitedRatio`](UnitedRatio.md)<`TD`, `D`\>

#### Defined in

[types/UnitedRatio.ts:52](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L52)

___

### inverse

▸ **inverse**(): [`UnitedRatio`](UnitedRatio.md)<`D`, `T`\>

Flip the numerator and denominator for the inverse relationship.

#### Returns

[`UnitedRatio`](UnitedRatio.md)<`D`, `T`\>

#### Overrides

[UnitConversion](UnitConversion.md).[inverse](UnitConversion.md#inverse)

#### Defined in

[types/UnitedRatio.ts:44](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L44)

___

### multiply

▸ **multiply**<`TD`\>(`other`): [`UnitedScalar`](UnitedScalar.md)<`T`\>

Multiply this ratio by a scalar.

The scalar's unit's must match the denominator of this ratio.
The resulting scalar's units will match the numerator of this ratio.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TD` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `TD` extends `D` ? [`UnitedScalar`](UnitedScalar.md)<`TD`\> : `Readonly`<{ `error`: ``"Denominator mismatch"`` ; `typeExpected`: `D` ; `typeReceived`: `TD` ; `value`: `number`  }\> |

#### Returns

[`UnitedScalar`](UnitedScalar.md)<`T`\>

#### Defined in

[types/UnitedRatio.ts:97](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L97)

___

### subtract

▸ **subtract**<`TN`, `TD`\>(`other`): [`UnitedRatio`](UnitedRatio.md)<`T`, `D`\>

Subtract the parameter ratio from this, requiring identical units.

#### Type parameters

| Name |
| :------ |
| `TN` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `TN` extends `T` ? `TD` extends `D` ? [`UnitedRatio`](UnitedRatio.md)<`TN`, `TD`\> : `Readonly`<{ `error`: ``"Denominator mismatch"`` ; `typeExpected`: `TD` ; `typeReceived`: `D` ; `value`: `number`  }\> : `Readonly`<{ `error`: ``"Numerator mismatch"`` ; `typeExpected`: `TN` ; `typeReceived`: `T` ; `value`: `number`  }\> |

#### Returns

[`UnitedRatio`](UnitedRatio.md)<`T`, `D`\>

#### Defined in

[types/UnitedRatio.ts:86](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L86)

___

### isConversion

▸ `Static` **isConversion**<`T`, `D`\>(`v`): v is UnitConversion<T, D\>

Runtime type guard to test if the parameter appears to be a unit conversion class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `D` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is UnitConversion<T, D\>

#### Inherited from

[UnitConversion](UnitConversion.md).[isConversion](UnitConversion.md#isconversion)

#### Defined in

[types/UnitConversion.ts:18](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitConversion.ts#L18)

___

### isRatio

▸ `Static` **isRatio**<`T`, `D`\>(`v`): v is UnitedRatio<T, D\>

A typeguard to ensire that the provider looks like a ratio class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `D` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is UnitedRatio<T, D\>

#### Defined in

[types/UnitedRatio.ts:20](https://github.com/SkywardApps/ts-united-types/blob/c4003f7/src/types/UnitedRatio.ts#L20)
