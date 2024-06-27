function isPrime(n: number) {
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) return false;
  }
  return true;
}

function factorial(n: number) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function countString(string: string, c: string) {
  let count = 0;
  for (const s of string) {
    if (s === c) count++;
  }
  return count;
}

function subString(string: string, subString: string) {
  if (subString.length > string.length) return false;
  const subStrLen = subString.length;
  console.log(string.slice(0, subStrLen));

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (string[i] !== subString[j]) break;
      else {
        if (j === subString.length - 1) {
          console.log(j);
        }
      }
    }
  }
  return false;
}
console.log(subString('hello there world', 'world'));

function findMax(num: number[]) {
  let maxNum = -Infinity;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNum) maxNum = num[i];
  }
  return maxNum;
}

function findTheFirstMissing(num: number) {
  for (let i = 0; i < String(num).length; i++) {
    if (i + 1 === num[i]) continue;
    return i + 1;
  }
}

function findSet(num1: number[], num2: number[]) {
  const set: number[] = [];

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === num2[j]) {
        if (set.length === 0) set.push(num1[i]);
        else {
          for (let k = 0; k < set.length; k++) {
            if (num1[i] !== set[k]) set.push(num1[i]);
          }
        }
      }
    }
  }
  return set;
}

function remvoeDuplicate(str: string) {
  if (!str) return '';
  let pointer = str[0];
}

// console.log(findSet([1, 2, 3, 4], [2, 3, 2, 4]))

// Problem 9:
// Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
// Rules:
// If you want a number that is a multiple of one of the 7 letters they use, its value is the sum of that value of that letter how many ever times it appears. For example: III = 3 because we repeated three I’s and I is 1.
// Letters I, X, and C can be repeated a maximum of three times but not four or more. For example: XX = 20 because X = 10, so 10 + 10 = 20 = XX
// Letters L, V, D, cannot be repeated at all - they must be unique for that number.
// When you write a letter with a smaller value before a letter with a bigger value, you must subtract the smaller value from the bigger value. For example, IV is 4 because I = 1, V = 5, and since the letter I came before V, we must subtract: IV = 5 - 1 = 4.
// When you write a letter with a smaller value after a letter with a bigger value, you must add the smaller value to the bigger value. For example, LX is 60 because L = 50, X = 10, and since X is after L, we must add: LX = 50 + 10 = 60
// The letter I can be subtracted from V and X only and the letter X can only be subtracted from L, M and C.

// Eg:
// Input - MDXLII
// Output: 1542
// Input - DCLXV
// Output: 665
// Input - XC
// Output: 90

// Problem 10:
// Recursively remove all adjacent continuing duplicates.
// Eg:
// Input - ‘abccbccba’
// Hint: ‘abccbccba’ => ab(cc)b(cc)ba => a(bbb)a => (aa) => ‘’
// Output: ‘’ //Empty string

// console.log(findTheFirstMissing([1, 2, 3, 4, 5, 6, 9]))
// console.log(findMax([-1, -20, 34, 100, 120, 1, 3, 4, 10]))

// console.log(subString('Hello World', 'World'))

// console.log(countString('Hello World', 'l'))
