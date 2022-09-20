import { BinarySearchTree, traverse } from './binary-search-tree';

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
