const prompt = require('prompt-sync')();
// import prompt from 'prompt-sync';

class Points {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// ====================

let pts: number = Number(prompt());

const arr: Points[] = [];

for (let i = 0; i < pts; i++) {
  const x: number = Number(prompt());
  const y: number = Number(prompt());
  const point = new Points(x, y);

  arr.push(point);
}

const size = Number(prompt());

const heights: number[] = new Array(size).fill(0);

for (let i = 0; i < size; i++) {
  const num: number = Number(prompt());

  heights[num]++;

  arr.push(num);
}
