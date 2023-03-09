//type alias
let sum: (x: number, y: number) => number
const res = sum(1, 2)
//类型别名
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const res2 = sum2(2, 4)
//联合类型
type StrOrNumber = string | number
let res3: StrOrNumber = '123'
res3 = 123
//字面量
const str2: 'name' = 'name'
const number: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'
//交叉类型
interface IName {
    name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }