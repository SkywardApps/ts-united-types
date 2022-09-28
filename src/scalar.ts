import { UnitedScalar } from './types/UnitedScalar';

export function scalar<N extends string>(v: number, u: N): UnitedScalar<N> 
{
	return new UnitedScalar<N>(v, u);
}
