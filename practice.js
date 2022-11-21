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

let list1Case1 = [1,2,4]
let list2Case1 = [1,3,4]

let list1Case2 = []
let list2Case2 = []

let list1Case3 = []
let list2Case3 = [0]


let mergeTwoLists = function(list1, list2) {
   let newList = list1.concat(list2).sort()
   return console.log(newList)
}


mergeTwoLists(list1Case1, list2Case1)