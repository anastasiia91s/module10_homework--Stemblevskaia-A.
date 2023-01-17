const arr = ['1', '2', '2'];
let result = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] === typeof arr[i+1] && arr[i] === arr[i+1] ) {
            result = true
        }
    }
console.log(result)
