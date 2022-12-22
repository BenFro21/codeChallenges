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

// (function(str){
//     let reversed = ''
//     for(let x of str){
//         reversed = x + reversed
//     }
//     console.log(str=== reversed)
// })("david")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the char that appears the most, and how many times does it appear 
/* 
for of loop 
1. create and object. 
2. if the character of str does not exist in obj, then set its value to 1
3. if it does, do an increment

for in loop
4. loop through the values of the object to see wich one has the highest value 

32eddseew3
#%he3#33ll#
*/
const maxChar = (str) => {
    let obj = {};
    let maxNum = 0;
    let maximumChar ='';
    // the for of loop is saying for the chars of the str. If there is no char then set it equal to one or add one to the char if it already exists  
    for(let char of str){
        (!obj[char]) ? obj[char] = 1 : obj[char]++;
    }
    for(let char in obj){
        if(obj[char] >= maxNum){
            maxNum = obj[char];
            maximumChar = char
        }
    }
    console.log(`${maximumChar} appears ${maxNum} times`)
}
// maxChar('32eddseew3')
// maxChar('#%he3#33ll#')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Write Algorithm to REVERSE an integer 
Steps
1. Convert to a string
2. turn into array
3.reverse method
4.back to string 
5. back to int 

test cases 
51 to 15
500 to 5
-15 to -51
-900 to -9
*/

const reverseInt = (n) => {
    if(n<0){
        return -1 * parseInt(n.toString().split('').reverse().join(''))
    }
    return parseInt(n.toString().split('').reverse().join(''))
}
// console.log(reverseInt(51))
// console.log(reverseInt(500))
// console.log(reverseInt(-15))
// console.log(reverseInt(-900))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fizz buzz
((num)=>{
    for(let i=1; i<45; i++){
        //check for 15
        if(i % 3 === 0 && i % 5 ===0){
             console.log('Fizzbuz');
             ++i
        }if(i % 3 === 0){
             console.log('Fizz')
             ++i
        }if(i % 5 === 0){
             console.log('Buzz')
             ++i
            
        }if(i % 3 === 0){
            console.log('Fizz')
            ++i
        }if(i >num) break;
        else{
            console.log(i)
        }
    }
})(45)