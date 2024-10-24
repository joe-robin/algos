const swap = (arr: number[], n1Idx: number, n2Idx: number) => {
  let temp: number = 0;
  temp = arr[n1Idx];
  arr[n1Idx] = arr[n2Idx];
  arr[n2Idx] = temp;
};

const _swap = (arr: number[], n1Idx: number, n2Idx: number) => {
  arr[n1Idx] = arr[n1Idx] + arr[n2Idx];

  arr[n2Idx] = arr[n1Idx] - arr[n2Idx];
  arr[n1Idx] = arr[n1Idx] - arr[n2Idx];
};

function quickSort(numArr: number[], l: number, h: number) {
  const partition = (numArr: number[], pivotIdx: number): number => {
    let i = l + 1;
    let j = h;
    const pivot = numArr[pivotIdx];

    while (i < j) {
      do {
        i++;
      } while (numArr[i] < pivot);
      do {
        j--;
      } while (numArr[j] > pivot);

      if (i < j) {
        swap(numArr, i, j);
      }
    }
    swap(numArr, j, pivotIdx);
    return j;
  };

  const pivotIdx = partition(numArr, l);

  if (pivotIdx > h) {
    quickSort(numArr, l, pivotIdx);
    quickSort(numArr, pivotIdx + 1, h);
  }
}
const arr = [2, 9, 3, 6, 1, 96];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
