export function pivotSingleLinkedList(list, start, end) {
  const pivot = start;
  let iterator = start.next
  let swapPointer = start;

  while (iterator !== end.next) {
    list.traverse()
    if (pivot.value > iterator.value) {
      swapPointer = swapPointer.next
      list.swap(iterator, swapPointer)

      const temp = iterator
      iterator = swapPointer
      swapPointer = temp

      if (end === swapPointer) {
        end = iterator
        break;
      }

    }
    iterator = iterator.next
  }

  list.swap(start, swapPointer)

  return {pivot: start, newStart: swapPointer, newEnd: end}
}

export function singleLinkedListQuickSort(list, start, end) {
  list.traverse()
  console.log("start: " + start?.value)
  console.log("end: " + end?.value)


  if (start == null || end == null || end.next === start) return

  const {newStart, newEnd, pivot} = pivotSingleLinkedList(list, start, end)

  singleLinkedListQuickSort(list, newStart, list.findPrevNode(pivot))
  singleLinkedListQuickSort(list, pivot.next, newEnd)
}