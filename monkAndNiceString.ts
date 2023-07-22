// const prompt = require('prompt-sync')();
import prompt from 'prompt-sync';
function sortBase(str1: string) {
  let count1 = 0;
  for (let i = 0; i < str1.length; i++) {
    count1 += str1[i].charCodeAt(0) - 91;
  }
  return count1;
}

function print(arr: number[], pos: number) {
  let count = 0;
  for (let i = pos - 1; i >= 0; i--) {
    if (arr[i] < arr[pos]) {
      count++;
    }
  }
  console.log(count);
}

//=======================

let testCases = Number(prompt());

while (testCases--) {
  const size = Number(prompt());

  const arr: string[] = [];
  const record: number[] = [];

  let count = 0;

  for (let i = 0; i < size; i++) {
    arr[i] = String(prompt());
    record.push(sortBase(arr[i]));
  }

  //   arr.sort((str1: string, str2: string) => {
  //     let count1 = 0;
  //     for (let i = 0; i < str1.length; i++) {
  //       count1 += str1[i].charCodeAt(0) - 91;
  //     }

  //     let count2 = 0;
  //     for (let i = 0; i < str2.length; i++) {
  //       count2 += str2[i].charCodeAt(0) - 91;
  //     }

  //     if (count1 < count2) {
  //       return -1;
  //     }
  //     if (count1 > count2) {
  //       return 1;
  //     }

  //     return 0;
  //   });

  arr.forEach((_, index) => {
    print(record, index);
  });
}
