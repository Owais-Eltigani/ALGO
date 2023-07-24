// const prompt = require('prompt-sync')();
import prompt from 'prompt-sync';

// ====================

const k = Number(prompt());
// const k = 3;

const arr: string[] = [];
// const arr: string[] = ['213456789', '167890', '123456789'];
const record: number[] = [];

for (let i = 0; i < k; i++) {
  const num = String(prompt());

  arr.push(num);
}

let end = 0;

for (let i = 0; i < 2; i++) {
  // === === === ===

  for (let j = 0; j < k; j++) {
    let temp = arr[j];

    temp = temp
      .split('')
      .reverse()
      .slice(end, end + 5)
      .reverse()
      .join('');

    record[j] = Number(temp);
  }

  end += 5;

  for (let j = 0; j < k - 1; j++)
    for (let l = 0; l < k - 1; l++) {
      if (record[l] > record[l + 1]) {
        [arr[l], arr[l + 1]] = [arr[l + 1], arr[l]];
        [record[l], record[l + 1]] = [record[l + 1], record[l]];
      }
    }

  for (let j = 0; j < k; j++) process.stdout.write(arr[j] + ' ');
  console.log();
}
