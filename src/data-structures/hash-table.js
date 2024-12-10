/**
 * Implemented by separate chaining
 */
export class HashTable {

  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    const PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    const hash = this._hash(key)
    if (this.keyMap[hash] == null) {
      this.keyMap[hash] = []
      this.keyMap[hash].push([key, value])
      return
    }
    for (let i = 0; i < this.keyMap[hash].length; i++) {
      if (this.keyMap[hash][i][0] === key) {
        this.keyMap[hash][i][1] = value
        return
      }
    }
    this.keyMap[hash].push([key, value])
  }

  get(key) {
    const hash = this._hash(key)
    const node = this.keyMap[hash]
    if (node == null) {
      return null
    }
    for (let i = 0; i < node.length; i++) {
      if (node[i][0] === key) {
        return node[i][1]
      }
    }
    return null
  }

}