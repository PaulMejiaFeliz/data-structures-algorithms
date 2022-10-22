class WordDictionaryNode {
  letters: Map<string, WordDictionaryNode> = new Map();
  isEnd = false;
}

class WordDictionary {
  root: WordDictionaryNode;

  constructor() {
    this.root = new WordDictionaryNode();
  }

  addWord(word: string): void {
    let node = this.root;
    for (const letter of word) {
      if (!node.letters.has(letter)) {
        node.letters.set(letter, new WordDictionaryNode());
      }

      node = node.letters.get(letter) as WordDictionaryNode;
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    return _search(this.root, word);

    function _search(node: WordDictionaryNode, word: string) {
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letter === '.') {
          for (const n of node.letters.values()) {
            if (_search(n, word.slice(i + 1))) {
              return true;
            }
          }
        }

        if (!node.letters.has(letter)) {
          return false;
        }

        node = node.letters.get(letter) as WordDictionaryNode;
      }

      return node.isEnd;
    }
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();

console.log(wordDictionary.addWord('xgvk'));
console.log(wordDictionary.addWord('wykzbvwdsoyfowqicymzd'));
console.log(wordDictionary.addWord('xajbtjyjuwgoynjgu'));
console.log(wordDictionary.search('wykzbvwdso..owqicymzd'));
console.log(wordDictionary.search('..ha'));
console.log(wordDictionary.addWord('qsibzxaorktypkfg'));
console.log(wordDictionary.search('xgvk'));
console.log(wordDictionary.addWord('vbycuvrkbcq'));
console.log(wordDictionary.search('qsibz.aorkty.kfg'));
console.log(wordDictionary.addWord('sm'));
console.log(wordDictionary.addWord('fkqclfmvzpzpnbvz'));
console.log(wordDictionary.search('vb..uvrkbcq'));
console.log(wordDictionary.addWord('jpnneostllnnma'));
console.log(wordDictionary.addWord('zvmtfg'));
console.log(wordDictionary.search('.g..'));
console.log(wordDictionary.search('.kqclfmvzpzpnbvz'));
console.log(wordDictionary.addWord('lboe'));
