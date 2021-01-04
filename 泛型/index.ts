//泛型
/* 泛型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持 */

/* 同时返回string，number类型，代码沉余 */
/* 只能返回string类型的数据 */
// function getData(value:string) :string{
//     return value
// }

// function getData2(value:number):number {
//     return value
// }

//使用any可以解决上面问题，但是放弃了类型检查
//传入什么，返回什么，比如：传入number类型就必须返回number类型
// function getData(value:any):any {
//     return value 
// }

// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
//T表示泛型，具体什么类型是调用这个方法的时候决定的
// function getData<T>(value:T):T {
//     return value
// }
// getData<number>(123)
// getData<string>(' ')

// 泛型类
// class MinClass{
//     list:number[]= []
//     add(num:number){
//         this.list.push(num)
//     }
//     min():number{
//         return Math.min(...this.list)
//     }
// }

// let m = new MinClass()
// m.add(2)
// m.add(3)
// m.add(1)
// console.log(m.min());

// 类的泛型
class MinClass<T>{
    list:T[]=[]
    add(value:T):void{
        this.list.push(value)
    }
    min():T{
        return this.list.sort()[0]
    }
}

var m1 = new MinClass<number>();
m1.add(1);
m1.add(3);
m1.add(0);
console.log(m1.min());

var m2 = new MinClass<string>();
//字母的阿斯克码进行对比
m2.add('a');
m2.add('c');
m2.add('b');
console.log(m2.min());