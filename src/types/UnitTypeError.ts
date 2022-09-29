/**
 * Represent a compile-type type error.
 * 
 * This error is used to enforce unit-matching between unit-ed types.
 */
export type UnitTypeError<Err extends string, TypeExpected, TypeReceived> = Readonly<{
	/**
	 * The textual description of the error.
	 */
	error: Err;
	/**
	 * The type we expected.
	 */
	typeExpected: TypeExpected;
	/**
	 * The non-matching type we actually got.
	 */
	typeReceived: TypeReceived;
	/**
	 * A fake value to make usage easier.
	 */
	value: number;
}>;
