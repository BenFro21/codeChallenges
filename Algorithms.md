# Two main types of algorthems: Serch and Sort 

# Big O notation 
## how long it takes via steps 
## how much ram does it take?
- Big O is about the big picture. IE dosnt count every single step
### Big O notation
- O(1) Constant Complexity. always takes the same amount of time not mater the data size 
- O(n) Linear Complexity. takes more time to execute as the data incresses 
- O(n^2) Quadratically complex equations are very inefficient and should be avoided whenever possible.
- O(log(N)) Logarithmic complexity. (classic serch is Binary )
- O(N!) Factorial complexity. 
### You could be asked to look at an algorithm, determine its Big O complexity, and give your reasoning. If so, keep the following considerations in mind:
- Does the function have to go through an entire list? If so, there’s an N in that Big O class somewhere.
- Are there nested loops? That might give you O(N^2) (or worse).
- Does the function break the list into smaller chunks? You could have O(log(N)).
- Is the amount of work the same, regardless of the size of the data set? You might have O(1).

