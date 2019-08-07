'use strict';

const { LinkedList, display, size, isEmpty, findPrevious } = require('./linkedlist');

// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head; // set pointer to the current node
    while (current !== null) { // iterate through list as long as current node is not null
        let newNode = current; // set variable for current node
        while (newNode.next !== null) { // iterate through list until the end
            if (newNode.next.value === current.value) { // conditional check to see if next node value is equal to current node value. When it is, it will set the pointer PAST the duplicate node
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next; // otherwise, move pointer down the list
            }
        }
        current = current.next; // set pointer to the next node
    }
} // O(n^2) time complexity because it iterates through the list twice (nested while loop). This program iterates through a list and checks for the current node's value for duplicates to the next node. If they are the same, it will SKIP past it and continue down the list


// Write an algorithm to reverse a LL. The time complexity of your algorithm should be linear (O(n)). All pointers should point backward.

function reverseList(ll) {
    let currNode = ll.head;
    let prevNode = null;

    while(currNode.next !== null) { // iterate through list until the end
        let currTemp = currNode; // set temp vars for curr & prev nodes
        let prevTemp = prevNode;

        prevNode = currNode; 
        currNode = currNode.next;
        currTemp.next = prevTemp;
    }
    currNode.next = prevNode;
    ll.head = currNode;
    return ll;
}



function main() {
    const SLL = new LinkedList;
    SLL.insertBefore('Iron Man');
    SLL.insertBefore('Spiderman');
    SLL.insertBefore('Hawkeye');
    SLL.insertBefore('Cpt. America');
    display(SLL);
}

main();
