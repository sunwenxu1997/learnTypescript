// 布尔数值
let isDone: boolean = false

// 数字
let num: number = 6

//字符串
/* 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名 */
// let name: string = 'bob' //err
let userName: string = "bob"
let user: string = `Gene ${userName}`

//数组
let list: number[] = [1, 2, 3] //数组为纯数字数组，若出现其他类型则会 err
// or
let orList: Array<number> = [1, 2, 3] //和上面的方法是类似的
/* 元组 */
/* 元组的意思就是数组内不必每个类型都要一样，可以自定义类型 */
let yuanList: [string, number] //允许 字符串 数字类型，顺序置换则会 err
yuanList = ['hello', 10] //ok
// yuanList = [10, 'hello'] //err
// console.log(yuanList[0].substr(1));  //ok 输出为 ello
// console.log(yuanList[1].substr(1));  //err


//枚举 enum
/* 默认情况下，从0开始为元素编号 */
enum Color { Red, Green, Blue }
let c: Color = Color.Green
// console.log(c); //输出为 1
/* 修改开始元素的编号 */
enum NewColor { Red = 1, Green, Blue }
let nc: NewColor = NewColor.Green
// console.log(nc); //输出为 2 ，因为你修改了开始元素的编号为1
/* 全部采用自手动赋值 */
enum ZColor { Red = 1, Green = 3, Blue = 4 }
let zc: ZColor = ZColor.Green
// console.log(zc); //输出为 3 ，因为你自定义了元素的编号为3
/* 根据枚举的值拿到他的名字 */
let colorName: string = ZColor[4]
// console.log(colorName); //输出为 Blue

//Any
let notSure: any = 4
notSure = 'may'
notSure = false  //定义any后变量可以赋值为任何数据类型

//void
// 某种程度上来说，void类型像是与any类型相反，他表示没有任何类型。
function warnUser(): void {
    console.log("this is my waring message");
}
/* 声明一个void类型的变量没有什么大勇，因为你只能为它赋予undefind和null */
let unusable: void = undefined

//Null和Undefind
// undefined 和 null 两者各自有自己的类型分别叫做undefind 和 null
let u: undefined = undefined
let n: null = null


//Never
/* never 类型表示的是那些永不存在的值的类型。例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或者尖头函数表达式的返回值类型 */
/* 返回never的函数必须存在无法到达的终点 */
function error(message: string): never {
    throw new Error(message)
}
/* 推断的返回值类型为never */
function fail() {
    return error('something failed')
}

//类型断言
/*  */
// let someValue:any = "this is a string"
// let strLength:number = (<string>someValue).length
/* or */
let someValue:any = "this is a string"
let strLength:number = (someValue as string).length
