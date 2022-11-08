// Bianry serch Tree 

// You are given a list of numbers stored in a list, A. Your challenge is to build a [Binary Search Tree] (Binary search tree - Wikipedia 959) to store these numbers. You will need to:

// 1 Represent each node of the tree (including its data, left child and right child).
// 2 Print the tree out in an understandable form.
// 3 Make a function to insert a list of numbers (A) into the tree.
// 4 Check if you can insert all the numbers in A into your tree, and that it prints out as expected.
// help: https://en.wikipedia.org/wiki/Binary_search_tree 





// Reverse Words 
// Write a function that will take a given string 181 and reverse the order of the words. “Hello world” becomes “world Hello” and “May the Fourth be with you” becomes “you with be Fourth the May”

function reverseWords(str){
    let newStr = str.split(' ').reverse()
    newStr.map((w, index) => {
        console.log(w, index)
    })
}

reverseWords('My name is Ben')














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
