import { hi } from './hello'

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(123,456))
console.log(hi)

const obj = {name: "ljr", age: 33}
console.log(obj.age)
obj.age = 18;
console.log(obj.age)