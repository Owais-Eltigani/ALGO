import prompt from 'prompt-sync';

function shift(arr: number[], num: number) {
  for (let i = 0; i < num; i++) {
    let temp = arr.pop()!;
    arr.unshift(temp);
  }
}

function shift_2(arr: number[], num: number) {
  for (let i = 0; i < num; i++) {
    const temp: number = arr.at(-1)!;
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
}

//=======================

let testCases = Number(prompt());

while (testCases--) {
  const size = Number(prompt());
  const rotations = Number(prompt());

  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    let num: number = Number(prompt());
    arr.push(num);
  }

  shift(arr, rotations);
  // shift_2(arr, rotations);

  console.log(arr);
}
