

// 解构赋值
/* 数组解构 */
// 在数组里面使用 ... 语法创建剩余变量
let [first, ...rest] = [1, 2, 3, 4]
// console.log(first); // 1
// console.log(rest); //[2,3,4]

let [, second, , fourth] = [1, 2, 3, 4]
// console.log(second, fourth); // 2,4
/* 对象解构 */
let o = {
    a: 'foo',
    b: '12',
    c: 'bar'
}
let { a, b } = o

/* 属性重命名 */
let { a: newName1, b: newName2 } = o

// const 声明
/* 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。 */
const numLivesForCat = 9
const kitty = {
    name: 'Aurrpra',
    numLives: numLivesForCat
}
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
let firstArr = [1, 2]
let secondArr = [3, 4]
let bothPlus = [0, ...firstArr, ...secondArr, 5]
console.log(bothPlus);
let defaults = {
    food: 'spicy',
    price: '$$'
}
let search = {
    food: 'rich',
    ...defaults,
}
console.log(search);
