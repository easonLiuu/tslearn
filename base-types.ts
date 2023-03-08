let isDone: boolean = false

let age: number = 10

let firstName: string = 'eason'
let message: string = `Hello, ${firstName}`

let u: undefined = undefined
let n: null = null

// undefined和null是所有类型的子类型。也就是说undefined类型的变量,可以赋值给number类型的变量
// 但是在严格模式下会报错
let num: number = undefined

let notSure: any = 4
notSure = 'this is a string'
notSure = true

notSure.myName
notSure.getName()