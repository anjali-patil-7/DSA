//1******************************************************Implementations of bst
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        let newnode = new Node(value)
        if (this.isEmpty()) {
            this.root = newnode
        } else {
            this.insertnode(this.root, newnode)
        }
    }

    insertnode(root, newnode) {
        if (newnode.value === root.value) {
            // prevent duplicates
            return
        } else if (newnode.value < root.value) {
            if (root.left === null) {
                root.left = newnode
            } else {
                this.insertnode(root.left, newnode)
            }
        } else {
            if (root.right === null) {
                root.right = newnode
            } else {
                this.insertnode(root.right, newnode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        }
        if (root.value === value) {
            return true
        } else if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }
}

// Test
const out = new bst()
out.insert(10)
out.insert(5)
out.insert(15)
out.insert(10) // duplicate, ignored

console.log(out.search(out.root, 10)) // true
console.log(out.search(out.root, 5))  // true
console.log(out.search(out.root, 15)) // true
console.log(out.search(out.root, 20)) // false





/////**********************************************DEPTH FIRST SEARCH (DFS) */
 preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }

    //out to print
out.preorder(out.root)
out.inorder(out.root)
out.postorder(out.root)

////***********************************BREADTH FIRST SEARCH (BFS) */
  levelorder(){
        //use the optimised queue implementations
        const queue = [], res = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            res.push(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return res
    }
    //out
    out.levelorder()

    levelorder() {
    const queue = [], res = []
    if (!this.root) return res
    
    queue.push(this.root)

    while (queue.length) {
        let levelSize = queue.length   // number of nodes in this level
        let level = []                 // store current level values

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift()
            level.push(curr.value)

            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }

        res.push(level)  // push current level into result
    }

    return res
}


    //*************MAX AND MIN OF THE NODE */
      min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    //out
    console.log(out.min(out.root))
    console.log(out.max(out.root))

    ////******************Deletion of three case */
    delete(value) {
        this.root = this.deleteNode(this.root, value);  // ✅ fixed here
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // node found
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    //testing
    const out = new Bts();
console.log(out.isEmpty());  // true
out.insert(10);
out.insert(5);
out.insert(15);
out.insert(3);
out.insert(7);

console.log("Level order before delete:");
out.levelorder();

out.delete(3);

console.log("Level order after delete:");
out.levelorder();


/////*********************Closest value  */
   closestvalue(target){
        let curr = this.root
        let closest = this.root.value
        while(curr !== null){
            if(Math.abs(target - curr.value) < Math.abs(target - closest)){
                closest = curr.value
            }
            if(target < curr.value){
                curr = curr.left
            }else if (target > curr.value){
                curr = curr.right
            }else{
                return curr.value
            }
        }
        return closest
    }

    //testing
    console.log("cloest to 8 :",out.closestvalue(8))

    ///****************check isValid the BST */
       isValidBST(node = this.root,min= -Infinity,max = Infinity){
        if(node === null) return true
        if(node.value <= min || node.value >= max){
            return false
        }
        return this.isValidBST(node.left,min,node.value) && this.isValidBST(node.right,node.value,max)
    }


    ////***************depth of a node */
     depth(root,value,d=0){
        if(root === null)return -1
        if(root.value === value ) return d
        if(value < root.value) return this.depth(root.left, value, d+1)
        else return this.depth(root.right,value , d+1)
    }

    //testing
    console.log("depth of 7:", out.depth(out.root, 7))
    console.log("depth of 15:", out.depth(out.root, 15))
    console.log("depth of 100 (not present):", out.depth(out.root, 100))


    ///***********************isBalanced -check the tree is balanced or not*/
     isBalanced(root = this.root){
        if(root === null) return true
        let lh = this.height(root.left)
        let rh = this.height(root.right)
        if(Math.abs(lh-rh) > 1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
       //testing
       console.log("Is balanced?", out.isBalanced()); 

//************count nodes */
  countNode(root = this.root){
        if(root === null) return 0
        return 1 + this.countNode(root.left) + this.countNode(root.right)
    }
    //testing
    console.log("no of node",out.countNode())

//************count Leaves */
  countLeaves(root = this.root){
        if(root === null) return 0
        if(!root.left && !root.right) return 1
        return this.countLeaves(root.left) + this.countLeaves(root.right)
    }
    //testing
    console.log("no of node",out.countLeaves())