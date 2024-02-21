/*

params => input[], target
derived => input lenght

(1) declare pointer = -1, start = 1, end = input length

(4) if start <= end contine else step (8)

(2) pointer = (end - start divided by 2) +1 // This is written from a 1 base array perspecive 

(3) check if input[pointer] === target then  Return the pointer

(5) if target > input[pointer] start = pointer + 1  then step (2)

(6) if target < input[pointer] end = pointer - 1 then step (2)

(8) Not found return pointer

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

function binarySearch(array: number[], target: number): number {
  let pointer: number = -1
  let start: number = 0
  let end: number = array.length

  while (start <= end) {
    pointer = Math.trunc(end - start / 2)
    if (target === array[pointer]) return pointer
    if (target > array[pointer]) start = pointer + 1
    end = pointer - 1
  }

  return -1
}

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

for (const testCase of testCases) {
  const result = recursionSearch(testCase.input, testCase.target)
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
