// Breadth First Search

import {
  BinarySearchTree,
  Node,
} from '../../data-structures/trees/binary-search-tree';

export class BinarySearchTreeBFS<T> extends BinarySearchTree<T> {
  breadthFirstSearch(): T[] {
    if (!this.root) {
      return [];
    }

    let currentNode = this.root;
    let list: T[] = [];
    let queue: Node<T>[] = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift() as Node<T>;
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }
}

//         9          \\
//    4        20     \\
//  1   6   15    170 \\

const tree = new BinarySearchTreeBFS();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// [9, 4, 20, 1, 6, 15, 170]

console.log(tree.breadthFirstSearch());
