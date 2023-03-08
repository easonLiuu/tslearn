let str = 'str'

//union types
let numberOrString: number | string
numberOrString = '123'
numberOrString = 123
//访问公共属性
numberOrString.toString()
//报错 number没有length属性 numberOrString.length
//那如果我就想访问length属性呢 
//方法一使用类型断言
function getLength(input: string | number): number {
    //类型断言
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}

//方法二
//type guard 在不同条件中智能缩小范围
function getLength2(input: string | number): number {
    if (typeof input === 'string') {
        return input.length
    } else {
        return input.toString().length
    }
}




