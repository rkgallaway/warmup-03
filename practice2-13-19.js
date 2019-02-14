'use strict';

let LinkedList = require('./lib/linked-list.js');
let Stack = require('./lib/stack.js');
let Queue = require('./lib/queue.js');
let {BinaryTree, Node} = require('./lib/binary-tree.js');
let {Edge, Vertex, Graph} = require('./lib/graph.js');



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
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    results.push(node.value);
  };
  _walk(tree.root);
  return results;
}

function inOrder(tree){
  let results = [];
  let _walk = (node) =>{
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

  while(nodeQueue.length){
    let current = nodeQueue.shift();
    results.push(current.value);
    if(current.left) nodeQueue.push(current.left);
    if(current.right) nodeQueue.push(current.right);
  }
  return results;
}

function bfs(graph, startNode){
  const queue = [];
  const visitedNodes = new Set();

  queue.push(startNode);
  visitedNodes.add(startNode);

  while (queue.length){
    const currentNode = queue.shift();
    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors){
      const neighborNode = neighbor.vertex;

      if(visitedNodes.has(neighborNode)){
        continue;
      } else{
        visitedNodes.add(neighborNode);
      }
      queue.push(neighborNode);
    }
  }
  console.log(visitedNodes);
  return;
}

/// timebox met... pasting in the rest so I can see results
function dfs(graph, startNode) {

  const stack = [];
  const visitedNodes = new Set();

  stack.push(startNode);
  visitedNodes.add(startNode);

  while (stack.length) {

    const currentNode = stack.pop();

    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors) {

      const neighborNode = neighbor.vertex;

      if (visitedNodes.has(neighborNode)) {
        continue;
      } else {
        visitedNodes.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  console.log(visitedNodes);

  return;
}

////////////////// populate graph test////////////
const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);


dfs(graph, ten);
bfs(graph, ten);

// to see results, comment  in/out populate graph test

// or comment in/out below 

// let one1 = new Node(1);
// let two1 = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;

// const testTree = new BinaryTree(one);

// console.log(preOrder(testTree));
// console.log(inOrder(testTree));
// console.log(postOrder(testTree));
// console.log(levelOrder(testTree));


// traverse(list);
// clear(stack);
// qTraverse(q);