'use strict';

const LinkedList = require('../../data-structures-and-algorithms/linkedList.js');
const StacksAndQueues = require('../../data-structures-and-algorithms/stacks-and-queues.js');
const Tree = require('../../data-structures-and-algorithms/tree.js');

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.append('a');
list.insertBefore(2,'2before');
list.insertAfter(2, '2after');
list.kthFromEnd(3);
list.insert('insert');
list.includes('a');
list.includes(34);
list.print();

let stack = new StacksAndQueues.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop();
stack.peek();
stack.print();

let queue = new StacksAndQueues.Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
queue.peek();
queue.print();

let tree = new Tree.BinaryTree();
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.left = e;
tree.root = a;
tree.breadthFirst(tree);
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());

//not properly linked up, but everything entered. and timebox maxed I will work out the import for next weeks









