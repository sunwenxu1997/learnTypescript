var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 解构赋值
/* 数组解构 */
// 在数组里面使用 ... 语法创建剩余变量
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
// console.log(first); // 1
// console.log(rest); //[2,3,4]
var _b = [1, 2, 3, 4], second = _b[1], fourth = _b[3];
// console.log(second, fourth); // 2,4
/* 对象解构 */
var o = {
    a: 'foo',
    b: '12',
    c: 'bar'
};
var a = o.a, b = o.b;
/* 属性重命名 */
var newName1 = o.a, newName2 = o.b;
// const 声明
/* 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。 */
var numLivesForCat = 9;
var kitty = {
    name: 'Aurrpra',
    numLives: numLivesForCat
};
// kitty = {
//     name:"danielle",
//     numLives:numLivesForCat
// }
// all "okay" 使用的特殊的方法去避免报错
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
// console.log(kitty);
//展开
var firstArr = [1, 2];
var secondArr = [3, 4];
var bothPlus = __spreadArrays([0], firstArr, secondArr, [5]);
console.log(bothPlus);
var defaults = {
    food: 'spicy',
    price: '$$'
};
var search = __assign({ food: 'rich' }, defaults);
console.log(search);
