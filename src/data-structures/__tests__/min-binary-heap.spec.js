import {deepEqual} from "node:assert";
import {MinBinaryHeap} from "../min-binary-heap.js";

describe("min-binary-heap", () => {

  it("insert use case 1", () => {
    const heap = new MinBinaryHeap("distance")
    heap.insert({key: "A", distance: 4})
    heap.insert({key: "B", distance: 5})
    heap.insert({key: "C", distance: 6})
    heap.insert({key: "D", distance: 7})

    deepEqual(heap.values, [
      {key: "A", distance: 4},
      {key: "B", distance: 5},
      {key: "C", distance: 6},
      {key: "D", distance: 7}
    ])
  })

  it("insert use case 2", () => {
    const heap = new MinBinaryHeap("distance")
    heap.insert({key: "B", distance: 5})
    heap.insert({key: "A", distance: 4})
    heap.insert({key: "D", distance: 7})
    heap.insert({key: "C", distance: 6})

    deepEqual(heap.values, [
      {key: "A", distance: 4},
      {key: "B", distance: 5},
      {key: "D", distance: 7},
      {key: "C", distance: 6}
    ])
  })

  it("insert use case 3", () => {
    const heap = new MinBinaryHeap(distance)
    heap.insert({key: "A", distance: 4})
    heap.insert({key: "B", distance: 5})
    heap.insert({key: "C", distance: 6})
    heap.insert({key: "D", distance: 7})

    deepEqual(heap.values, [
      {key: "A", distance: 4},
      {key: "B", distance: 5},
      {key: "C", distance: 6},
      {key: "D", distance: 7}
    ])
  })

  it("insert use case 4", () => {
    const heap = new MinBinaryHeap("distance")
    heap.insert({key: "H", distance: 7})
    heap.insert({key: "A", distance: 1})
    heap.insert({key: "C", distance: 2})
    heap.insert({key: "D", distance: 6})
    heap.insert({key: "E", distance: 10})
    heap.insert({key: "F", distance: 3})
    heap.insert({key: "G", distance: 4})
    heap.insert({key: "B", distance: 5})
    heap.insert({key: "I", distance: 12})
    heap.insert({key: "J", distance: 11})
    heap.insert({key: "K", distance: 20})
    heap.insert({key: "L", distance: 15})
    heap.insert({key: "M", distance: 14})
    heap.insert({key: "N", distance: 9})

    deepEqual(heap.values, [
      {key: "A", distance: 1},
      {key: "B", distance: 5},
      {key: "C", distance: 2},
      {key: "D", distance: 6},
      {key: "E", distance: 10},
      {key: "F", distance: 3},
      {key: "G", distance: 4},
      {key: "H", distance: 7},
      {key: "I", distance: 12},
      {key: "J", distance: 11},
      {key: "K", distance: 20},
      {key: "L", distance: 15},
      {key: "M", distance: 14},
      {key: "N", distance: 9}
    ])
  })

  it("delete use case 1", () => {
    const heap = new MinBinaryHeap("distance")
    heap.insert({key: "A", distance: 4})
    heap.insert({key: "B", distance: 5})
    heap.insert({key: "C", distance: 6})
    heap.insert({key: "D", distance: 7})

    heap.remove()
    deepEqual(heap.values, [
      {key: "B", distance: 5},
      {key: "D", distance: 7},
      {key: "C", distance: 6}
    ])

    heap.remove()
    deepEqual(heap.values, [
      {key: "C", distance: 6},
      {key: "D", distance: 7}
    ])

    heap.remove()
    deepEqual(heap.values, [
      {key: "D", distance: 7}
    ])

    heap.remove()
    deepEqual(heap.values, [])
  })

  it("delete use case 2", () => {
    const heap = new MinBinaryHeap("distance")
    heap.insert({key: "B", distance: 5})
    heap.insert({key: "A", distance: 4})
    heap.insert({key: "D", distance: 7})
    heap.insert({key: "C", distance: 6})

    heap.remove()
    deepEqual(heap.values, [
      {key: "B", distance: 5},
      {key: "C", distance: 6},
      {key: "D", distance: 7}
    ])

    heap.remove()
    deepEqual(heap.values, [
      {key: "C", distance: 6},
      {key: "D", distance: 7}
    ])

    heap.remove()
    deepEqual(heap.values, [
      {key: "D", distance: 7}
    ])

    heap.remove()
    deepEqual(heap.values, [])
  })

})