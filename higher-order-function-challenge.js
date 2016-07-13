//Problem #1
console.log(any([8, 9, 10, 11], greaterThan10));

function greaterThan10(number) {
    if (number > 10) {
        return true;
    } else {
        return false;
    }
}

function any(array, callbackFn) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = callbackFn(array[i]);
        result.push(item);
    }
    for (var j = 0; j < array.length; j++) {
        if (result[j] === true) {
            return true;
        }
    }
}

//Problem #2

console.log(surprise()());

function surprise(word) {
    word = 'surprise';
    return function {
        exclamation = '!';
        return word + exclamation;
    }
}

//Problem #3

console.log(filter([1, 2, 3, 4], onlyOdd));

function onlyOdd(number) {
    if (number % 2 !== 0) {
        return number
    } else {
        return 'removeMe'
    }
}

function filter(array, callbackFn) {
    var result = [];
    var sift = [];
    for (var i = 0; i < array.length; i++) {
        var item = callbackFn(array[i]);
        result.push(item);
    }
    for (var j = 0; j < result.length; j++) {
        if (result[j] !== 'removeMe') {
            sift[j] = result[j];
        }

    }
    return sift
}


//Problem #4

console.log(sumTwoNumbers(3)(9));

function sumTwoNumbers(num1) {
    return function(num2) {
        return num1 + num2
    }
}
