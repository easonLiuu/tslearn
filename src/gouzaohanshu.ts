class Dog {
    name:string;
    age: number;
    //构造函数 对象创建时调用
    constructor(name: string, age: number) {
        //this为实例
        this.name = name;
        this.age = age;
        console.log(this)

    }
    bark(){
        //通过this表示当前调用方法的对象
        console.log(this)
    }
}

const dog = new Dog('毛毛', 18);
dog.bark()
console.log(dog)