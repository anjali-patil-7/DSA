class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
  dfs(node, prefix, result) {
    if (node.isEndOfWord) {
      result.push(prefix);
    }
    for (let char in node.children) {
      this.dfs(node.children[char], prefix + char, result);
    }
  }
  getAllWords() {
    let result = [];
    this.dfs(this.root, "", result);
    return result;
  }
}
let trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("bat");

console.log(trie.search("cat")); // true
console.log(trie.search("cab")); // false
console.log(trie.startsWith("ca")); // true
console.log(trie.startsWith("ba")); // true
console.log(trie.startsWith("da"));
console.log(trie.getAllWords());
