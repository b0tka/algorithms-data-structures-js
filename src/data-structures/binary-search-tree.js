import {Queue} from "./queue.js";

export class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let iterator = this.root
    const newNode = new Node(value)
    if (iterator == null) {
      this.root = newNode
      return
    }
    while (iterator != null) {
      if (iterator.value === value) {
        return
      }
      if (iterator.value < value) {
        if (iterator.right == null) {
          iterator.right = newNode
          break
        } else {
          iterator = iterator.right
        }
      } else {
        if (iterator.left == null) {
          iterator.left = newNode
          break
        } else {
          iterator = iterator.left
        }
      }
    }
  }

  find(value) {
    let iterator = this.root
    if (iterator == null) {
      return false
    }
    while (iterator != null) {
      if (iterator.value === value) {
        return true
      }
      if (iterator.value < value) {
        if (iterator.right == null) {
          return false
        } else {
          iterator = iterator.right
        }
      } else {
        if (iterator.left == null) {
          return false
        } else {
          iterator = iterator.left
        }
      }
    }
    return false
  }

  BFS() {
    const q = new Queue()
    const result = []
    q.enqueue(this.root)

    while (q.length !== 0) {
      const node = q.dequeue()
      result.push(node.value)
      if (node.left != null) {
        q.enqueue(node.left)
      }
      if (node.right != null) {
        q.enqueue(node.right)
      }
    }
    return result
  }

  DFSPreOrder() {
    function traverse(node, result) {
      if (node == null) {
        return result
      }
      result.push(node.value)
      if (node.left != null) {
        traverse(node.left, result)
      }
      if (node.right != null) {
        traverse(node.right, result)
      }
    }
    return traverse(this.root, [])
  }

  DFSPostOrder() {
    function traverse(node, result) {
      if (node == null) {
        return result
      }
      if (node.left != null) {
        traverse(node.left, result)
      }
      if (node.right != null) {
        traverse(node.right, result)
      }
      result.push(node.value)
      return result
    }
    return traverse(this.root, [])
  }

  DFSInOrder() {
    function traverse(node, result) {
      if (node == null) {
        return result
      }
      if (node.left != null) {
        traverse(node.left, result)
      }
      result.push(node.value)
      if (node.right != null) {
        traverse(node.right, result)
      }
      return result
    }
    return traverse(this.root, [])
  }

}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}