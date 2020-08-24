
import { NonFunctionKeys } from "utility-types"


export type PartialOfProperties<T extends object> = Partial<{ [P in NonFunctionKeys<T>]: T[P] }>