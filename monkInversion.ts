const prompt = require('prompt-sync')();

const checkInversion = (
  arr: number[][],
  pos: number[],
  size: number
): number => {
  let count = 0;

  for (let i = pos[0]; i < size; i++) {
    for (let j = pos[1]; j < size; j++) {
      if (arr[pos[0]][pos[1]] > arr[i][j]) {
        count++;
      }
    }
  }

  return count;
};

//=======================

let testCases = Number(prompt());

while (testCases--) {
  const size = Number(prompt());

  let counter = 0;

  const arr: number[][] = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      arr[i][j] = Number(prompt());
    }
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      counter += checkInversion(arr, [i, j], size);
    }
  }

  // define 2d array and take the user input to fill the array

  console.log(counter);
}
