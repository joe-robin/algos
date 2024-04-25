/*

params => input[], target
derived => input lenght

(1) declare pointer = -1, start = 1, end = input length

(2) if start <= end contine else step (7)

(3) pointer = start +  (end - start divided by 2) +1 continue // This is written from a 1 base array perspecive 

(4) check if input[pointer] === target then  Return the pointer

(5) if target > input[pointer] start = pointer + 1  then step (3)

(6) if target < input[pointer] end = pointer - 1 then step (3)

(7) Not found return pointer

*/

import { TestCase } from './types'

const testCases: TestCase[] = [
  // Empty Array
  { input: [], target: 5, expected: -1 },
  // Single Element Array
  { input: [10], target: 10, expected: 0 },
  // Target at Midpoint
  { input: [1, 3, 5, 7, 9], target: 5, expected: 2 },
  // Target at Start
  { input: [5, 7, 9, 12, 15], target: 5, expected: 0 },
  // Target at End
  { input: [2, 4, 6, 8, 10], target: 10, expected: 4 },
  // Target Not Present
  { input: [3, 6, 9, 14, 18], target: 11, expected: -1 },
  // Negative Target
  { input: [-5, -2, 0, 3, 7], target: -8, expected: -1 },
  // Duplicate Values (First Occurrence)
  { input: [2, 3, 4, 5, 7], target: 2, expected: 0 },
  // Duplicate Values (Last Occurrence)
  { input: [3, 5, 5, 8, 10], target: 5, expected: 2 },
  // Odd Array Length
  { input: [1, 4, 7, 10, 13, 16], target: 10, expected: 3 },
]

// This worked even thought its wrong because if the target is at the first half of the array this will work like a linear search and search
// every element from the end to the start
// input: [ 2, 3, 4, 5, 7 ], target: 2
// Math.trunc(end - start / 2):pointer 5
// Math.trunc(end - start / 2):pointer 4
// Math.trunc(end - start / 2):pointer 3
// Math.trunc(end - start / 2):pointer 2
// Math.trunc(end - start / 2):pointer 1
// Math.trunc(end - start / 2):pointer 0
// result:  0

// input: [ 2, 3, 4, 5, 7 ], target: 7
// Math.trunc(end - start / 2):pointer 5
// Math.trunc(end - start / 2):pointer 4
// result:  4

// This is basicaly a reverse linear search
function _binarySearch(array: number[], target: number): number {
  console.log(array, target)
  let pointer: number = -1
  let start: number = 0
  let end: number = array.length // Adding -1 here results in a infinite loop

  while (start <= end) {
    pointer = Math.trunc(end - start / 2)
    if (target === array[pointer]) return pointer
    if (target > array[pointer]) start = pointer + 1
    end = pointer - 1
  }

  return -1
}
// Bug
function recursionSearch(array: number[], target: number) {
  let pointer: number = -1
  let start: number = 0
  let end: number = array.length

  pointer = Math.trunc(end - start / 2)
  if (target === array[pointer]) return pointer
  if (target > array[pointer])
    return recursionSearch(array.slice(start + 1, end + 1), target)
  else return recursionSearch(array.slice(start, end), target)
}
// Bug
function __search(nums: number[], target: number): number {
  let infinityCheck = 0
  let l = 0
  let r = nums.length
  let m = -1

  while (l <= r) {
    m = Math.floor((r - l) / 2)

    if (target === nums[m]) return m

    if (target > nums[m]) {
      l = m + 1
    }

    if (target < nums[m]) {
      r = m - 1
    }
    if (infinityCheck > 20) break
    infinityCheck++
  }

  return -1
}

// Bug
function __binarySearch(array: number[], target) {
  const l = array.length
  let start = 0
  let end = l - 1
  let m = -1

  let counter = 0

  while (start <= end) {
    m = Math.trunc((end - start) / 2)
    if (array[m] === target) return m
    else if (target > array[m]) start = m + 1
    else if (target < array[m]) end = m - 1
    else {
      return -1
    }
  }

  return -1
}

// Correct
function binarySearch(input: number[], t: number): number {
  let l = 0
  let r = input.length - 1
  let m = -1

  while (l <= r) {
    m = l + Math.trunc((r - l) / 2)

    if (input[m] === t) return m
    if (t > input[m]) l = m + 1
    else if (t < input[m]) r = m - 1
    else return -1
  }

  return -1
}

// const result = binarySearch([1, 3, 5, 7, 9], 5)
// console.log('result: ', result)

function binarySearch__(arr, x) {
  let l = 0
  let r = arr.length - 1
  let mid
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2) // Missed this every step of the way

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) r = mid - 1
    // Else the element can only be present
    // in right subarray
    else l = mid + 1
  }

  // We reach here when element is not
  // present in array
  return -1
}

// if (false)
for (const testCase of testCases) {
  const result = binarySearch(testCase.input, testCase.target)
  if (result !== testCase.expected) {
    console.error(
      `Test case failed: Input: ${testCase.input}, Target: ${testCase.target}, Expected: ${testCase.expected}, Result: ${result}`
    )
  } else {
    console.log(
      `Test case passed: Input: ${testCase.input}, Target: ${testCase.target}, Result: ${result}`
    )
  }
}
