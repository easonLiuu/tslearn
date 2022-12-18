"use strict";
class Person {
    constructor() {
        //实例属性
        this.name = 'LJR';
    }
    //方法
    sayHi() {
        console.log('hello');
    }
}
//类属性 静态属性
Person.age = 18;
const per = new Person();
per.sayHi();
per.name = 'tom';
console.log(per);
console.log(Person.age);
