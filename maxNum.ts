// const prompt = require('prompt-sync')();
import prompt from 'prompt-sync';

// ====================

let testCases: number = Number(prompt());

while (testCases--) {
  const size = Number(prompt());
  const bits = Number(prompt());

  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    const num: number = Number(prompt());

    arr.push(num);
  }
}
