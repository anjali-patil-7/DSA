///1.......................................Implementation of separate chaining method 
class Hashtable {
  constructor(size) {
    this.table = new Array(size);
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length;
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {     //if not , create new empty hashtable
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {  // if they exits update it
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);   // create new pair 
  }
  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {                 
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
    }
  }
  has(key) {
    return this.get(key) !== undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] && this.table[i].length > 0) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const out = new Hashtable(5);
out.set("name", "Anjali");
out.set("age", 22);
out.set("color", "blue");
out.display();
out.remove("color");
out.display();
out.set("name", "yammy");
out.display();



///2........................normal way of hashtable implementation

class hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let char of key) {
      total += char.charCodeAt(0);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const out = new hashtable(10);
out.set("name", "anjali");
out.set("dept", "electronic");
out.display();
out.remove("dept");
out.display();



///3........................Linear probing
class hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  //hash function
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    //linear probing: move forware if occupied
    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + 1) % this.size;
    }
    this.table[index] = [key, value]; //insert/update
  }

  get(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;
    }
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        this.table[index] = null;
        return true;
      }
      index = (index + 1) % this.size;
    }
    return false;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined && this.table[i] !== null) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const out = new hashtable(5);
out.set("name", "anjali");
out.set("age", 22);
out.set("color", "bule");
out.display();
console.log(out.get("age"));
out.remove("color");
out.display();
out.set("name", "ilajna");
out.display();
console.log(out.get("name"));


//4.....................quadratic probing
class QuadraticHashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // Simple hash function
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let i = 0;

    // Quadratic probing: index + i^2
    while (
      this.table[(index + i * i) % this.size] &&
      this.table[(index + i * i) % this.size][0] !== key
    ) {
      i++;
    }
    this.table[(index + i * i) % this.size] = [key, value];
  }

  get(key) {
    let index = this.hash(key);
    let i = 0;

    while (this.table[(index + i * i) % this.size]) {
      if (this.table[(index + i * i) % this.size][0] === key) {
        return this.table[(index + i * i) % this.size][1];
      }
      i++;
    }
    return undefined;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i]);
      }
    }
  }
}


const qht = new QuadraticHashTable(7);
qht.set("name", "Anjali");
qht.set("age", 22);
qht.set("city", "Kochi");
qht.display();
console.log("Get age:", qht.get("age"));


//5...........................double hashing method
class DoubleHashingHashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // First hash
  hash1(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // Second hash (must not return 0)
  hash2(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return 1 + (total % (this.size - 1));
  }

  set(key, value) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    let i = 0;

    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + step) % this.size; // double hashing step
      i++;
      if (i > this.size) throw new Error("HashTable is full");
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    let i = 0;

    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + step) % this.size;
      i++;
      if (i > this.size) return undefined;
    }
    return undefined;
  }

  display() {
    console.log(this.table);
  }
}

// Test
let dbl = new DoubleHashingHashTable(7);
dbl.set("name", "Anjali");
dbl.set("age", 22);
dbl.set("color", "blue");
dbl.set("food", "pizza");
dbl.display();
console.log("Get color:", dbl.get("color"));
