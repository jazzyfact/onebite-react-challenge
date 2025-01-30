//1번

let num = 100;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}

//2번
function isPrimeNumber(num) {
    if (num === 1) return true;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

//3번
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculate(num1, num2, operation) {
    console.log(operation(num1, num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);
