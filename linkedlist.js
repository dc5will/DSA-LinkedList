// 1. Create a linked list class

class _Node { // Private class that should not be accessible by anyone else other than the linked list class
    constructor(value, next) {
        this.value = value; // value holds the data
        this.next = next; // pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // 1st node. Starting with empty list so value is null
    }

    // Inserting at beginning = create new node item, point the head to that new node. O(1) operation
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    // Inserting at the end of LL = create a new node item, check to see if the list is empty. If it is, then insert the new item as the only item in the list. Start at the beginning of the list and traverse through the list until you reach the end of the list.
    // Set the end node's next pointer to the new node. The new node's next pointer is null (indicating that the new node now is the last node on the list). O(n) operation
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // start at the head
        let currNode = this.head;
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // check for the item
        while (currNode.value !== item) {
            // return null if it's the end of the list and the item is not on the list
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // found it
        return currNode;
    }

    // best-case = 0(1), average & worst-case are O(n)
    remove(item) {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            console.log('this.head.value ===', this.head.value)
            console.log('item ===', item)
            return;
        }
        // Start at the head
        let currNode = this.head;
        // keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // save the prev node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key. O(n) operation because it has to iterate through the LL to match target value.
    insertBefore(newNode, value) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null; // if LL is empty return null;
        }
        while (currNode.value !== value) { // iterate through LL to check if current node matches target value
            if (currNode.next === null) { // when it reaches end of the list return message
                return new Error('Not Found');
            } else { // otherwise, move the pointer
                prevNode = currNode; 
                currNode = currNode.next;
            }
        }
        prevNode.next = new _Node(newNode, currNode); // inserting new node AFTER prev node
        return console.log(`Successfully added ${newNode}`)
    }

    // implement a function called insertAfter() in the class that inserts a new node after a node containg the key
    insertAfter(newNode, value) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== value) {
            if (currNode.next === null) {
                return new Error('Not Found');
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(newNode, currNode); // inserting new node AFTER current node
        console.log('checking insertAfter =', currNode.next) // 'Hotdog', 'Helo'
        return console.log(`Successfully added ${newNode}`)
    }

    // implement a function called insertAt() that inserts an item at a specific position in the LL
    insertAt(newNode, position) {
        let currNode = this.head;
        let prevNode = this.head;
        if (!this.head) {
            return null;
        }
        let counter = 0;
        while (counter < position) {
            // console.log('position =', position)
            // console.log('counter =', counter)
            if (currNode.next === null) {
                return new Error('Linked list is not long enough');
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
            counter++;
        }
        prevNode.next = new _Node(newNode, currNode);
        console.log('insertAt =', prevNode.next)
        return console.log(`Successfully added ${newNode} at ${position}`);
    }
}

// Supplemental functions for a linked list

// create a free function that displays the linked list
function display(ll) { 
    let node = ll.head;
    while (node !== null) { // iterate through ll as long as node isnt node
        console.log('node === ', node)
        node = node.next;
    }
}

// create a function that returns the size of the linked list
function size(ll) {
    let node = ll.head;
    let count = 0; // variable to count how many nodes are in LL
    while (node !== null) {
        count++; // increment count after each pass
        node = node.next; // move ptr to next node 
    }
    console.log('size ===', count)
    return count;
}

let SLL = new LinkedList();
SLL.insertLast('Pikachu');
SLL.insertLast('Charmander');
SLL.insertLast('Bulbasaur');
SLL.insertLast('Squirtle');
display(SLL); // returned each node in correct order
size(SLL); // output: 



// Write a function and use the LL class above to create a LL with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
function main() {
    // create new LL named SLL
    let SLL = new LinkedList();
    // insert Apollo, Boomer, Helo, Husker, Starbuck into LL
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    // Add William to the SLL
    SLL.insertLast('William');
    // remove squirrel from list
    SLL.remove('squirrel'); // returned "Item not found" in console. Working as intended.
    // Add Athena before Boomer using my insertBefore() function
    SLL.insertBefore('Athena', 'Boomer'); // function works
    SLL.insertAfter('Hotdog', 'Helo'); // function works
    SLL.insertAt('Kat', 3); // TODO: basic functionaility works, but need to check for edge cases
    SLL.remove('Apollo'); // TODO: revisit. Removing the incorrect nodes
    return SLL; 
    // run "node linkedlist.js" in terminal
}

console.log(main());