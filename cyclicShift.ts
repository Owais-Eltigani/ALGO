const prompt = require('prompt-sync')();
//=======================

let testCases = Number(prompt('enter test cases: '));

while (testCases--) {
  const cycle = Number(prompt());
  const str = String(prompt());

  let copy = str.split('');
  let conuter = 0;

  for (let i = 0; i < cycle; i++) {
    do {
      let temp = copy.shift()!;
      copy.push(temp);
      conuter++;
    } while (str.toString() != copy.join('').toString());
  }

  console.log(conuter - 1);
}
