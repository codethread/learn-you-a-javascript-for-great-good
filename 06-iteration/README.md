# Iteration

## In this section, you will learn:

- while loops
* do-while loops
* for loops

*(if the you feel confident in the bullets listed above, just run `npm test` and get the test(s) to pass, if you get stuck, refer back to the `walkthrough` for guidance)*

## Walk-through

Loops, or iteration, is an incredibly powerful concept in programming. It allows us not only to save time on writing the same processes repeatedly with consistently changing parameters, but to also set up a pattern of behaviour, where are inputs may not be known until our application runs.

There are two types of loops, `for` loops and `while` loops. The `while` loop has a slight variation called a `do-while` loop - all of these you'll see below.

### while loop

Here is a while loop:
```javascript

let x = 0;

while (x < 5) {
  x = x + 1;
}

x // gives us 5
```

The code inside of the `()` parenthesise should be familiar from the last section; it's a conditional.

This condition is used such that '`while` this condition is true, the code between `{ .. }` will be run'

You will nearly always see some variable defined with a `let` being used in our condition, and an operation inside the `while` loop to alter that variable. If this were not the case, and say `x` was never changed, what do you think would happen?

If we were to step through this process as it ran, printing each variable as we went, we would see the following

```javascript
// first run
x = 0
result = 0

enter while loop
while loop condition: 0 < 5 = true
condition met, executing code inside the loop:
  x = 0 + 1 = 1
  finished loop

re-entering while loop
while loop condition: 1 < 5 = true
condition met, executing code inside the loop:
  x = 1 + 1 = 2
  finished loop

re-entering while loop
while loop condition: 2 < 5 = true
condition met, executing code inside the loop:
  x = 2 + 1 = 3
  finished loop

re-entering while loop
while loop condition: 3 < 5 = true
condition met, executing code inside the loop:
  x = 3 + 1 = 4
  finished loop

re-entering while loop
while loop condition: 4 < 5 = true
condition met, executing code inside the loop:
  x = 4 + 1 = 5
  finished loop

re-entering while loop
while loop condition: 5 < 5 = FALSE
condition NOT MET, exiting loop

x = 5
```

### do-while loop
Here is a do-while loop:
```javascript

let x = 0;

do {
  x = x + 1;
} while (x > 1000)

x // gives us 1
```

A do-while loop is similar to a while loop, except the body of the `do` statement inside the `{ ... }` is executed first, before the condition is checked.

This is why even though `x > 1000` is clearly false, we still see `x` increase from 0 to 1.

### for loop
Here is a for loop:
```javascript
let result = 0;

for (let x = 0; x < 5; x++) {
   result = result + 3;
}

result = 15
```

For loops are a little more concise than the while loop as they allow us to declare our iterator `x`, define our condition `x < 5` and define how we want to alter our iterator `x++` (x++ is a shorthand for `x = x + 1`).
