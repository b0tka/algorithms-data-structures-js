export class SingleLinkedList {

  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    const node = new Node(null, val)
    this.length++
    if (this.head == null) {
      this.head = node
      this.tail = node
      return
    }
    this.tail.next = node
    this.tail = node
  }

  pop() {
    const node = this.findPrevNode(this.tail)
    this.tail = node
    this.tail.next = null
    this.length--
    return node.next
  }

  shift() {
    if (this.head == null) {
      return null
    }
    const node = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return node
  }

  unshift(value) {
    this.head = new Node(this.head, value)
    if (this.head == null) {
      this.tail = this.head
    }
    this.length++
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let iterator = this.head
    let counter = 0
    while (counter !== index) {
      iterator = iterator.next
      counter++
    }
    return iterator
  }

  set(index, value) {
    const node = this.get(index)
    if (node == null) {
      return false
    }
    node.value = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(value)
      return true
    }
    const prev = this.get(index - 1)
    if (prev == null) {
      this.unshift(value)
      return true
    }
    const node = new Node(null, value)
    this.length++
    const current = prev.next
    prev.next = node
    node.next = current
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    const prev = this.get(index - 1)
    const toRemove = prev.next
    prev.next = toRemove.next
    this.length--
    return toRemove
  }

  reverse() {
    if (this.head == null) {
      return
    }
    let node = this.head
    let prev = null
    while (node != null) {
      let next = node.next
      if (prev == null) {
        this.tail = node
        node.next = null
      } else if (node.next == null) {
        this.head = node
        node.next = prev
      } else {
        node.next = prev
      }
      prev = node
      node = next
    }
  }

  swap(node1, node2) {
    let node1Prev = this.findPrevNode(node1)
    let node2Prev = this.findPrevNode(node2)

    if (node1Prev != null) {
      node1Prev.next = node2
    } else {
      this.head = node2
    }

    if (node2Prev != null) {
      node2Prev.next = node1
    } else {
      this.head = node1
    }

    const temp = node1.next
    node1.next = node2.next
    node2.next = temp
  }

  findPrevNode(node) {
    let iterator = this.head

    while (iterator != null) {
      if (iterator.next === node) {
        return iterator
      }
      iterator = iterator.next
    }
    return null
  }

  traverse() {
    if (this.head == null) {
      return;
    }

    let iterator = this.head

    let str = `${iterator.value}`;
    iterator = iterator.next
    while (iterator != null) {
      str = str + ` -> ${iterator.value}`
      iterator = iterator.next
    }
    console.log(str)
  }

}

class Node {
  constructor(next, value) {
    this.next = next
    this.value = value
  }
}

