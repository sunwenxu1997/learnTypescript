// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
// 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
// 接口初探
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

//可选属性
/* interface 接口 */
interface SquareConfig {
    color?: string,
    width?: number
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color:"black"})
/* colour 属性不存在 */
/* 通过类型断言 绕开错误检查  */
let otherSquare = createSquare({colour:"black",width:200} as SquareConfig)
console.log(otherSquare);

// 只读属性
interface Point{
    /* readonly 只读的 */
    readonly x:number;
    readonly y:number;
}
let p1:Point = {x:10,y:20};
// p1.x = 5; //error 因为 readonly 内的x为只读的属性

/* ReadonlyArray<T>类型 确保数组创建后再也不能被修改 */
let arr:number[] = [1,2,3,4]
let ro:ReadonlyArray<number>=arr
// ro[0]=12; //error
// ro.push(5); //error
// arr = ro; //error
/* 可以用类型断言重写，实现类型转换，绕开类型检查 */
arr = ro as number[]

/* 当作为变量使用时尽量用const,作为属性使用的时候用 readonly */

//函数类型
interface SearchFunc{
    (source:string,subString:string):boolean
}
let mySearch:SearchFunc;
/* 对于函数类型的检查来说，函数的参数名不需要与接口里定义的名字相匹配。 */
mySearch = function (src:string,sub:string):boolean {
    let result = src.search(sub)
    return result > -1
}

//可索引的类型
interface StringArray{
    [index:number]:string
}
let myArray:StringArray;
myArray = ['Bob',"Fred"];
let myStr:string = myArray[0]
console.log(myStr);

//继承接口
interface Shape{
    color:string
}
interface Suqare extends Shape{
    sideLength:number
}
let square = <Suqare>{}
console.log(square);

square.color = 'blue'
square.sideLength = 10
console.log(square);

//接口继承类
class Control {
    private state:any
}
interface SelectableControl extends Control{
    select():void
}
