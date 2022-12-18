class Person {
    //实例属性
    name: string = 'LJR';

    //类属性 静态属性
    static age: number = 18;

    //方法
    sayHi() {
        console.log('hello')
    }

}

const per = new Person()
per.sayHi()
per.name = 'tom'
console.log(per)
console.log(Person.age)
