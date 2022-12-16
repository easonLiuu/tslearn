//js对象
let m: object;
m = {};
m = function(){};

//指定对象中可以包含哪些属性 age有也行没有也行 表示属性可选
let n: {name: string, age?: number};

n = {name: ''};
//直接n={}会报错

//[propName: string]: any任意类型的属性
let nn: {name: string, [propName: string]: any}
nn = {name: 'ljr', age: 18, gender: '男'}


//设置函数结构的类型声明 不符合这个结构的报错
let nnn: (a: number, b: number) => number;
nnn = function(n1: number, n2: number) {
    return n1 + n2;
}

//数组声明两种方式
//表示字符串数组
let a1: string[];

a1 = ['1', '2'];

let a2: number[];

//和a2是一个道理
let a3: Array<number>;

//元组就是固定长度的数组
let h: [string, string];
//h = ['1', '2', '3']


//enum枚举

enum Gender{
    Male = 0,
    Female = 1
}
let i: {name: string, gender: Gender};
i = {
    name: 'ljr',
    gender: Gender.Female //代表男的
}

//这么写没意义
let j: string & number;

let jj: { name: string } & { age: number };

//类型别名
//这么写麻烦
let k: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;

type myType = 1 | 2 | 3 | 4 | 5;
let kk: myType;
let ll: myType;