(function(){
    class Animal{
        name: string;
        constructor(name: string){
            this.name = name
        }
        sayHello(){
            console.log('hello')
        }
    }
    class Dog extends Animal{
        age: number;
        //super 当前类的父类
        constructor(name: string, age: number){
            super(name);
            this.age = age
        }
        sayHello() {
            super.sayHello()           
        }
    }

    const dog = new Dog('毛毛', 18);
    console.log(dog)
    dog.sayHello()


})()