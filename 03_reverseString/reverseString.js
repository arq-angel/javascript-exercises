const reverseString = function(word) {

    // Easier Way
    // return word.split("").reverse().join("");

    // My way
    let arr = word.split("");
    let count = arr.length;
    let newArr = [];    

    for(i = count-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    let newWord = newArr.join("");

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
