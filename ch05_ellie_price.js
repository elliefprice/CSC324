//Ellie Price

// Flattining
/* Use the reduce method in combination with the concat method to “flatten” 
an array of arrays into a single array that has all the elements of the original arrays.*/

/*let arrays = [[1, 2, 3], [4, 5], [6]];
Your code here.
 → [1, 2, 3, 4, 5, 6]*/

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));git git 


 /* I used the textbook and the automatic AI help in JavaScript 
 that automatically suggests a format for your code for you without adding in all the elemets. 
 In class help was also given on 09/23 and 09/25 to explain the "concat" method used in the answer*/
 
 //Your Own Loop
 /* Write a higher-order function loop that provides something like a for loop statement. 
 It should take a value, a test function, an update function, and a body function. Each iteration,
  it should first run the test function on the current loop value and stop if that returns false. 
  It should then call the body function, giving it the current value, and finally call the update
   function to create a new value and start over from the beginning.

When defining the function, you can use a regular loop to do the actual looping.*/

/*Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
 → 3
 → 2
 → 1 */

 function loop(value, test, update, body) {
  for (let current = value; test(current); current = update(current)) {
    body(current);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

/* I used the same set up of the in class help from the previous problem to help me with the format of 
this function as well as the automatic AI help in JavaScript that automatically suggests a format for your
code to follow. */

// Everything
/* Arrays also have an every method analogous to the some method. This method returns true 
when the given function returns true for every element in the array. In a way, some is a version 
of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.*/

/*function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
 → true
console.log(every([2, 4, 16], n => n < 10));
 → false
console.log(every([], n => n < 10));
 → true */

 /* Using a Loop: */

 function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

/* I used ChatGPT to help me with the "if" statment for the for loop of the function.
Here is my link: https://chatgpt.com/share/68d57aa3-c0b0-8011-be98-f289dc230fe6 */

/* Using the Some Method*/

function every(array, test) {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

/* I used the same chat as the previous answer and used the "!test(element)) to carry over in this problem as well.
I also used Chat GPT to help with getting my code to run without errors. 
Here is my link: https://chatgpt.com/share/68d57aa3-c0b0-8011-be98-f289dc230fe6 */