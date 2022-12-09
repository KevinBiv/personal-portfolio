let numbers = [2, 4, 6, 2, 6, 8, 9];
let sum = 0;
let count = 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        sum += numbers[i];
        count++;
    }
}

let average = sum / count;

console.log(average);