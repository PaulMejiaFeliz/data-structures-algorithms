class Node<T> {
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(public value: T) {}
}

class BinarySearchTree<T> {
  root: Node<T> | null = null;

  insert(value: T) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let node = this.root;

    while (true) {
      if (node.value <= value) {
        if (!node.right) {
          node.right = new Node(value);
          return;
        }

        node = node.right;
      } else {
        if (!node.left) {
          node.left = new Node(value);
          return;
        }

        node = node.left;
      }
    }
  }

  lookup(value: T) {
    let node = this.root;

    while (node) {
      if (node.value === value) {
        return node;
      }

      if (node.value < value) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return null;
  }

  remove(value: T) {
    if (!this.root) {
      return false;
    }

    let parentNode: Node<T> | null = null;
    let currentNode: Node<T> | null = this.root;
    let targetNode: Node<T> | null = null;

    while (currentNode) {
      if (currentNode.value === value) {
        targetNode = currentNode;
        break;
      }

      parentNode = currentNode;

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    if (!targetNode) {
      return false;
    }

    let replacementParentNode: Node<T> = targetNode;
    let replacementNode: Node<T> | null = null;

    if (!targetNode.right) {
      replacementNode = targetNode.left;
    } else {
      replacementNode = targetNode.right;

      while (replacementNode.left) {
        replacementParentNode = replacementNode;
        replacementNode = replacementNode.left;
      }
    }

    if (replacementNode) {
      replacementNode.left = targetNode.left;
      replacementNode.right = targetNode.right;
    }

    if (replacementParentNode.right === replacementNode) {
      replacementParentNode.right = null;
    } else {
      replacementParentNode.left = null;
    }

    if (!parentNode) {
      this.root = replacementNode;
      return true;
    }

    if (parentNode.left === targetNode) {
      parentNode.left = replacementNode;
    } else {
      parentNode.right = replacementNode;
    }

    return true;
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(16);
tree.insert(17);
tree.insert(14);
tree.insert(13);
tree.insert(140);
tree.insert(180);
tree.insert(175);
tree.insert(185);
tree.insert(130);
tree.insert(150);

console.log(JSON.stringify(traverse(tree.root), undefined, 2));

console.log(tree.lookup(9));
console.log(tree.lookup(1));
console.log(tree.lookup(20));
console.log(tree.lookup(25));
console.log(tree.lookup(0));

console.log(tree.remove(20));

console.log(JSON.stringify(traverse(tree.root), undefined, 2));

//         9          \\
//    4        20     \\
//  1   6   15    170 \\

function traverse<T>(node: Node<T> | null) {
  if (!node) {
    return null;
  }

  const tree: Node<T> = {
    value: node.value,
    left: traverse(node.left),
    right: traverse(node.right),
  };

  return tree;
}

export {};
