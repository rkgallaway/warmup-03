'use strict';

let LinkedList = require('./lib/linked-list.js');
let Stack = require('./lib/stack.js');
let Queue = require('./lib/queue.js');
let {BinaryTree,Node} = require('./lib/binary-tree.js');



let list = new LinkedList();
list.append(2);
list.append(4);
list.append(6);
list.append(8);
list.append(10);

function traverse(linkedlist){
  let current = linkedlist.head;
  while(current.next){
    console.log(current.value);
    current = current.next;
  }
  console.log(current.value);
}

let stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

function clear (aStack){
  while(aStack.peek()){
    console.log(stack.pop());
  }
}

let q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.enqueue(10);

function qTraverse(queue){
  let item = null;
  while(item = queue.dequeue()){
    console.log(item);
  }
}



function preOrder(tree){
  let results = [];
  let _walk = (node) => {
    results.push(node.value);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);
  return results;
}

function postOrder(tree){
  let results = [];
  let _walk = (node) => {
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    results.push(node.value);
  };
  _walk(tree.root);
  return results;
}

function inOrder(tree){
  let results = [];
  let _walk = (node) => {
    if(node.left) _walk(node.left);
    results.push(node.value);
    if(node.right) _walk(node.right);
  };
  _walk(tree.root);
  return results;
}

function levelOrder(tree){
  let results = [];
  let nodeQueue = [];

  nodeQueue.push(tree.root);

  while(nodeQueue.length);{
    let current = nodeQueue.shift();
    results.push(current.value);
    results.push(current.value);
    if(current.left) nodeQueue.push(current.left);
    if(current.right) nodeQueue.push(current.right);
  }
  return results;
}

let one = new Node(1);

//timebox running out.  pasting in some stuff and seeing how it works when run.  2nd time playing with John's solution code
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const testTree = new BinaryTree(one);

console.log(preOrder(testTree));
console.log(inOrder(testTree));
console.log(postOrder(testTree));
console.log(levelOrder(testTree));


traverse(list);
clear(stack);
qTraverse(q);
