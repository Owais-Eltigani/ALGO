import prompt from 'prompt-sync';

//=======================

let testCases = Number(prompt());

while (testCases--) {
  const size = Number(prompt());
  const cycle = Number(prompt());
  const str = String(prompt());

  let copy = str.split('');
  let conuter = 0;

  for (let i = 0; i < cycle; i++) {
    do {
      let temp = copy.shift();
      copy.push(temp);
      conuter++;
    } while (str.toString() != copy.join('').toString());
  }

  console.log(conuter - 1);
}
