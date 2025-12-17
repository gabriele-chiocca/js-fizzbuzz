const myFizz = 'Fizz';

const myBuzz = 'Buzz';

const myTogether = myBuzz + myFizz;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(myTogether);
  } else if (i % 3 === 0) {
    console.log(myFizz);
  } else if (i % 5 === 0) {
    console.log(myBuzz);
  } else {
    console.log(i);
  }
}
