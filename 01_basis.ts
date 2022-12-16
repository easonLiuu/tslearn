// 指定类型
let a: number;
a = 10;
//报错
//a = 'hello';

let b: string;
b = 'hello';
//b = 10

let c: boolean = true;

//自动进行类型检测
let d = false;

function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(123, 456)
