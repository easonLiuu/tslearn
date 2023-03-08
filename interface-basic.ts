interface Person {
    readonly id: number;
    name: string;
    age: number;
}
//多一个或者少一个变量都不可以 如果用age?: number 可以不写
//readonly用在属性上 const用在变量上
let person: Person = {
    id: 1,
    name: 'eason',
    age: 12
}


