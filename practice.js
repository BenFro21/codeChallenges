// Bianry serch Tree 
// You are given a list of numbers stored in a list, A. Your challenge is to build a [Binary Search Tree] (Binary search tree - Wikipedia 959) to store these numbers. You will need to:
// 1 Represent each node of the tree (including its data, left child and right child).
// 2 Print the tree out in an understandable form.
// 3 Make a function to insert a list of numbers (A) into the tree.
// 4 Check if you can insert all the numbers in A into your tree, and that it prints out as expected.
// help: https://en.wikipedia.org/wiki/Binary_search_tree 




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reverse Words 
// Write a function that will take a given string 181 and reverse the order of the words. “Hello world” becomes “world Hello” and “May the Fourth be with you” becomes “you with be Fourth the May”

// function reverseWords(str){
//     let newStr = str.split(' ').reverse()
//     newStr.map((w, index) => {
//         console.log(w, index)
//     })
// }

// reverseWords('My name is Ben')


// function find_total(my_numbers) {
//     //Insert your code here 
//     // 1 point for ever even number
//     let total =0
   
//    my_numbers.map(n => {
//         if(n % 2 === 0){
//             console.log(total)
//            total = total + 1
//        }else if(n === 5){
//            total = total + 5
//        }else if( n % 2 !== 0 && n !== 5){
//            total = total + 3
//        }
//     }) 
//     console.log(total)
// }

// find_total([1,2,3,4,5])



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function, fibonacciFinder50, that will find the 50th number in the Fibonacci Sequence.
// Function Name: fibonacciFinder50
// Input: There are no parameters to this function
// Output: an integer, the 50th number in the Fibonacci Sequence
// Example: fibonacciFinder50() => 7778742049
// In the Fibonacci Sequence 101, the first two numbers are 0 and 1 and every number thereafter is the sum of the previous two numbers in the sequence
// For this challenge, consider 0 to be the 1st Fibonacci Number, not the 0th (i.e. do not zero-index)



// function fibonacciFinder50() {
//     for(n=0; n<1000; n++){
//         if (n =50){
//             console.log('Fib')
//         }
//     }
// }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function, primeNumberDetector, that tests if a number, n is a prime number.
// Function Name: primeNumberDetector
// Input: integer n
// Output: boolean: true if n is a prime number else false.
// Example: primeNumberDetector(13) => True



// function primeNumberDetector(n){
//     if(n % n === 0 && n % 1 === 0){
//         console.log(true)
//     }
// }

// primeNumberDetector(13)







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
// Follow up: Can you solve it using O(1) (i.e. constant) memory?





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// WORD FIZZ BUZZ  MORE ADVANCE FROM GORILLA TESTING 
// 1) takes in a number and prints a result depending on 
// If the number ends with 0 it prints 'zero'
// If the number ends with 5 it prints 'five'
// If the number is even print 'even'
//if the number is odd print 'odd'

// function readNum(num){
//    let strNum = num.toString()
//    let strArry = strNum.split('')
//    let testNum = strArry.splice(strArry.length -1)
// //    console.log(testNum )
//    if(num % 2 === 0 && testNum == 0){
//     console.log('zero')
//    }else if(num % 2 !==0 && testNum == 5 ){
//     console.log('five')
//    }else if(num % 2 === 0){
//     console.log('even')
//    }else if(num % 2 !== 0){
//     console.log('odd')
//    }
// }
// readNum(1000)
// readNum(555)
// readNum(127)
// readNum(82)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// var isValid = function(s) {
//    let splitSArr = s.split('')
//    splitSArr.map(char => {
//        if(char[0] === '(' && char[1] === ')'){
//            return true
//        }
//        console.log(char[0])
//    })
// };

// isValid('()')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// let list1Case1 = [1,2,4]
// let list2Case1 = [1,3,4]

// let list1Case2 = []
// let list2Case2 = []

// let list1Case3 = []
// let list2Case3 = [0]


// let mergeTwoLists = function(list1, list2) {
//    let newList = list1.concat(list2).sort()
//    return console.log(newList)
// }
// mergeTwoLists(list1Case1, list2Case1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


let removeDuplicates = function(nums){
   
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

var removeElement = function(nums, val) {
    
};





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let serchInsert = function(nums, target){
//     nums.forEach((n, index) => {
//         if(n === target){
//             console.log(index)
//             return index
//         }else if(n !== target){
//             console.log(nums.length + 1)
//         }
//     })
// }


// let testNums = [1,3,5,6]
// let testTarget = 5

// serchInsert(testNums, testTarget)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
// Function Description
// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
// int: the number of pairs
// Input Format
// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.


function sockMerchant(n, ar) {
    let total = 0
    // Write your code here
  for(let i=0; i <= n; i++){
      ar.map(j => {
          console.log(j)
      })
  }
  return total
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given two strings s1 and s2 check if they are anagrams.
function areAnagrams(s1, s2){
    if(s1.length !== s2.length){
        return console.log(false)
    }
    let freq1 = {};
    let freq2 = {}
    s1.forEach(ch => {
        if(ch in freq1){
            freq1[ch] += 1
        }else {
            freq1[ch] = 1
        }

    })
    s2.forEach(ch => {
        if(ch in freq2){
            freq2[ch] += 1
        }else {
            freq1[ch] = 1
        }

    })   
    console.log(freq1,freq2)
}

let string1 = 'Ben'
let string2 = 'Neb'

// areAnagrams(string1, string2)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.


let serchInsert = function(nums, target){
    if(!nums) return console.log(0);
    let left = 0
    let right = nums.length -1
    if(target > nums[nums.length -1]) return console.log(nums.length)
    else if(target <= nums[0]) return console.log(0)
    else{
        while(left <= right){
            let mid = left + Math.floor((right - left) /2)
            if(nums[mid] === target) return console.log(mid)
            else if(nums[mid] > target) {
                right = mid -1
            }
            else{
                left = mid + 1
            }
        }
        return console.log(left)
    }
}
let testNum11 = [1,3,5,6]
let tar1 = 5
let testNum22 = [1,3,5,6]
let tar2 = 2
let testNum33 = [1,3,5,6]
let tar3 = 7
// serchInsert(testNum11, tar1)
// serchInsert(testNum11, tar2)
// serchInsert(testNum11, tar3)
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let mergeTwoLists = function(l1,l2){
    // Error check 
    if(l1 == null && l2 == null){
        return null
    }
    let firstTime = true;
    let mergeHead = new listNode()
    mergeEnd = mergeHead

    while(l1 && l2){
        if(firstTime) {
            firstTime = false
            if(l1.val < l2.val){
                mergeHead.val =l1.val
                l1 =l1.next
            }else {
                mergeHead.val = l2.val
                l2 =l2.next
            }
        }
        else{
            if(l1.val < l2.val){
                mergeEnd.next = 
            }
        }
    }
}