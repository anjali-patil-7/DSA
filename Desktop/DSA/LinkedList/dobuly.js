// Node for Doubly Linked List
class DNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  // Add to end
  addLast(data) {
    const newNode = new DNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev = curr;
  }

  // Add to beginning
  addFirst(data) {
    const newNode = new DNode(data);
    newNode.next = this.head;
    if (this.head) this.head.prev = newNode;
    this.head = newNode;
  }

  // Print in order
  printForward() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += curr.data + " <-> ";
      if (!curr.next) break;
      curr = curr.next;
    }
    console.log(result + "null");
    return curr; // return tail for reverse print
  }

  // Print in reverse order
  printBackward() {
    let tail = this.printForward();
    let result = "";
    while (tail) {
      result += tail.data + " <- ";
      tail = tail.prev;
    }
    console.log(result + "null");
  }
}

// Test Doubly Linked List
const dll = new DoublyLinkedList();
dll.addFirst(3);
dll.addFirst(2);
dll.addFirst(1);
dll.addLast(4);
dll.addLast(5);
dll.printForward();
dll.printBackward();
