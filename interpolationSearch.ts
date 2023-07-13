const interpoltaionSearch = (arr: number[], key: number) => {
  let low = 0;
  let high = arr.length - 1;

  while (key >= low && key && low <= high) {
    let index =
      low +
      Math.floor(((high - low) * (key - arr[low])) / (arr[high] - arr[low]));

    if (arr[index] === key) return index;
    else if (arr[low] > key) high = index - 1;
    else low = index + 1;
  }

  return -1;
};

//===========================================

const arr = [5, 7, 12, 25];

console.log(interpoltaionSearch(arr, 25));
