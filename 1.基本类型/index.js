// 布尔数值
var isDone = false;
// 数字
var num = 6;
//字符串
/* 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名 */
// let name: string = 'bob' //err
var userName = "bob";
var user = "Gene " + userName;
//数组
var list = [1, 2, 3]; //数组为纯数字数组，若出现其他类型则会 err
// or
var orList = [1, 2, 3]; //和上面的方法是类似的
/* 元组 */
/* 元组的意思就是数组内不必每个类型都要一样，可以自定义类型 */
var yuanList; //允许 字符串 数字类型，顺序置换则会 err
yuanList = ['hello', 10]; //ok
// yuanList = [10, 'hello'] //err
// console.log(yuanList[0].substr(1));  //ok 输出为 ello
// console.log(yuanList[1].substr(1));  //err
//枚举 enum
/* 默认情况下，从0开始为元素编号 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c); //输出为 1
/* 修改开始元素的编号 */
var NewColor;
(function (NewColor) {
    NewColor[NewColor["Red"] = 1] = "Red";
    NewColor[NewColor["Green"] = 2] = "Green";
    NewColor[NewColor["Blue"] = 3] = "Blue";
})(NewColor || (NewColor = {}));
var nc = NewColor.Green;
// console.log(nc); //输出为 2 ，因为你修改了开始元素的编号为1
/* 全部采用自手动赋值 */
var ZColor;
(function (ZColor) {
    ZColor[ZColor["Red"] = 1] = "Red";
    ZColor[ZColor["Green"] = 3] = "Green";
    ZColor[ZColor["Blue"] = 4] = "Blue";
})(ZColor || (ZColor = {}));
var zc = ZColor.Green;
// console.log(zc); //输出为 3 ，因为你自定义了元素的编号为3
/* 根据枚举的值拿到他的名字 */
var colorName = ZColor[4];
console.log(colorName);
