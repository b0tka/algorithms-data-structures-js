import {flatten} from "../array/flatten.js";

export function radixSort(arr) {
  for (let i = 0; i < mostDigits(arr); i++) {
    const buckets = Array.from({length: 10}, () => []);
    for (let val of arr) {
      buckets[getDigitAt(val, i)].push(val)
    }
    arr = flatten(buckets)
  }

  return arr
}

function getDigitAt(digit, x) {
  return (Math.floor(digit / Math.pow(10, x))) % 10
}

function digitCount(digit) {
  return Math.floor(Math.log10(digit)) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let val of arr) {
    max = Math.max(digitCount(val), max)
  }
  return max
}