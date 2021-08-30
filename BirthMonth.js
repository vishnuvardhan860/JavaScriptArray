function rollDice() {
    var dice = Math.floor((Math.random() * 6)) + 1;
    return dice;
}

function minMax(numberArray) {
    let arrayMap = new Map();
    let max = numberArray[1]; let min = numberArray[1];
    let maxArray = new Array();
    let minArray = new Array();
    let minIndex = 1; let maxIndex = 1;
    for (i = 2; i < numberArray.length; i++) {
        if (numberArray[i] <= min) {
            min = numberArray[i];
            minIndex = i;
        }
        if (numberArray[i] >= max) {
            max = numberArray[i];
            maxIndex = i;
        }
    }
    for (i = 1; i < numberArray.length; i++) {
        if (numberArray[maxIndex] == numberArray[i]) {
            maxArray.push(i);
        }
        if (numberArray[minIndex] == numberArray[i]) {
            minArray.push(i);
        }
    }
    arrayMap.set("max", maxArray);
    arrayMap.set("min", minArray);
    return arrayMap;
}

let diceEnries = new Map();
for (i = 1; i <= 10; i++) {
    diceEnries.set(i, rollDice());
}

for (let [key, value] of diceEnries.entries()) console.log("Dice" + key + ' = ' + value)
let entryTimes = new Array(0, 0, 0, 0, 0, 0, 0);

for (let value of diceEnries.values()) {

    entryTimes[value] = entryTimes[value] + 1;
}

console.log(entryTimes)
let asse = minMax(entryTimes);
console.log("max values: " + asse.get("max") + " we got " + entryTimes[asse.get("max")[0]] + " times")
console.log("min values: " + asse.get("min") + " we got " + entryTimes[asse.get("min")[0]] + " times")