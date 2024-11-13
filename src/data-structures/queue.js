export class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(value) {
    const node = new Node(value)
    if (this.first == null) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.length
  }

  dequeue() {
    if (this.first == null) {
      return
    }
    const dequeuedNode = this.first
    if (this.length === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = dequeuedNode.next
      dequeuedNode.next = null
    }
    this.length--
    return dequeuedNode
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}