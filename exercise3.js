const str = "Hello world";
let newString = str.split('');
let reverseArray = newString.reverse();
let joinArray = reverseArray.join('');
console.log(joinArray)

//2 вариант
//const str = "Hello world";
// let newString = '';
// for (let i = str.length - 1; i >= 0; i--) {
//      newString += str[i]
// };
// console.log(newString)
