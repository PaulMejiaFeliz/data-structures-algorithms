export class Node<T> {
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(public value: T) {}
}

export class BinarySearchTree<T> {
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
      if (replacementParentNode === targetNode) {
        if (replacementParentNode.right === replacementNode) {
          replacementNode.left = targetNode.left;
        }
      } else {
        if (replacementParentNode.right === replacementNode) {
          replacementParentNode.right = null;
        } else {
          replacementParentNode.left = replacementNode.right;
        }

        replacementNode.left = targetNode.left;
        replacementNode.right = targetNode.right;
      }
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

export function traverse<T>(node: Node<T> | null) {
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
