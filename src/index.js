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

console.log(testLinkedList);
