// // const hello: string = 'hello TypeScript';
// // console.log(hello);

// // /* 定义了一个类 Site，该类有一个方法 name() */
// // /* 	void 用于标识方法返回值的类型，表示该方法没有返回值。 */
// // class Site {
// //     name(): void {
// //         console.log('Runoob');
// //     }
// // }
// // /* new 关键字创建类的对象，该对象调用方法 name() */
// // var obj = new Site()
// // obj.name()

// // // 在元素类型后面加上[]
// // let arr: number[] = [1, 2];
// // // 或者使用数组泛型
// // let arr: Array<number> = [1, 2];

// /* 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。 */
// // let x: [string, number];
// // x = ['Runoob', 1];    // 运行正常
// // console.log(x[0]);    // 输出 Runoob

// // /* 	枚举类型用于定义数值集合 */
// enum Color { Red, Green, Blue };
// let color: Color = Color.Blue;
// // console.log(color);    // 输出 2

// /* Any 类型
// // 任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况。 */
// let x: any = 1;    // 数字类型
// x = 'I am who I am';    // 字符串类型
// x = false;    // 布尔类型
// let arrayList: any[] = [1, false, 'fine'];
// arrayList[1] = 100;

// // // 启用 
// // let x: number | null | undefined;
// // x = 1; // 运行正确
// // x = undefined;    // 运行正确
// // x = null;    // 运行正确

// // 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
// var uname: string = "Runoob";

// // 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
// var str: string = 'string'
// var str2: Boolean = <Boolean><any>str   //str、str2 是 string 类型
// // console.log(str2)

// // // ts中定义函数的方法
// // // 函数声明方法
// function run(): string {
//     return 'text'
// }
// // console.log(run());
// // //ts定义方法参入参数
// // function getInfo(name:string,age:number):string {
// //     return `${name} --- ${age}`
// // }
// // console.log(getInfo('小明',12));
// // //匿名函数方法
// // var getInfo = function (name:string,age:number):string {
// //     return `${name} --- ${age}`
// // }
// // console.log(getInfo('小明',12));

// // //没有返回值的方法
// // function run():void {
// //     console.log('run');
// // }

// // // 方法的可选参数,若不传age时，可以在age后面加上 ? 号
// // /* 注意，可选参数必须统一放到后面，若给name? 则会报错 */
// // function getInfo(name:string,age?:number):string {
// //     if (age) {
// //         return `${name} --- ${age}`
// //     }else{
// //         return `${name} --- 保密`
// //     }

// // }
// // console.log(getInfo('小明'));

// // //默认参数
// // function getInfo(name:string,age:number = 20):string {
// //     if (age) {
// //         return `${name} --- ${age}`
// //     }else{
// //         return `${name} --- 保密`
// //     }

// // }
// // console.log(getInfo('小明',30));

// // 剩余参数
// // function sum(a: number, b: number, c: number, d: number) {
// //     return a + b + c + d
// // }
// // console.log(sum(1, 2, 3, 4));
// // 三点运算符
// function sum(...result: number[]) {
//     var sum = 0
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i]
//     }
//     return sum
// }
// // console.log(sum(1, 2, 3, 4, 5, 6));

// // function sum(a: number, b: number, ...result: number[]) {
// //     var sum = a + b
// //     for (let i = 0; i < result.length; i++) {
// //         sum += result[i]
// //     } 
// //     return sum
// // }
// // console.log(sum(1, 2, 3, 4, 5, 6));

// // ts 方法的重载
// // function getInfo(name:string):string;
// // function getInfo(age:number):number;
// // function getInfo(str:any):any {
// //     if (typeof str === 'string') {
// //         return '我叫' + str
// //     }else{
// //         return '我的年龄'+str
// //     }
// // }
// // console.log(getInfo(12));

// // //es5构造函数
// // function Person() {
// //     this.name = '张三'
// //     this.age = 12
// //     this.run = () => { /* 实例方法 */
// //         alert(this.name + '运动')
// //     }
// // }
// // // /* 静态方法 */
// // // Person.work = () => {
// // //     alert('haha')
// // // }
// // Person.prototype.work = () => {
// //     alert('haha')
// // }
// // Person.prototype.sex = '男'
// // let p = new Person()
// // // p.run()
// // // Person.work()

// // // Web类 继承Person类 原型链+对象冒充的组合继承模式
// // function Web() {
// //     // Person.call(this)
// // }
// // Web.prototype = new Person() //原型链实现继承
// // var w = new Web()
// // // w.run()  // 对象冒充可以继承构造函数里面的属性和方法
// // w.work() //运行出错 对象冒充可以继承构造函数里面的属性和方法，但是没法继承原型链上的属性

// // ts中类的定义
// /* es5 */
// // function Person(name) {
// //     this.name = name
// //     this.run = function () {
// //         console.log(this.name);
// //     }
// // }
// // var p = new Person('张三');
// // p.run()

// /* ts */
// class Person {
//     name: string; //属性 前面省略了 public关键词语
//     constructor(n: string) {
//         this.name = n
//     }
//     run(): void {
//         alert(this.name)
//     }
// }
// // var p = new Person('张三');
// // p.run()
// // 继承 extends,super
// class Web extends Person {
//     constructor(n: string) {
//         super(n); /* 初始化父类的构造函数 */
//     }
//     work(): void {
//         alert(this.name + '在运动')
//     }
// }
// var w = new Web('李四')
// w.work()