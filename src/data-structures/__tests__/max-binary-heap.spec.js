import {MaxBinaryHeap} from "../max-binary-heap.js";
import {deepEqual, equal} from "node:assert";

describe("max-binary-heap", () => {

  it("insert nominal case", () => {
    const heap = new MaxBinaryHeap()
    heap.insert(2)
    heap.insert(3)
    heap.insert(5)

    deepEqual(heap.values, [5, 2, 3]);
  });

  it("remove nominal case", () => {
    const heap = new MaxBinaryHeap()
    heap.insert(2)
    heap.insert(3)
    heap.insert(5)
    const result = heap.remove()

    equal(result, 5)
    deepEqual(heap.values, [3, 2]);
  });

});