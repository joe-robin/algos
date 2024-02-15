// Linear Search

import { TestCase } from './types'

// Test Cases

const testCases: TestCase[] = [
  // Empty Array
  { input: [], target: 5, expected: -1 },
  // Single Element Array
  { input: [10], target: 10, expected: 0 },
  // Target at First Index
  { input: [5, 2, 8, 1], target: 5, expected: 0 },
  // Target at Last Index
  { input: [3, 7, 12, 9], target: 9, expected: 3 },
  // Target in Middle
  { input: [4, 1, 6, 2, 7], target: 6, expected: 2 },
  // Target Not Present
  { input: [11, 14, 2, 8], target: 13, expected: -1 },
  // Negative Target
  { input: [-2, 0, 5, 1], target: -3, expected: -1 },
  // Duplicate Values
  { input: [3, 2, 3, 1], target: 3, expected: 0 },
  // Large Array (assuming you have a function to generate one)
  //   { input: generateRandomArray(10000), target: getRandomElement(generateRandomArray(10000)), expected: -1 },
  // Sorted Array
  { input: [1, 3, 5, 7, 9], target: 4, expected: -1 },
]

function linearSearch(input: number[], target: number) {
  // Empty Array
  if (input.length === 0) return -1

  for (let i = 0; i < input.length; i++) {
    if (target === input[i]) return i
  }

  // Not Found
  return -1
}

const result = testCases.map(item => {
  const searchResult = linearSearch(item.input, item.target)
  return searchResult === item.expected
})

export {}
