const prompt = require('prompt-sync')();
let number = parseInt(prompt('Please enter the starting range number: '));
factorial = 1;
let primeNumber=[];

for (j = 2; j <= number/2; j++) {
    if (number % j == 0) {
        var Prime_flag = 0;
        for (i = 2; Prime_flag != 1 && i <= j/2; i++) {
            if (j % i == 0) {
                Prime_flag = 1;
            }
        }
        if (Prime_flag==0){
            primeNumber.push(j);
        }
    }
}
console.log(primeNumber);