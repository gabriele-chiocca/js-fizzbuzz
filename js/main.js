const myFizz = 'Fizz';

const myBuzz = 'Buzz';

const myTogether = myBuzz + myFizz;
console.log(myTogether);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(myTogether);
  } else if (i % 3 === 0) {
    console.log(myFizz);
  } else if (i % 5 === 0) {
    console.log(myBuzz);
  } else !(i % 5 === 0 || i % 3 === 0);
  console.log(i);
}
