function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    x = Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt (0, 100)
console.log(x)