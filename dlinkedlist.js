'use strict';

//================== Doubly linked list ======================
// TODO: Implement a doubly linked list. The primary functions of the doubly linked list would be insert (First, Last, Before, After, and At), remove, and find. Write a function mainDLL, and within it create the doubly linked list DLL and add the following items to it: Aquaria, Caprica, Gemenon, Picon,Sagittaron.

class _Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1)
    insertFirst(item) {
        this.head = new _Node(item, this.head, null);
        if (!this.tail) {
            this.tail = this.head;
        }
        if (this.head.next) {
            this.head.next.prev = this.head;
        }
    }

    // O(n)
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new _Node(item, null, current);
            this.tail = current.next;
        }
    }

    // O(n)
    insertBefore(item, nextItem) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === nextItem) {
            this.insertFirst(item);
        }
        
        let tempNode = this.head;
        let previousNode = this.head;

        while ((tempNode !== null) && (tempNode.value !== nextItem)) {
            previousNode = tempNode;
            tempNode = tempNode.next;
        }
        if (tempNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = new _Node(item, tempNode, previousNode);
        tempNode.prev = previousNode.next;
    }

    // O(n)
    insertAfter(item, prevItem) {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        
        while ((current !== null) && (current.value !== prevItem)) {
            current = current.next;
        }
        if (current === null) {
            console.log('Item not found');
            return;
        }
        const tempNext = current.next;
        current.next = new _Node(item, tempNext, current);
        if (tempNext === null) {
            this.tail = current.next;
        } else {
            tempNext.prev = current.next;
        }
    }

    // O(n)
    insertAt(item, index) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        let previous = this.head;
        let tempIndex = 0;

        while((current !== null) && (tempIndex !== index)) {
            previous = current;
            current = current.next;
            tempIndex++;
        }
        if (current === null && tempIndex !== index) {
            console.log('Index not available');
            return;
        }
        previous.next = new _Node(item, current, previous);
        if (current === null) {
            this.tail = previous.next;
        } else {
            current.prev = previous.next;
        }
    }

    // O(n)
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = this.head;

        while ((current !== null) && (current.value !== item)) {
            previous = current;
            current = current.next;
        }
        if (current === null) {
            console.log(`Can't remove, ${item} not found`);
            return;
        }
        previous.next = current.next;
        if (current.next !== null) {
            current.next.prev = previous;
        } else {
            this.tail = previous;
        }
    }

    // O(n)
    find(item) {
        if (!this.head) {
            return null;
        }

        let tempNode = this.head;
        while (tempNode.value !== item) {
            if (tempNode.next === null) {
                return null;
            } else {
                tempNode = tempNode.next;
            }
        }
        return tempNode;
    }

}


//================ Reverse a DLL =======================
// TODO: Given the doubly linked list above, write a program that reverses the doubly linked list. How is this implementation different than reversing the singly linked list?

function reverseDList(list) {
    let left = list.head;
    let right = list.tail;
    while (left !== right || left.next === right) {
        const tempLeftV = left.value;
        const tempRightV = right.value;
        left.value = tempRightV;
        right.value = tempLeftV;
        left = left.next;
        right = right.prev;
    }
    return list;
}

module.exports = {
    DLinkedList,
    reverseDList
}