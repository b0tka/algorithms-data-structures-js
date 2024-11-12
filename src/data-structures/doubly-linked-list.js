export class DoublyLinkedList {

  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    const node = new Node(val)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return node
  }

  pop() {
    if (this.head == null) {
      return
    }
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      poppedNode.prev = null
      this.tail.next = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (this.head == null) {
      return
    }
    const unshiftNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = unshiftNode.next
      this.head.prev = null
      unshiftNode.next = null
    }
    this.length--
    return unshiftNode
  }

  unshift(val) {
    if (this.head == null) {
      this.push(val)
      return this
    }
    const node = new Node(val)
    const prevHead = this.head
    this.head = node
    this.head.next = prevHead
    prevHead.prev = this.head
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return;
    }
    let iterator
    let counter = 0
    if (index < this.length / 2) {
      iterator = this.head
      while (counter !== index) {
        counter++
        iterator = iterator.next
      }
    } else {
      iterator = this.tail
      index = this.length - index - 1
      while (counter !== index) {
        counter++
        iterator = iterator.prev
      }
    }

    return iterator
  }

  set(index, val) {
    const node = this.get(index)
    if (node == null) {
      return false
    }
    node.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      this.shift(val)
    } else if (index === this.length) {
      this.push(val)
    } else {
      const newNode = new Node(val)
      const node = this.get(index)
      node.prev.next = newNode
      newNode.prev = node.prev
      node.prev = node
      newNode.next = node
      this.length++
    }
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return
    }
    if (index === 0) {
      return this.unshift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    const removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }

  reverse() {
    if (this.head == null) {
      return
    }
    let node = this.head
    let prev = null
    while (node != null) {
      const next = node.next
      if (prev == null) {
        this.tail = node
        node.next = null
        node.prev = next
      } else if (next == null) {
        this.head = node
        node.prev = null
        node.next = prev
      } else {
        node.next = prev
        node.prev = next
      }
      prev = node
      node = next
    }
  }

  traverse() {
    if (this.head == null) {
      return
    }

    let iterator = this.head

    let str = `${iterator.val}`
    iterator = iterator.next
    while (iterator != null) {
      str = str + ` -> ${iterator.val}`
      iterator = iterator.next
    }
    console.log(str)
  }

  traverseFromBehind() {
    if (this.head == null) {
      return
    }

    let iterator = this.tail

    let str = `${iterator.val}`
    iterator = iterator.prev
    while (iterator != null) {
      str = str + ` <- ${iterator.val}`
      iterator = iterator.prev
    }
    console.log(str)
  }

}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}