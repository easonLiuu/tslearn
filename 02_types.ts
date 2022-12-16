//用字面量声明类型后值不可修改
let aa: 10;
//报错
//aa = 20;

//用｜连接多个类型 联合类型
let bb: "male" | "female";
let cc: boolean| string;
// any类型 对该变量关闭类型检测 不建议使用any
// any类型可以赋值给任何变量 所以不建议
let dd: any;
// 如果不指定类型 会自动判断类型为any  let d;
dd = 10;
dd = 'hello';

//未知类型  类型安全的any
//不能将类型“unknown”直接分配给其他变量
let ee: unknown;
ee = 10;
ee = 'hello';

let ef: string;
//报错
//ef = ee
//解决方法
//1.必须先检测再赋值
if(typeof ee === 'string') {
    ef = ee
}
//2.或者使用类型断言 用来告诉解析器变量的实际类型
ef = ee as string
//3.或者
ef = <string>ee

//void表示函数没有返回值 void表示空（返回null,undefined都是空）
function fn(){
}

//never表示永远不会返回结果 比如下面 用的少
function fn2(): never{
    throw new Error('报错了')
}
