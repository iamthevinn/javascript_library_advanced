var _ = {
    map: function (array, callback) {
        let mappedValues = [];
        if (typeof array === "object") {
            for (let key in array) {
                mappedValues.push(callback(array[key], key))
            }
        }
        return mappedValues
    },
    reduce: function (array, callback, initialValue) {
        var singleOutput = initialValue;
        for (var i = 0; i < array.length; i++) {
            singleOutput = callback(singleOutput, array[i]);
        }
        return singleOutput;
    },
    find: function (array, callback) {
        for (let i = 0; i < array.length; i++)
            if (callback(array[i]) === true)
                return array[i]
    },
    filter: function (array, callback) {
        let trueElements = [];
        for (let i = 0; i < array.length; i++)
            if (callback(array[i]))
                trueElements.push(array[i])

        return trueElements;
    },
    reject: function (array, callback) {
        let trueElements = [];
        for (let i = 0; i < array.length; i++)
            if (!callback(array[i]))
                trueElements.push(array[i])

        return trueElements;
    },
    first: function (array) {
        return array[0]
    }
}

console.log("Map 1: " + _.map([1, 2, 3], function (num) {
    return num * 3;
})); //=> [3, 6, 9]
console.log("Map 2: " + _.map({
    one: 1,
    two: 2,
    three: 3
}, function (num, key) {
    return num * 3;
})); //=> [3, 6, 9]
console.log("Map 3: " + _.map([
    [1, 2],
    [3, 4]
], _.first)); //=> [1, 3]

var sum = _.reduce([1, 2, 3], function (memo, num) {
    return memo + num;
}, 0); //=> 6
console.log("Reduce: " + sum);

var even = _.find([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
}); //=> 2
console.log("Find: " + even)
var evens = _.filter([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
}); // if things are working right, this will return [2,4,6].
console.log("Filter: " + evens);
var odds = _.reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
}); //=> [1, 3, 5]
console.log("Reject: " + odds);
