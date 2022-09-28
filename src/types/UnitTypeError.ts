export type UnitTypeError<Err extends string, TypeExpected, TypeReceived> = Readonly<{
	error: Err;
	typeExpected: TypeExpected;
	typeReceived: TypeReceived;
	value: number;
}>;
