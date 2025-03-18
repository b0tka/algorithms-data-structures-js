import {MinBinaryHeap} from "../data-structures/min-binary-heap.js";

export function dijkstra(graph, startKey, endKey) {
  const queue = new MinBinaryHeap("dist")
  const distances = {}
  const paths = {}
  queue.insert({key: startKey, dist: 0, path: [startKey]})

  while (queue.values.length !== 0) {
    const node = queue.remove()
    if (distances[node.key] != null && distances[node.key] < node.dist) {
      continue
    }
    distances[node.key] = node.dist
    if (paths[node.key] == null) paths[node.key] = []
    paths[node.key].push(node.path)
    for (const neighborKey of Object.keys(graph[node.key])) {
      const path = []
      path.push(...node.path)
      path.push(neighborKey)
      queue.insert({key: neighborKey, dist: graph[node.key][neighborKey] + node.dist, path: path});
    }
  }
  return {distance: distances[endKey], paths: paths[endKey]}
}