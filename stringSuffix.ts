// const prompt = require('prompt-sync')();
import prompt from 'prompt-sync';

// ====================

const str = String(prompt());
const k = Number(prompt());

const arr: string[] = [];

for (let i = 0; i < str.length; i++) {
  const substr = str.slice(i, str.length);

  arr.push(substr);
}

arr.sort();

for (let i = 0; i < str.length; i++) {
  console.log(arr[i]);
}

console.log(arr[k - 1]);
