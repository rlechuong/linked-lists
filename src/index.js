import "./styles.css";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value, null);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, null);

    if (this.head === null) {
      this.head = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      newNode.nextNode = temp;
    }
  }

  size() {
    let counter = 0;
    let current = this.head;

    while (current !== null) {
      counter += 1;
      current = current.nextNode;
    }

    return counter;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return null;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index && current !== null) {
      current = current.nextNode;
      counter++;
    }

    return current;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    if (this.head.nextNode === null) {
      let deleted = this.head;
      this.head = null;
      return deleted;
    }

    let previous = null;
    let current = this.head;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    return current;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;

    let counter = 0;

    while (current !== null) {
      if (current.value === value) {
        return counter;
      }
      current = current.nextNode;
      counter++;
    }

    return null;
  }

  toString() {
    let finalString = "";

    let current = this.head;

    while (current !== null) {
      finalString += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    finalString += "null";

    return finalString;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return;
    }

    const newNode = new Node(value, null);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let counter = 0;
    let current = this.head;
    let previous = null;

    while (counter < index && current !== null) {
      previous = current;
      current = current.nextNode;
      counter++;
    }

    newNode.nextNode = current;
    if (previous !== null) {
      previous.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      return null;
    }

    if (index === 0) {
      const deleted = this.head;
      this.head = this.head.nextNode;
      return deleted;
    }

    let counter = 0;
    let current = this.head;
    let previous = null;

    while (counter < index && current !== null) {
      previous = current;
      current = current.nextNode;
      counter++;
    }

    if (previous !== null && current !== null) {
      previous.nextNode = current.nextNode;
      return current;
    }

    return null;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// const testLinkedList = new LinkedList();
// testLinkedList.append("Dog");
// testLinkedList.append("Cat");
// testLinkedList.prepend("Dragon");

// console.log(testLinkedList);
// console.log("The Size is...");
// console.log(testLinkedList.size());
// console.log("The Head is...");
// console.log(testLinkedList.head);
// console.log("The Tail is...");
// console.log(testLinkedList.tail());
// console.log(testLinkedList.at(2));
// // console.log(testLinkedList.pop());
// // console.log(testLinkedList);

// console.log(testLinkedList.find("Dog"));
// console.log(testLinkedList.toString());

// console.log(testLinkedList.removeAt(0));
// console.log(testLinkedList.toString());

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());