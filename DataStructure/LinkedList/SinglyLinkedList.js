class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let pre = this.head;
        while (current.next) {
            pre = current;
            current = current.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let removedHead = this.head;
        this.head = removedHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let count = 0;
        let current = this.head;
        while (idx !== count) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) !!this.unshift(val)
        let newNode = new Node(val);
        let prevNode = this.get(idx - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prevNode = this.get(idx - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        // let prev = null;
        // let current = this.head;
        // let next = null;

        // while (current) {
        //     next = current.next;
        //     current.next = prev;
        //     prev = current;
        //     current = next;
        // }

        // this.head = prev;
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
// list.push(40);
// list.push(50);
// list.push(60);
// console.log('Head', list.head);
// console.log('Poped', list.pop());
// console.log('Head', list.head);
// console.log('Poped', list.pop());
// console.log('Head', list.head);
// console.log('Poped', list.pop());
// console.log('Head', list);
// list.unshift(40);
// list.push(20);
// list.push(30);
// console.log('Head', list);
// console.log(list.get(0));
list.print();
list.reverse();
list.print();