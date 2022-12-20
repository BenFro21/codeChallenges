//  Given an array of sorted integers and a target return the index of the target. if the target does not exist return the index it would belong into had it existed.
function findIndexOfTarget(arr, target){
    let len = arr.length;
    //first element
    if(target <= arr[0]){
        return 0;
    }
    //last element
    if(target >= arr[len-1]){
        return len
    }
    //in between and exist in the array 
    for(let i=0; i<len; i++){
        if(arr[1] <= target && arr[i+1] >= target){
            return i+1
        }
    }

}
// console.log('set1: ', findIndexOfTarget([1,2,3,5,6], 5))
// console.log('set2: ', findIndexOfTarget([1,2,4,6], 5))
// console.log('set3: ', findIndexOfTarget([1,3,4,6,7,9], 8))
// console.log('set4: ', findIndexOfTarget([2,3,4,6], 1))
// console.log('set5: ', findIndexOfTarget([1,3,4,6,7,9], 18))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Given a string reverse it

// Solution 1 
/*
1. given string - conver it into an array 
2. reverse it while in an array
3. turn array back into string 
*/
const revString = (str) => {
    const arr = str.split('');
    arr.reverse()
    str = arr.join("")
    console.log(str)
}
// revString("apple")
// revString('Greetings!')

// Solution 2
/* To show i know what im doing 
1. given string - create empty strin 
2. loop through each char
3. Return the reversed 
*/
// (function(str){
//     let reversed = "";
//     for(let char of str){
//         reversed = char + reversed
//     }
//     console.log({
//         reversed_value:reversed
//     })
// })("Greetings!")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
Find palindromes
palindrome("abba") === true
palindrome("abcdefg")
1. reverse the string 
2. check with orginal string if they are the same 
*/
const palindrome =(str) => {
    const isPalindrome = str.split('').reverse().join('')
    console.log(str===isPalindrome)
}
// palindrome('abba')
// palindrome('ben')

(function(str){
    let reversed = ''
    for(let x of str){
        reversed = x + reversed
    }
    console.log(str=== reversed)
})("david")
