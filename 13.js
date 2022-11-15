/*
13. Roman to Integer
https://leetcode.com/problems/roman-to-integer/
*/

const RomanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    /*
    we reverse the array so that we can "remember" the last value 
    insted of "looking" for the next one.
    */
    let sum = 0
    let last = 0
    s.split("").reverse().forEach(symb => {
        let num = RomanNumerals[symb]
        sum += num >= last ? num : -num
        last = num
    })
    return sum
}

console.log(romanToInt("IVXVICDMIX"))