let arrOfNumbers: number[] = [1,2,3]
//let arrOfNumbers: number[] = [1,2,3,'123'] 报错
arrOfNumbers.push(3)

function test() {
    console.log(arguments)
}

//元组 限制数据类型
let user: [string, number] = ['eason', 1]
user.push('123')
user.push(123)
//user.push(true) 报错


