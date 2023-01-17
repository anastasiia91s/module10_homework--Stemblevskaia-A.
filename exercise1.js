a = prompt('Введите число')
console.log(a)
b = +a
if ( a === 'NaN') {
    console.log("Упс, кажется, вы ошиблись")
} else if (typeof b === 'number' && b % 2 == 1) {
    console.log("Это число нечетное")
} else if (typeof b === 'number' && b % 2 == 0) {
    console.log("Это число четное")
} else {
    console.log("Упс, кажется, вы ошиблись")
}
