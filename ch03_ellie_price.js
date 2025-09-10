// Ellie Price

// Minimum
/*The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can write a function like that ourselves now. Define the function min that takes two arguments and 
returns their minimum.*/

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));


// Recursion
/*We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 
to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter 
(a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

function isEven(n) {
  if (n < 0) {
    return isEven(-n);           
  } else if (n === 0) {
    return true;                
  } else if (n === 1) {
    return false;            
  } else {
    return isEven(n - 2);      
  }
}
 
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


/* My solution gave me a "false" for negative one.Im not sure if it was because it correctly converted the negative
to a positive, or if it as because it was unable to determine the number. I used chatGPT to help with finishing the 
function to account for negative numbers. Here is my link to fix the 
function: https://chatgpt.com/share/68c11b7f-65e8-8011-bff1-68a1b3edb8fe */


//Bean counting
/*You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). 
The resulting value will be a string containing only one character (for example, "b"). The first character has 
position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character 
string has length 2, and its characters have positions 0 and 1.

Write a function called countBs console.log(countChar("kakkerlak", "k"));

Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite 
countBs to make use of this new function.*/

// Count Bs

function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      count++;
    }
  }
  return count;
}

console.log(countBs("BOB"));

/* I used ChatGPT to help me with this function. It told me I needed a "loop index" like the hint given in the book
that I was struggling with.
Here is my link: https://chatgpt.com/share/68c11eef-7b94-8011-bcce-64a769f82ba4 */

//  Count Char

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));

/* I used the previous ChatGPT conversation to help me with this function. I just chnaged the "B" to "char" */

// Rewrite

function countBs(str) {
  return countChar(str, 'B');
}

/* https://chatgpt.com/share/68c11eef-7b94-8011-bcce-64a769f82ba4 */