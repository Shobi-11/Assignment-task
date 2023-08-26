// Print the odd numbers in an array using Arrow Function
let numbers = [2, 3, 6, 5, 4, 9, 8, 7, 1]
findodd = (numbers) => {
    let odd = [];
    for (let num of numbers) {
        if (num % 2 == 1) {
            odd.push(num);

        }
    } return odd;
}
console.log(findodd(numbers));

//Convert all the strings to title caps in a string array using Arrow Function
let word = ['sundar']
titleCase = (str) => {
    //str = str.toLowerCase().split(' ');
    let i = 0;
    for (; i < str.length;) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        i++;
    }
    return str.join(' ');
}
console.log(titleCase(word));

// Sum of all numbers in an array using Arrow Function
let value = [3, 6, 9, 4]
sum = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    return sum;
}
console.log(sum(value));

// Return all the prime numbers in an array using Arrow Function
let num = [ 2, 3, 4, 5, 6, 7, 8, 9, 11]
let result = [];
isPrime = (num) => {
    if (num < 2)
        return false;
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            return false;
        }
    }
    return true;
}
num.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
        result.push(element);
    }
});
console.log(result);

//Return all the palindromes in an array using Arrow Function
let name = ['Madam']
Palindrome = (arr, n) => {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
console.log(Palindrome(name));

