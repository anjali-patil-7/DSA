//1........................................................stack implementation
class stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join("<="));
  }
}
const out = new stack();
out.push(10);
out.push(20);
out.push(30);
out.print();
console.log(out.pop());
out.print();
console.log(out.peek());
out.print();
console.log(out.size());
console.log(out.isEmpty());


//2.........................................................reversing the stack
    //method 1
      reverse(){
        this.items = this.items.reverse()
    }
    //method 2
    reverse(){
        let left = 0
        let right = this.items.length -1 
        while(left<right){
            let temp = this.items[left]
            this.items[left] = this.items[right]
            this.items[right] = temp
            left++
            right--
        }
    }


///3.........................................................STACK USING ONE QUEUE
class stack{
    constructor(){
        this.queue = []
    }
    push(x){
        this.queue.push(x)
        
        let size = this.queue.length
        for(let i=0; i<size-1; i++){
            this.queue.push(this.queue.shift())
        }
    }
    pop(){
       return this.queue.shift()
    }
    top(){
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0
    }
    print(){
        console.log(this.queue.join("<="))
    }
}
const out = new stack()
out.push(10)
out.push(20)
out.push(30)
out.print()
console.log(out.pop())
out.print()
console.log(out.top())


//3..........................................................STACK USING TWO QUEUE
class StackUsingQueue {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty!";
        }

        // Move n-1 elements from q1 to q2
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        // Last element of q1 = top of stack
        let popped = this.q1.shift();

        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];

        return popped;
    }

    peek() {
        if (this.isEmpty()) return "Stack is Empty!";
        return this.q1[this.q1.length - 1];
    }

    isEmpty() {
        return this.q1.length === 0;
    }

    print() {
        console.log(this.q1.join(" <= "));
    }
}

const s1 = new StackUsingQueue();
s1.push(10);
s1.push(20);
s1.push(30);

console.log("Stack (using Queue):");
s1.print();    // 10 <= 20 <= 30

console.log("Pop:", s1.pop());  // 30
s1.print();    // 10 <= 20



//4.....................................................STACK USING LINKLIST
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class stackusingLinkedlist{
    constructor(){
        this.top = null
        this.length = 0
    }
    push(x){
        let newNode = new Node(x)
        newNode.next = this.top
        this.top = newNode
        this.length++
    }
    pop(){
        let poppedvalue = this.top.value
        this.top = this.top.next
        this.length--
        return poppedvalue
    }
    peek(){
        if(this.isEmpty()) return "stack is empty"
        return this.top.value
    }
    isEmpty(){
        return this.top = null
    }
    size(){
        return this.length
    }
    print(){
        let curr = this.top
        let res = []
        while(curr){
            res.push(curr.value)
            curr = curr.next
        }
        console.log(res.join("<="))
    }
}
const out = new stackusingLinkedlist
out.push(10)
out.push(20)
out.push(30)
out.print()
console.log(out.pop())
out.print()




//**********************************LOGICAL QUS******************************************************************************* */
//1. using stack check the string is palindrome or not 

function check(str){
    let stack = []
   for(let char of str){
       stack.push(char)
   }
   for(let char of str){
       if(char !== stack.pop()) return false
   }
   return true
}
console.log(check("madam"))
console.log(check("anjali"))

//2...................