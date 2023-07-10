import { log } from 'console';

function mergeSort(arr: number[], start: number, end: number) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr: number[], start: number, mid: number, end: number) {
  let l = start;
  let r = mid + 1;

  const temp: number[] = [];

  while (l <= mid && r <= end) {
    if (arr[l] < arr[r]) temp.push(arr[l++]);
    else temp.push(arr[r++]);
  }

  while (l <= mid) temp.push(arr[l++]);

  while (r <= end) temp.push(arr[r++]);

  for (let i = start; i <= end; i++) arr[i] = temp[i - start];
}

//*=========================================================

const arr = [5, 4, 1];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
