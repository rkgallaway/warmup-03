'use strict';

const LinkedList = require('../../data-structures-and-algorithms/linkedList.js');

let list = list.head;
list.add('Ryan');
list.add('Amy');

let current = list.head;
while(current.next){
  console.log(current.value);
  current = current.next;
}
console.log(current.value);