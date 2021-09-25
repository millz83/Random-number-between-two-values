const a = Number(prompt('What is the lower limit'));
const b = Number(prompt('What is the upper limit'));

const random = Math.floor((b-a+1)*Math.random()) + a;

alert(`A random number between ${a} and ${b} is ${random}.`)