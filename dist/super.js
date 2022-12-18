"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
    class Dog extends Animal {
        //super 当前类的父类
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            super.sayHello();
        }
    }
    const dog = new Dog('毛毛', 18);
    console.log(dog);
    dog.sayHello();
})();
