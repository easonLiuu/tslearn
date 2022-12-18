(function(){

    type myType = {
        name: string,
        age: number
    }

    //接口用来定义一个类应该包含哪些属性和方法 接口也可以当成类型声明去使用
    //但是接口可以重复声明 type不可以重复声明

    interface myInterface {
        name: string;
        age: number;

    }

    interface myInterface {
        gender: string;

    }

    const obj: myInterface = {
        name: 'lll',
        age: 111,
        gender: '男'
    }

    //接口限制类的结构 接口里不能有实际值 接口中所有的方法都是抽象方法
    //它定义了一个标准

    interface myInter{
        name: string;
        sayHello():void
    }
    
    class myClass implements myInter {

        name: string;
        constructor(name: string){
            this.name = name
        }
        sayHello(): void {           
            console.log('接口类')
        }
    }

    const myclass = new myClass('接口');
    console.log(myclass)


})()