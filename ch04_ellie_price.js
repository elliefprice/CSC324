// Chapter Four: Objects and Arrays
// Ellie Price

// The Sum of a Range
/*The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers 
from start up to and including end. */

function range(start, end) {
  let numberArray = [];

  for (let i = start; i <= end; i++) {
    numberArray.push(i);
  }

  return numberArray;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));

/* In class help was given on 9/16 */

/* Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example 
program and see whether it does indeed return 55.*/

function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(range(1, 10)));


/*As a bonus assignment, modify your range function to take an optional third argument that indicates the “step”
value used when building the array. If no step is given, the elements should go up by increments of one, 
corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step = 1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

/* I used ChatGPT to help me fill in the loop conditions. Here is my link: 
https://chatgpt.com/share/68ca219c-f278-8011-9824-84b1d4a4a14f */

// Reversing an Array
/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should 
take an array as its argument and produce a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing 
its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you 
expect to be useful in more situations? Which one runs faster? */

// reverseArray

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}


//reverseArrayInPlace

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  //return array;
}



/* I used ChatGPT to help me with the function and ue the hint from the textbook. Here is my link: 
https://chatgpt.com/share/68ca255a-9ac4-8011-a587-c982f4008e57 */



let george = ["George", "Washington", "Hillary", "Clinton", "Donald"];
reverseArrayInPlace(george);
console.log(george);