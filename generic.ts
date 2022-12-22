function fn(a: any): any{
    return a
}
//类型不明确时，使用泛型
//T是什么类型 不知带
function fn1<T>(a: T): T{
    return a 
}

//可以直接调用具有泛型的函数
let result = fn1(10)
let result1 = fn1<string>('hello')

function fn2<T, K>(a: T, b: K): T{
    console.log(b)
    return a
}

fn2(123,'hello')


//用接口做限制
interface Inter{
    length: number;
}
//T必须是Inter的实现类
function fn3<T extends Inter>(a: T): number {
    return a.length
}

fn3('hello')