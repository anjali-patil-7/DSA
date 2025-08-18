///1.......................................Implementation
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
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
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