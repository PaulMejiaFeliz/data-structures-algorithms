// Depth First Search

import {
  BinarySearchTree,
  Node,
} from '../../data-structures/trees/binary-search-tree';

export class BinarySearchTreeDFS<T> extends BinarySearchTree<T> {
  inOrderDepthFirstSearch(): T[] {
    return this._inOrderDepthFirstSearch(this.root);
  }

  private _inOrderDepthFirstSearch(node: Node<T> | null): T[] {
    if (!node) {
      return [];
    }

    return [
      ...this._inOrderDepthFirstSearch(node.left),
      node.value,
      ...this._inOrderDepthFirstSearch(node.right),
    ];
  }

  preOrderDepthFirstSearch(): T[] {
    return this._preOrderDepthFirstSearch(this.root);
  }

  private _preOrderDepthFirstSearch(node: Node<T> | null): T[] {
    if (!node) {
      return [];
    }

    return [
      node.value,
      ...this._preOrderDepthFirstSearch(node.left),
      ...this._preOrderDepthFirstSearch(node.right),
    ];
  }

  postOrderDepthFirstSearch(): T[] {
    return this._postOrderDepthFirstSearch(this.root);
  }

  private _postOrderDepthFirstSearch(node: Node<T> | null): T[] {
    if (!node) {
      return [];
    }

    return [
      ...this._postOrderDepthFirstSearch(node.left),
      ...this._postOrderDepthFirstSearch(node.right),
      node.value,
    ];
  }
}

//         9          \\
//    4        20     \\
//  1   6   15    170 \\

const tree = new BinarySearchTreeDFS();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// [1, 4, 6, 9, 15, 20, 170]
console.log('In Order DFS');
console.log(tree.inOrderDepthFirstSearch());

// [9, 4, 1, 6, 20, 15, 170]
console.log('Pre Order DFS');
console.log(tree.preOrderDepthFirstSearch());

// [1, 6, 4, 15, 170, 20, 9]
console.log('Post Order DFS');
console.log(tree.postOrderDepthFirstSearch());
