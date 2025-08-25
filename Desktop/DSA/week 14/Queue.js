
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
  front() {
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



////5....................................CircularQueue
class circularqueue{
    constructor(size){
        this.size = size
        this.queue = new Array(size)
        this.front = -1
        this.rear = -1
    }
    //check if queue is full
    isFull(){
        return (this.front === 0 && this.rear === this.size-1) || (this.rear + 1) % this.size === this.front
    }
    //check if queue is empty
    isEmpty(){
        return this.front === -1
    }
    //add elements
    enqueue(item){
        if(this.isFull()){
            console.log("queue is full")
            return 
        }
        if(this.isEmpty()){
            this.front = 0
            this.rear = 0
        }else{
            this.rear = (this.rear + 1) % this.size //circular increment
        }
        this.queue[this.rear] = item
        console.log(item,"added")
    }
    //remove element
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        let removed = this.queue[this.front]
        //if only one element was present
        if(this.front === this.rear){
            this.front = -1
            this.rear = -1
        }else{
            this.front = (this.front + 1) % this.size
        }
        console.log(removed,"removed")
        return removed
    }
    //see front element
    getFront(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return 
        }
        console.log("front",this.queue[this.front])
    }
    //see rear element
    getRear(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return 
        }
        console.log("Rear",this.queue[this.rear])
    }
}
const out = new circularqueue(3)
out.enqueue(10)
out.enqueue(20)
out.enqueue(30)
console.log(out.isFull())
console.log(out.isEmpty())
out.getFront()
out.getRear()
out.dequeue(30)
console.log(out.isFull())
console.log(out.isEmpty())


//enqueue(10) → [10, _, _]  front=0, rear=0  
// enqueue(20) → [10, 20, _] front=0, rear=1  
// enqueue(30) → [10, 20, 30] front=0, rear=2  
// dequeue()   → [_, 20, 30]  front=1, rear=2  
// enqueue(40) → [40, 20, 30] front=1, rear=0  (wraps around)
