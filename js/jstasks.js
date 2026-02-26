// Your task is to make two functions(max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.Each function returns one number.

//     Examples(Input -> Output)
//     * [4, 6, 2, 1, 9, 63, -134, 566] -> max = 566, min = -134
//         * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//             * [42, 54, 65, 87, 0] -> min = 0, max = 87
//                 * [5] -> min = 5, max = 5


const numbers = [4, 6, 2, 1, 10, -3];

// Мінімум
const minValue = numbers.reduce((acc, num) => num < acc ? num : acc);
console.log(minValue); // -3

// Максимум
const maxValue = numbers.reduce((acc, num) => num > acc ? num : acc);
console.log(maxValue); // 10



// Write a function that can return the smallest value of an array or the index of that value.The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates.Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1, 2, 3, 4, 5], "value") should return 1
//     ([1, 2, 3, 4, 5], "index") should return 0


function min(arr, toReturn) {
    const minNum = Math.min(...arr);

    return toReturn === "value" ? minNum : arr.indexOf(minNum);
}