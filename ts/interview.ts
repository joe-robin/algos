/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function isPrime(n: number) {
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) return false;
  }
  return true;
}
/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function factorial(n: number) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 */
function countString(string: string, c: string) {
  let count = 0;
  for (const s of string) {
    if (s === c) count++;
  }
  return count;
}

/**
 * Time Complexity O(n.m)
 * Space Complexity O(m)
 */
function subString(str: string, subStr: string) {
  if (subString.length > str.length) return false;

  const subStrLen = subString.length;

  for (let i = 0; i <= str.length - subStrLen; i++) {
    if (str.slice(i, subStrLen + i) === subStr) {
      return true;
    }
  }

  return false;
}
/**
 * Time Complexity O(n)
 */
function subStringRegEx(str: string, target: string) {
  const regExp = new RegExp(target);
  return Boolean(str.match(regExp));
}

subStringRegEx('hello world world', 'world');

/**
 * Worst case is that the largest number is at the last postion where n is the lenght of the input num array
 * therefor the time complexity is O(n)
 * space complexity is O(1)
 */
function findMax(num: number[]) {
  let maxNum = -Infinity;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNum) maxNum = num[i];
  }
  return maxNum;
}

/**
 * Worst case it the missing number is at the last postion whre n is the lenght of the number string
 * therefor the time complexity is O(n)
 * space complexity is O(1)
 */
function findTheFirstMissing(num: number) {
  for (let i = 0; i < String(num).length; i++) {
    if (i + 1 === num[i]) continue;
    return i + 1;
  }
}

/**
 * n is the lenght of the smallest array given
 * m is the length of the largest array given
 *
 * the main loop will run for n times i.e the time complexity is O(n)
 * the first inclues will run for m times inside the main loop times,
 * in the worst case the time coplexity is O(n.m)
 * the second inclues will run for n times inside the main,
 * in the worst case the time complexity is O(n.n)
 *
 * by adding them up the time coplexity is O(n.(n+m))
 * i.e O(n^2 + ( n+m ))
 */
function intersectionArr(num1: number[], num2: number[]) {
  const [small, big] = num1.length > num2.length ? [num2, num1] : [num1, num2];
  const unionArr: number[] = [];

  const includes = (arr: number[], num: number) => {
    for (let i of arr) {
      if (i === num) return true;
    }
    return false;
  };

  for (let i of small) {
    if (!includes(big, i)) continue;
    if (includes(unionArr, i)) continue;
    unionArr.push(i);
  }

  return unionArr;

  /** old implementation */
  // const set: number[] = [];

  // for (let i = 0; i < num1.length; i++) {
  //   for (let j = 0; j < num2.length; j++) {
  //     if (num1[i] === num2[j]) {
  //       if (set.length === 0) set.push(num1[i]);
  //       else {
  //         for (let k = 0; k < set.length; k++) {
  //           if (num1[i] !== set[k]) set.push(num1[i]);
  //         }
  //       }
  //     }
  //   }
  // }
  // return set;
}

// console.log(intersectionArr([1, 2, 3, 4, 69, 4, 2, 21], [3, 2, 6, 6, 345, 69]));

function remvoeDuplicate(str: string) {
  if (!str) return '';
  let pointer = str[0];
}

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

/*

You have an array of strings representing income and expenses from a company's balance sheet. 
The strings contain positive and negative dollar amounts, for example, "-$100.43" or "$23.01".
The strings may not always contain a dollar sign in front, and may not always have a decimal.
Positive numbers represent income, whereas negative numbers represent expenses.
Elements in the array that are not strings, or which can not be interpreted as valid dollar amounts, 
should be discarded. Expenses of zero (-0) should not be counted.

Your job is to determine how many expenses are in the array, and their sum.
This sum should be the absolute value of the expenses. To communicate this data, you should write
a function that accepts the balance sheet array and returns a string formatted like so:

"expenseCount: 100, expenseSum: 4000"

Examples
  reportExpenses(["$1.23", "-5", "-$4.23"]) === "expense Count: 2, expenseSum: 9.23"
  reportExpenses(["$1.23", "$5.02", "-$0.00"]) === "expense Count: 0, expense Sum: 0"
*/

const testCases: [string[], string][] = [
  // Example Test Cases
  [['$1.23', '-$5', '$4.23'], 'expenseCount: 2, expenseSum: 9.23'],
  [['$1.23', '$5.02', '-$0.00'], 'expenseCount: 0, expenseSum: 0'],

  // Additional Test Cases
  [['$1.23', '-$4.56', '7.89', '-2.34'], 'expenseCount: 2, expenseSum: 6.90'],
  [
    ['-$100.00', '200.50', '-$50.25', 'Invalid', '$0.00', '-$0.00'],
    'expenseCount: 2, expenseSum: 150.25',
  ],
  [
    ['100', '200', '-300', '-400', 'invalid', '-0', '500'],
    'expenseCount: 2, expenseSum: 700.00',
  ],
  [
    ['invalid', ' ', '-0', '0.00', '$0.00', '-0.00'],
    'expenseCount: 0, expenseSum: 0',
  ],
  [['-$1.00', '-$2.00', '-$3.00'], 'expenseCount: 3, expenseSum: 6.00'],
  [
    ['$10.00', '-$5.00', '5', '-$15.00', 'invalid', '100'],
    'expenseCount: 2, expenseSum: 20.00',
  ],
  [
    ['-0.50', '-$0.75', '$2.25', '3.50', '-$1.25'],
    'expenseCount: 3, expenseSum: 2.50',
  ],
  [[], 'expenseCount: 0, expenseSum: 0'],
  [
    ['-$10.10', '-$20.20', '-$30.30', '-$40.40'],
    'expenseCount: 4, expenseSum: 101.00',
  ],
  [
    ['-$5', '-$10.50', '5.00', 'text', '$6.00', '-10.00'],
    'expenseCount: 3, expenseSum: 25.50',
  ],
];

function reportExpenses(expenses: string[]): string {
  const exp = {
    expenseCount: 0,
    expenseSum: 0,
  };

  for (let item of expenses) {
    if (!item.startsWith('-')) continue;
    item = item.slice(1);

    if (item.startsWith('$')) item = item.slice(1);
    if (!parseInt(item)) continue;

    exp.expenseCount++;
    exp.expenseSum += parseInt(item);
  }
  return Object.entries(exp)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
}

// for (let i of testCases) {
//   const receivedOutput = reportExpenses(i[0]);
//   const expecetedOutput = i[1];
//   if (receivedOutput === receivedOutput) {
//     console.log(`Passed: ${i[0]}\n`);
//   } else {
//     console.log(
//       `Failed: ${i[0]} \nExpected: ${expecetedOutput}\nReceived: ${receivedOutput}\n`
//     );
//   }
// }
