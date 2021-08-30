let arr = [];
for (i = 0; i < 10; i++) {
    var sign = Math.floor((Math.random() * 2))
    if (sign == 1)
        arr[i] = Math.floor((Math.random() * 20));
    else
        arr[i] = Math.floor((Math.random() * 20)) * -1;
}
function findTriplets(arr) {
    console.log(arr);
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) == 0) {
                    console.log(arr[i], arr[j], arr[k]);
                    found = true;
                }
            }
        }
    }
    // If no triplet with 0 sum found in array
    if (found === false) {
        console.log(" not exist ");
    }
}
findTriplets(arr);