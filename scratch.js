console.log("hello");


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
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



class Group {
  constructor() {
    this.members = [];
  }
  add(x) {
    if(!this.members.includes(x)) {
      this.members.push(x)
    }
  }
}

let myGroup = new Group;
console.log(myGroup);
myGroup.add(3);
console.log(myGroup);



