[@skywardapps/ts-united-types](../README.md) / [Exports](../modules.md) / UnitConversion

# Class: UnitConversion<T, D\>

This represents a conversion from one unit to another of the same category.

It has a source unit and a destination unit, along with a ratio.  For precision
reasons, this is actually stored as a fraction -- so you can store 1 / 3 rather 
than 0.333333.

Logic for applying the conversion is contained in the value class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `D` | extends `string` |

## Hierarchy

- **`UnitConversion`**

  ↳ [`UnitedRatio`](UnitedRatio.md)

## Table of contents

### Constructors

- [constructor](UnitConversion.md#constructor)

### Properties

- [dest](UnitConversion.md#dest)
- [source](UnitConversion.md#source)

### Methods

- [inverse](UnitConversion.md#inverse)
- [isConversion](UnitConversion.md#isconversion)

## Constructors

### constructor

• **new UnitConversion**<`T`, `D`\>(`source`, `dest`)

Default constructor requires the source unit to convert _from_ and the source unit to convert _to_.

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

#### Defined in

[types/UnitConversion.ts:28](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitConversion.ts#L28)

## Properties

### dest

• `Readonly` **dest**: [`UnitedScalar`](UnitedScalar.md)<`D`\>

#### Defined in

[types/UnitConversion.ts:23](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitConversion.ts#L23)

___

### source

• `Readonly` **source**: [`UnitedScalar`](UnitedScalar.md)<`T`\>

#### Defined in

[types/UnitConversion.ts:22](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitConversion.ts#L22)

## Methods

### inverse

▸ **inverse**(): [`UnitConversion`](UnitConversion.md)<`D`, `T`\>

Invert the conversion from source -> destination to destination -> source.

#### Returns

[`UnitConversion`](UnitConversion.md)<`D`, `T`\>

#### Defined in

[types/UnitConversion.ts:37](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitConversion.ts#L37)

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

#### Defined in

[types/UnitConversion.ts:17](https://github.com/SkywardApps/ts-united-types/blob/293426c/src/types/UnitConversion.ts#L17)
