// NOTE: some areas of code are commented out to prevent errors!
// you can uncomment these when you work on the solution

// count needs to be updated in the while loop body
// to prevent our while loop running for ever
function howMuchBamboo(numberOfBamboo) {
  let totalBamboo = '';
  let count = 0;

  while (count < numberOfBamboo) {
    totalBamboo = totalBamboo + 'bamboo ';
  }

  return totalBamboo;
}

// you'll need to do something with angelicas chocolate drops here
// in the while loop body
// or she won't be very happy
function angelicaWantsDoubleChocolateDrops(n) {
  let chocolateDrops = 1;
  let count = 1;

  while (count < n) {
    count++;
  }

  return chocolateDrops;
}

// the condition has been ommited here
// you'll need to write a condition using `max` and `multipleOf5`
// so that our function works
function highestMultipleOf5Before(max) {
  let multipleOf5 = 0;

  // while () {
  //   multipleOf5 = multipleOf5 + 5;
  // }

  return multipleOf5;
}

// update this factorial function taking one argument which returns it's factorial result
// eg factorial 4 would be 24 (1 x 2 x 3 x 4) = 24
// the parameters of the for loop need to be added
function factorial(x) {
  let sum = 1;

  // for ()  {
  //   sum *= y;
  // }

  return sum;
}

// fix this fibonacci sequence generator that when given an argument n
// returns the nth number in the fibonacci sequence
// eg fibonacci given n = 1 should return 1, as 1 is the 1st number
// eg fibonacci given n = 2 should return 1, as 1 is the 2nd number
// eg fibonacci given n = 6 should return 8, as 8 is the 6th number
// here is the first 7 elements 1, 1, 2, 3, 5, 8, 13
// correct the body of the for loop (the 0's need changing)
function fibonacci(number) {

    let previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = 0;
        previous_first = 0;
        previous_second = 0;
    }
    return next;
};

export {
  howMuchBamboo,
  angelicaWantsDoubleChocolateDrops,
  highestMultipleOf5Before,
  factorial,
  fibonacci,
};
