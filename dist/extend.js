"use strict";
(function () {
    class Animal {
        //构造函数 对象创建时调用
        constructor(name, age) {
            //this为实例
            this.name = name;
            this.age = age;
        }
        bark() {
            //通过this表示当前调用方法的对象
            console.log('叫叫叫');
        }
    }
    //继承
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
        bark() {
            console.log('覆盖了方法');
        }
    }
    //继承
    class Cat extends Animal {
    }
    const dog = new Dog('毛毛', 18);
    const cat = new Cat('喵喵', 2);
    dog.bark();
    dog.run();
    console.log(dog);
    console.log(cat);
})();
