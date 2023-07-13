const bubbleSort = (arr: number[], size: number) => {
  for (let i of arr) {
    for (let j = 0; j < size - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
};

//===========================================

const nums = [5, 3, 120, 5];

bubbleSort(nums, nums.length);

console.log(nums);
