import {dijkstra} from "../dijkstra.js";
import {deepEqual, equal} from "node:assert";

describe.only("dijkstra", () => {

  it("use case 1", () => {
    const graph = {
      A: {B: 1, C: 2},
      B: {D: 1},
      C: {D: 1},
      D: {}
    }
    const result = dijkstra(graph, "A", "D")

    equal(result.distance, 2)
    deepEqual(
      result.paths,
      [
        ["A", "B", "D"]
      ]
    )
  });

  it("use case 2", () => {
    const graph = {
      A: {B: 1},
      B: {}
    }
    const result = dijkstra(graph, "A", "B")

    equal(result.distance, 1)
    deepEqual(
      result.paths,
      [
        ["A", "B"]
      ]
    )
  });

  it("use case 3", () => {
    const graph = {
      A: {B: 1, D: 2},
      B: {A: 1, C: 4, E: 2},
      C: {B: 4, D: 7, E: 2, F: 1},
      D: {A: 2, C: 7, F: 4},
      E: {B: 2, C: 2},
      F: {C: 1, D: 4}
    }
    const result = dijkstra(graph, "A", "F")

    equal(result.distance, 6)
    deepEqual(
      result.paths,
      [
        ["A", "D", "F"],
        ["A", "B", "C", "F"],
        ["A", "B", "E", "C", "F"]
      ]
    )
  });

  it("use case 4", () => {
    const graph = {
      A: {B: 2, C: 2},
      B: {A: 1, D: 1},
      C: {A: 2, D: 1},
      D: {B: 1, C: 1}
    }
    const result = dijkstra(graph, "A", "D")

    equal(result.distance, 3)
    deepEqual(
      result.paths,
      [
        ["A", "B", "D"],
        ["A", "C", "D"]
      ]
    )
  });

});