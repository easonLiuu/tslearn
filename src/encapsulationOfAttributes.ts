(function(){
    class Person {
        //添加属性修饰符
        //public: 默认 任意修改 子类中也可以访问
        //private 私有属性  只能类内部修改 在类中添加方法使得私有属性被外部访问
        //protected 受保护的属性 只可以在当前类和子类中访问
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age
        }

        // getName() {
        //     return this.name
        // }

        // setName(value: string) {
        //     this.name = value
        // }

        // getAge() {
        //     return this.age
        // }

        // setAge(value: number) {
        //     if(value > 0) {
        //         this.age = value
        //     }           
        // }  
        get name(){
            console.log('get执行了')
            return this._name
        }
        
        set name(value: string) {
            this._name = value
        }

        get age(){
            console.log('get执行了')
            return this._age
        }
        
        set age(value: number) {
            if(value > 0) {
                this._age = value
            }           
        }
    }
    const per = new Person('毛毛', 18)
    console.log(per.name)
    // console.log(per.getName())
    // per.setName('金毛')
    // console.log(per.getName())

    class A{
        protected num: number;
        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A {
        test(){
            console.log(this.num)
        }
    }

    class C{
        //直接将属性定义在构造函数中
        constructor(public name: number) {
            this.name = name;
        }
    }

})();