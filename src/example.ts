import { BaseObject } from "./BaseObject";
import { PartialOfProperties } from "./utils/PartialOfProperties";

class O extends BaseObject{
  a: string
  b: number

  constructor(props: PartialOfProperties<O> = null){
    super()
    this.setProps<O>(props)
  }
}

let o = new O({a:'john',b:4})

o.setProps<O>({a: 'jack'})

console.log(o)
