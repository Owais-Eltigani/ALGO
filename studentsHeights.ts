// const prompt = require('prompt-sync')();
import prompt from 'prompt-sync';

// ====================

let testCases: number = Number(prompt());

while (testCases--) {
  const size = Number(prompt());

  const arr: number[] = [];
  const heights: number[] = new Array(size).fill(0);

  for (let i = 0; i < size; i++) {
    const num: number = Number(prompt());

    heights[num]++;

    arr.push(num);
  }

  heights.sort((a, b) => a - b);

  let diff = 1;

  for (let i = 0; i < size; i++) {
    if (heights[i] !== 0) {
      diff = heights[heights.length - 1] - heights[i];
      break;
    }
  }

  console.log(diff);
}
