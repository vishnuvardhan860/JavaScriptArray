let numberArray = [];
for (i = 0; i < 10; i++) {
    numberArray[i] = Math.floor((Math.random() * 900))+100;
    console.log(numberArray[i]);
}
let min = numberArray[0];
let secMin = numberArray[1];
let max = numberArray[0];
let secMax = numberArray[1];

for (i = 1; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
        secMin = min;;
        min = numberArray[i];
    }
    if (numberArray[i] > max) {
        secMax = max;
        max = numberArray[i];
    }
}
console.log("min = " + min + " , max =" + max);
console.log("secmin = " + secMin + " , secmax =" + secMax);