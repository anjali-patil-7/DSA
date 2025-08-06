
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

///.................. Convert array to singly linked list
  fromArray(arr) {
    arr.forEach(value => this.prepend(value));
  }


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


//3.............append the value (add the node at the end )
append(value){
    const newNode = new Node(value)
    if(!this.head){
        this.head = newNode
    }else{
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
    }
    this.size++
}

//4...............insert a node inbtw the two nodes
    
   insert(value,index){
         if(index<0 || index>this.size){
             return "invalid index"
         }
         if(index === 0){
             this.prepend(value)
         }else{
             let newNode = new Node(value)
             let prev = this.head
             for(let i=0; i<index-1; i++){
                 prev = prev.next
             }
             newNode.next = prev.next
             prev.next = newNode
             this.size++
         }
         
     }


 //5..............remove the node from begning (index = 0) and from middle or end (index>0)
    
     RemoveFrom(index){
         if(index<0 || index>= this.size){
             return null
         }
         let removedNode
         if(index === 0){
             removedNode = this.head
             this.head = this.head.next 
         }else{
             let prev = this.head
             for(let i=0; i<index-1; i++){
                 prev = prev.next
             }
             removedNode = prev.next
             prev.next = removedNode.next
         }
         this.size--
         return removedNode.value
         
     }



//6...............remove the value from beging or middle or end 
  
    Removevalue(value){
      if(!this.head){
          return "list is empty"
      }
      if(this.head.value === value){
          this.head = this.head.next
          this.size--
          return `${value} removed`
      }
      let prev = this.head
      while(prev.next && prev.next.value !== value){
          prev = prev.next
      }
      if(prev.next){
          prev.next = prev.next.next
          this.size--
          return`${value}removed`
      }
      return `${value} is not found in list`
  }
     

//7.............find the node for its given value(searching)
  //method:1 ===findnode(value) , return the node or null
  findNode(value){
    let curr = this.head
    while(curr){
        if(curr.value === value){
            return curr
        }
        curr = curr.next
    }
    return null
  }

  //method:2===findIndex(value), return the index or -1
  findIndex(value){
    let curr = this.head
    let index = 0
    while(curr){
        if(curr.value === value){
            return index
        }
        curr = curr.next
        index++
    }
    return -1
  }

//8............reverse the list
  reverse(){
     let prev = null
     let curr = this.head
     while(curr){
         let next = curr.next
         curr.next = prev
         prev = curr
         curr = next
     }
     this.head = prev
  }