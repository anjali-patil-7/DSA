
//1...............Linked List Class with Size and Empty Check
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Linklist{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getsize(){
        return this.size
    }
}
const list = new Linklist()
console.log('list isempty',list.isEmpty())
console.log('list getsize', list.getsize())

//2...................prepend the values (add a node at begining)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  printlist() {
    let curr = this.head;
    let liststr = "";
    while (curr) {
      liststr += curr.value + "=>";
      curr = curr.next;
    }
    console.log(liststr + "null");
  }
}

const list = new LinkList();
list.prepend(30);
list.prepend(20);
list.prepend(10);
list.printlist();
