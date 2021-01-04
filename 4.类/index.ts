//类
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter);

//继承
/* extends */
class Animal {
    dogs: string;
    constructor(message: string) {
        this.dogs = message;
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
/* 在这里，Dog继承了Animal的属性和方法 */
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog('一条狗');
console.log(dog);
dog.bark();
dog.move(10);

/* super */
/* 派生类包含了一个构造函数，它必须调用 super()，它会执行基类的构造函数 */
class Animals {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animals {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python')
sam.move() 
/* private */
/* 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员，
 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 */
 /* protected */
 /* protected 修饰符与 private 修饰符的行为很相似，但是有一点不同，protected成员在派生类中仍然可以访问 */