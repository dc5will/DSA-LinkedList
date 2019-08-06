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

}

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
    // Add William to the list
    SLL.insertLast('William');
    return SLL; 
    // run "node linkedlist.js" in terminal to see node
}

console.log(main());