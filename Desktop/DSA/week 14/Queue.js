
///1.................................implementation of queue
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  reverse() {
    let left = 0;
    let right = this.items.length - 1;
    while (left < right) {
      let temp = this.items[left];
      this.items[left] = this.items[right];
      this.items[right] = temp;
      left++;
      right--;
    }
  }
  print() {
    console.log(this.items.join("<="));
  }
}
const out = new Queue();
out.enqueue(10);
out.enqueue(20);
out.enqueue(30);
out.print();
out.dequeue();
out.print();
console.log(out.peek());
console.log(out.isEmpty());
console.log(out.size());
out.reverse();
out.print();


///2.......................................QUEUE USING ONE STACK 
class QueueUsingOneStack {
  constructor() {
    this.stack = [];
  }

  enqueue(element) {
    this.stack.push(element);
  }

  dequeue() {
    if (this.stack.length === 0) {
      return "Queue is empty";
    }

    // Remove bottom element using recursion
    let x = this.stack.pop();

    if (this.stack.length === 0) {
      return x; // This is the first element inserted (front of queue)
    }

    let item = this.dequeue();
    this.stack.push(x);
    return item;
  }

  print() {
    console.log(this.stack.join(" <- "));
  }
}

const out = new QueueUsingOneStack();
out.enqueue(10);
out.enqueue(20);
out.enqueue(30);
out.print();


///4...............................QUEUE USING LINKLIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //insert at tail
  enqueue(value) {
    let newNode = new Node(value);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  //remove from front
  dequeue() {
    if (this.head === null) return "queue is empty";
    let removed = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return removed;
  }
  peek() {
    if (this.head === null) return "queue is empty";
    return this.head.value;
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    return this.length;
  }
  print() {
    let curr = this.head;
    let res = [];
    while (curr) {
      res.push(curr.value);
      curr = curr.next;
    }
    console.log(res.join("<="));
  }
}

const out = new Queue();
out.enqueue(10);
out.enqueue(20);
out.enqueue(30);
out.print();
console.log(out.dequeue());
out.print();