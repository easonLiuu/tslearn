(function(){
    //抽象类
    abstract class Animal{
        name: string;
        constructor(name: string){
            this.name = name
        }
        abstract sayHello():void;
    }
    
    class Dog extends Animal{
       
        sayHello() {
             console.log('hello-hello')         
        }
    }

    const dog = new Dog('毛毛');
    console.log(dog)
    dog.sayHello()


})()