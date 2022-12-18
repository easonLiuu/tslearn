"use strict";
(function () {
    const obj = {
        name: 'lll',
        age: 111,
        gender: '男'
    };
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('接口类');
        }
    }
    const myclass = new myClass('接口');
    console.log(myclass);
})();
