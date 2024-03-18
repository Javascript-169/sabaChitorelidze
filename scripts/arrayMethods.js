const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

// console.log(size);

// console.log(fruits[size - 1]);

// console.log(fruits.at(-2));

// console.log(fruits.toString());

// console.log(fruits.join('-'));

fruits.pop()
// console.log(fruits);

fruits.push("Grape");
// console.log(fruits);

fruits.shift();
fruits.shift();
// console.log(fruits);

fruits.unshift("Peach");
console.log(fruits);

fruits[1] = "Pinapple";
// console.log(fruits);

// delete fruits[1];
// console.log(fruits)
// fruits[1] = undefined;
// console.log(fruits);
let drinks = ['coca cola', 'pepsi', 'coca cola zero', 'fanta tropic'];
let mergedArrays = fruits.concat(drinks);
// console.log(mergedArrays);

const myArr = [[1,2],[3,4],[5,6, [7,8, [9, 10]]]];
// console.log(myArr[2][2][2][0]);
const newArr = myArr.flat(3);

// console.log(newArr)
console.log(mergedArrays);
let slicedArray = mergedArrays.slice(3, 5);

// console.log(slicedArray);

// mergedArrays.splice(1, 3);

let indexOfGrape = mergedArrays.indexOf("Grape");
mergedArrays.splice(indexOfGrape, 1);

console.log(mergedArrays.includes("pepsi"));
