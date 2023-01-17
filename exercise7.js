const arr = ['1', '2', 2 , 3, 4, null, null, true, NaN];

let result = arr.filter(function(elem) {
    return elem % 2 == 0 && typeof elem == 'number';
});
console.log('В массиве ',result.length,' четных элемента');

let result2 = arr.filter(function(elem) {
    return elem % 2 == 1 && typeof elem == 'number';
});
console.log('В массиве ',result2.length,' нечетных элемента');


let result3 = arr.filter(function(elem) {
    return elem === null;
});
console.log('В массиве ',result3.length,' null');