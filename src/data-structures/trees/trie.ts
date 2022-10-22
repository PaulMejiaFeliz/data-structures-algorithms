class TrieNode {
  isEnd = false;
  letters: Map<string, TrieNode> = new Map();
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let letter of word) {
      if (!node.letters.has(letter)) {
        node.letters.set(letter, new TrieNode());
      }

      node = node.letters.get(letter) as TrieNode;
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let letter of word) {
      if (!node.letters.has(letter)) {
        return false;
      }

      node = node.letters.get(letter) as TrieNode;
    }

    return node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let letter of prefix) {
      if (!node.letters.has(letter)) {
        return false;
      }

      node = node.letters.get(letter) as TrieNode;
    }

    return true;
  }
}
