//add是函数类型

const add = (x: number, y: number, z?: number): number => {
    if( typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

interface ISum {
    //返回number 注意不用=》 interface里用冒号返回
    (x: number, y: number, z?: number): number

}
//冒号后面都在声明类型
let add2: (x: number, y: number, z?: number) => number = add
let add3: ISum = add

