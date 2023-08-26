// Print the odd numbers in an array using anonymous function
let value = [2, 3, 6, 5, 4, 9, 8, 7, 1]
function findodd(value) {
    let odd = [];
    for (let num of value) {
        if (num % 2 == 1) {


            odd.push(num);
        }
    }
    return odd;
}
console.log('Odd numbers using Anonymous:', findodd(value));


// Print the odd numbers in an array using IIFE
(function (findodd) {
    for (let index = 0; index < findodd.length; index++) {
        if (findodd[index] % 2 == 1) {
            console.log(findodd[index]);
        }
    }
}

)([2, 3, 6, 5, 4, 9, 8, 7, 1])


//Convert all the strings to title caps in a string array using Anonymous Function 

let name = ['sai']
function titleCase(str) {
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
} console.log('TitleCase using Anonymous:', titleCase(name));

//Convert all the strings to title caps in a string array using IIFE

console.log((function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
})("heyy krishna"));


// Sum of all numbers in an array using Anonymous Function

let number = [3, 6, 5, 4]
function add(num) {
    let sum = 0;
    let index = 0;
    while (index < 4) {
        sum = sum + num[index];
        index++;
    }
    return sum;
}
console.log("Sum of an Array using Anonymous:", add(number));


// Sum of all numbers in an array using IIFE
console.log((function add(num) {
    let sum = 0;
    let i = 0;
    for (; i < num.length;) {
        sum = sum + num[i];
        i++;
    }
    return sum;
})([3, 6, 5, 4]));

//Return all the prime numbers in an array using Anonymous Function
let array = [2, 6, 4, 5, 7, 8, 11, 13];
function isPrime(num) {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log('Prime Numbers Using Anonymous:', array.filter(isPrime))


//IIFE Prime Numbers
console.log((function isPrime(num) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
        return num > 1;
    }


})([1, 2, 6, 4, 5, 7, 8, 11, 13]));


//Return all the palindromes in an array using Anonymous Function
let a = ['Malayalam']
function isPalindrome(arr, n) {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
} console.log(isPalindrome(a));


//Return all the palindromes in an array using IIFE
console.log((function isPalindrome(arr, n) {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})(['Madam']));

//Remove duplicates from an Array using Anonymous Function
let arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr));

//Remove duplicates from an Array using IIFE
console.log((function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}(['apple', 'apple',
    'orange', 'mango', 'apple', 'guava'])));


//Rotate an array Using Anonymous 
let b = [1, 2, 3, 4, 5]
function rotate(array, stepsToShift) {

    for (let i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
} console.log(rotate(b));


//Rotate an array using IIFE
console.log((function rotate(array, stepsToShift) {
    for (let i = 0; i < stepsToShift; i++) {
        array.unshift(array.pop());
    }

    return array;
}([1, 2, 3, 4, 5])));






// 



