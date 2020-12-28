// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 
// 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
// 接口初探
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
/* colour 属性不存在 */
/* 通过类型断言 绕开错误检查  */
var otherSquare = createSquare({ colour: "black", width: 200 });
console.log(otherSquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5; //error 因为 readonly 内的x为只读的属性
/* ReadonlyArray<T>类型 确保数组创建后再也不能被修改 */
var arr = [1, 2, 3, 4];
var ro = arr;
// ro[0]=12; //error
// ro.push(5); //error
// arr = ro; //error
/* 可以用类型断言重写，实现类型转换，绕开类型检查 */
arr = ro;
var mySearch;
/* 对于函数类型的检查来说，函数的参数名不需要与接口里定义的名字相匹配。 */
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['Bob', "Fred"];
var myStr = myArray[0];
console.log(myStr);
var square = {};
console.log(square);
square.color = 'blue';
square.sideLength = 10;
console.log(square);
