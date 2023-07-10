const decimal_Binary = (decimal: number, result: string = ''): string => {
  if (decimal === 0) return result;

  result = (decimal % 2) + result;

  return decimal_Binary(Math.floor(decimal / 2), result);
};

console.log(decimal_Binary(2));
