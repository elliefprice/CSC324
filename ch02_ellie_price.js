// Ellie Price

// Looping a Triangle
/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let triangle = "";

for (let triangle = "#";
    triangle.length <= 7;
    triangle += "#") {
        console.log(triangle);
    }
console.log(triangle)

/*In class help was given on 9/2.
*/

// FizzBuzz
/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
(and not 3), print "Buzz" instead.
*/ 

for(let count = 1; count <= 100;
count += 1) {
if(count % 3 == 0 & count % 5 == 0) {
 console.log("Fizzbuzz")
} else if (count % 3 == 0) {
console.log("Fizz") 
} else if(count % 5 == 0) {
    console.log("Buzz")
} else {
    console.log(count)
}
}

/*In class help was given on 9/4.
*/

// Chessboard
/*Write a program that creates a string that represents an 8×8 grid, using newline characters 
to separate lines. At each position of the grid there is either a space or a "#" character. 
The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change 
the program so that it works for any size, outputting a grid of the given width and height.
*/

const size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

git init
git add --all
git commit -m "chapter two homework sloved"
git push