//Question 1a: Print odd numbers in an array.
// Anonymous function
var arr = [1,2,3,4,5,6,7,8,9,10];
var result = [];
var odd = function (arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        result.push(arr[i]);
         }
     }
     return result;
}
 console.log(odd(arr)); 
  
// IIFE function
 (function odd (arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
)([1,2,3,4,5,6,7,8,9,10]); 

// Arrow function
 const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
}
const numbers = [1, 2, 3, 4, 5];
printOddNumbers(numbers);
 

//Question 1b: Convert all the strings to title caps in a string array.
// Anonymous function
 function toTitleCase(str) {
str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
console.log(toTitleCase("WELCOME TO GUVI")); 

// IIFE function
(function convertStringsToTitleCaps(array) {
  for (const string of array) {
    console.log(string.charAt(0).toUpperCase() + string.slice(1));
  }
})(["welcome to guvi"]);

// Arrow function
let convertToTitleCaps = (arr) => {
 let titleCapsArray = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
  return titleCapsArray;
}
let strings = ["hello", "world", "javascript"];
let result = convertToTitleCaps(strings);
console.log(result);

//Question 1c: Sum of all numbers in an array.
// Anonymous function
var array = [10,20,30,-20]
var sumarray = function(array){
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
 }
  console.log(sumarray(array)); 
// IIFE function
var arr = [10,40,-20,60];
(function array(arr)
  { 
  var result =0;
    for(var i=0;i<arr.length;i++){
      result = result + arr[i];
    }
    console.log(result);
    
  })(arr);
  
  // Arrow function
let sumArray = (arr) => arr.reduce((total, num) => total + num, 0);
let numbers = [1, 2, 3, 4, 5];
let result = sumArray(numbers);
console.log(result);
  
//Question 1d: Return all the prime numbers in an array.
 // Anonymous function
var array = [2,3,5,7,9,10,11,13,15,17];
  function isPrime(num) {
    for (var i = 2; i<=Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
console.log(array.filter(isPrime));

// IIFE function
var array = [2,3,5,7,9,10,11,13,15,17];
  (function isPrime(num) {
    for (var i = 2; i<=Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  });
(console.log(array.filter(isPrime)));

// Arrow Function
const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);

//Question 1e: Return all the prime numbers in an array.
// Anonymous function
var array = ["civic","racecar","radar","Ivana","disel","level"];
var resultPallindromeArray = function (array) {
    return (array.filter((item) => {
        var temp = item + ""
        if ((temp.split('').reverse().join('')) === item + "")
            return true
        return false
    }))
}
console.log(resultPallindromeArray(array));

// IIFE function
(function(arr) {
  const isPalindrome = function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  const result = arr.filter(str => isPalindrome(str));
  console.log(result);
})(["hello", "madam", "world", "level"]); 

// Arrow function
const isPalindrome = (str) => {
const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
const getPalindromes = (arr) => arr.filter((str) => isPalindrome(str));
const strings = ["hello", "level", "world", "madam"];
const result = getPalindromes(strings);
console.log(result);

//Question 1f: Return median of two sorted arrays of the same size.
// Anonyumous function 
let findMedian = function(arr1, arr2) {
let mergedArr = arr1.concat(arr2);
mergedArr.sort((a, b) => a-b);
let length = mergedArr.length
if (length % 2 === 0){
  let midIndex1 = length /2 - 1;
  let midIndex2 = length / 2
  let median = (mergedArr[midIndex1] + mergedArr[midIndex2]) / 2;
  return median;
} else {
let midIndex = Math.floor(length / 2);
let median = mergedArr[midIndex];
return median;
  }
}
let arr1 = [1,2,4,7,9,2];
let arr2 = [3,5,6,8,2,1];
let result = findMedian(arr1, arr2);
console.log(result); 

//IIFE function
 (function(arr1, arr2) {
  const mergedArr = arr1.concat(arr2);
  mergedArr.sort((a, b) => a - b);

  const length = mergedArr.length;
  if (length % 2 === 0) {
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    const median = (mergedArr[midIndex1] + mergedArr[midIndex2]) / 2;
    console.log(median);
  } else {
    const midIndex = Math.floor(length / 2);
    const median = mergedArr[midIndex];
    console.log(median);
  }
})([1,2,4,7,9,2], [3,5,6,8,2,1]);

//Question 1g:Remove duplicates from an array.
// Anonyumous Function
let removeDuplicates = function(arr) {
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
if (!uniqueArr.includes(arr[i])) {
uniqueArr.push(arr[i]);
  }
}
return uniqueArr;
} 
let arr = [1,22,44,22,67,33,44]
 let result = removeDuplicates(arr);
 console.log(result);
 
 //IIFE function
(function(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
})([1, 22, 23, 23, 47, 47, 5]);  

//Question 1h:Rotate an array by k times.
 // Anonymous function
const rotateArray = function(arr, k) {
const rotations = k % arr.length;
const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));
  return rotatedArr;
}
const arr = [1, 2, 3, 4, 5];
const k = 2;
const result = rotateArray(arr, k);
console.log(result);
 // IIFE function
 (function(arr, k) {
  const rotations = k % arr.length;
  const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));
  console.log(rotatedArr);
})([1, 2, 3, 4, 5], 2);  