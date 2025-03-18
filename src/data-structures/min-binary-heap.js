export class MinBinaryHeap {

  constructor(comparableProperty) {
    this.values = []
    this.comparableProperty = comparableProperty
  }

  _get(value) {
    if (value != null) return value[this.comparableProperty]
  }

  insert(value) {
    this.values.push(value)
    let idx = this.values.length - 1
    while (true) {
      const parentIdx = this.getParentIndex(idx)
      if (parentIdx < 0 || this._get(value) > this._get(this.values[parentIdx])) {
        break
      }
      this.swap(idx, parentIdx)
      idx = parentIdx
    }
  }

  remove() {
    if (this.values.length === 0) {
      return null
    }
    this.swap(0, this.values.length - 1)
    const removed = this.values.pop()
    let idx = 0
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(idx)
      const rightChildIndex = this.getRightChildIndex(idx)
      const leftChild = this._get(this.values[leftChildIndex])
      const rightChild = this._get(this.values[rightChildIndex])
      const current = this._get(this.values[idx])

      if (leftChild != null && leftChild < current && (rightChild == null || leftChild < rightChild)) {
        this.swap(leftChildIndex, idx)
        idx = leftChildIndex
      } else if (rightChild != null && rightChild < current) {
        this.swap(rightChildIndex, idx)
        idx = rightChildIndex
      } else {
        break
      }
    }
    return removed
  }

  getParentIndex(i) {
    return Math.ceil(i / 2) - 1
  }

  getLeftChildIndex(i) {
    return (i * 2) + 1
  }

  getRightChildIndex(i) {
    return (i * 2) + 2
  }

  swap(idx1, idx2) {
    const temp = this.values[idx1]
    this.values[idx1] = this.values[idx2]
    this.values[idx2] = temp
  }
}