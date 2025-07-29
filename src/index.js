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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const testLinkedList = new LinkedList();
testLinkedList.append("Dog");
testLinkedList.append("Cat");
testLinkedList.prepend("Dragon");

console.log(testLinkedList);
console.log(testLinkedList.size());
console.log(testLinkedList.head);
console.log("The Tail is...");
console.log(testLinkedList.tail());
