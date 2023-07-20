const prompt = require('prompt-sync')();
// import prompt from 'prompt-sync';
//=======================

let testCases = Number(prompt());

while (testCases--) {
  const size = Number(prompt());

  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt());
  }

  arr.sort((a, b) => a - b);

  let record = (arr[0] & arr[1]) ^ (arr[0] | arr[1]);

  for (let i = 1; i < size - 1; i++) {
    let temp = (arr[i] & arr[i + 1]) ^ (arr[i] | arr[i + 1]);
    record = record < temp ? temp : record;
  }

  console.log(record);
}
