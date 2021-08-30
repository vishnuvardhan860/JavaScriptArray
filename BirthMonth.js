let doubleNumber = [];
for (i = 10; i < 100; i++) {
    var num = checkNumber(i)
    if (num > 0)
        doubleNumber.push(num);
}
console.log(doubleNumber);

function checkNumber(number) {
  if(number%11==0)
        return number;
}