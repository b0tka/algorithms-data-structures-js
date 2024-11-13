export class Stack {
  constructor() {
    this.first = null
    this.length = 0
  }

  push(value) {
    const node = new Node(value)
    if (this.first == null) {
      this.first = node
    } else {
      node.next = this.first
      this.first = node
    }
    return ++this.length
  }

  pop() {
    if (this.first == null) {
      return
    }
    const removedNode = this.first
    if (this.length === 1) {
      this.first = null
    } else {
      this.first = removedNode.next
      removedNode.next = null
    }
    this.length--
    return removedNode
  }

}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}