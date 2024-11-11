export function flatten(arr) {
  const result = []
  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...flatten(el))
    } else {
      result.push(el)
    }
  }
  return result
}