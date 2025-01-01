console.log(typeof null);





const obj = { name: 'Diya' };
obj.age = 20;
console.log(obj, obj.age);
// obj = { newProp: 'newValue' }; // error
// console.log(obj);





console.log(null == undefined);
console.log(null === undefined);

// old JS syntax, before ES6
function Person() {
    this.name = 'Alice';
}

Person.prototype.greet = function () {
    return `Hello ${this.name}`;
}

const p = new Person();
console.log(p.greet());



const nums = [1, 2, 3];
nums.map((num) => {
    num * 2;
});
// console.log(num1);

console.log({} + []);