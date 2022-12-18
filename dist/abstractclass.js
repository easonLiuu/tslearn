"use strict";
(function () {
    //抽象类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('hello-hello');
        }
    }
    const dog = new Dog('毛毛');
    console.log(dog);
    dog.sayHello();
})();
