const removeFromArray = function(arr, ...nums) {
    let newArr = [];
    let numsSet = new Set(nums);

    for (i = 0; i < arr.length; i++) {
        if (!numsSet.has(arr[i])) {
            newArr.push(arr[i]);
        }
    }      

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
