// Chapter 6 Homework
// Ellie Price

// Groups

/* The standard JavaScript environment provides another data structure called Set. Like an instance of Map,
 a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks
  which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. 
Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument
 is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.


Give the class a static from method that takes an iterable object as its argument and creates a group that 
contains all the values produced by iterating over it. */

/*Solution:*/

class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  delete(value) {
    this.members = this.members.filter(member => member !== value);
  }
  has(value) {
    return this.members.includes(value);
  }
static from(collection) {
    let group = new Group();
    for (let item of collection) {
      group.add(item);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

/* I used the textbook problems from the "Rabbit" examples and the "Temperature" examples to help me with these problems.
I also used the automatic AI help in JavaScript that automatically suggests a format for your code to follow.   
I also used ChatGPT to help me with the "static from" method and the "delete" method. 
Here is my link to ChatGPT: https://chatgpt.com/share/68dcbe3e-022c-8011-9355-856014e840e4 */   git add --all