const prompt = require('prompt-sync')();
// import prompt from 'prompt-sync';

function type1(nums: number[], num: number) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > num) {
      sum++;
    }
  }

  console.log(sum);
}
function type0(nums: number[], num: number) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= num) {
      sum++;
    }
  }

  console.log(sum);
}

// ====================

const size = Number(prompt());

const arr: number[] = [];

for (let i = 0; i < size; i++) {
  const num: number = Number(prompt());

  arr.push(num);
}

const q = Number(prompt());

for (let i = 0; i < q; i++) {
  for (let j = 0; j < 2; j++) {
    const type: number = Number(prompt());
    const num: number = Number(prompt());

    if (type === 0) {
      type0(arr, num);
    } else {
      type1(arr, num);
    }
  }
}
