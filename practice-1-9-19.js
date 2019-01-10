'use strict';

const LinkedList = require('../../data-structures-and-algorithms/linkedList/linked-lists.js');
const StacksAndQueues = require('../../data-structures-and-algorithms/stacksAndQueues/stacks-and-queues.js');

let list = new LinkedList();
list.add('Ryan');
list.add('Amy');
list.print();

let stack = new StacksAndQueues.Stack();
stack.push('1')
stack.push('2');
stack.push('3');
stack.push('4');
stack.pop();
stack.peek();
console.log(stack);

let queue = new StacksAndQueues.Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);

//with this being easier (in theory), I spent a bit more time on daily challenge.
// I don't have the files hooked up properly, but moving along
