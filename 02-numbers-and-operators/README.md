# Numbers and Operators

## In this section, you will learn:

- How Numbers can declared
- Some basic operators such as:
  - `+`: add
  - `-`: subtract
  - `*`: multiply
  - `/`: divide
  - `(` , `)`: brackets to group operations
  - `=`: assignment

Please see this [wiki entry](https://github.com/AHDesigns/learn-you-a-javascript-for-great-good/wiki/var,-let-&-const) on the use of `const` before continuing with this exercise.

## Walk-through

In `index.js` you'll see there are several `const`'s defined at the top:

```javascript
const daysInWorkWeek = 5;
const daysInWeekend = 2;
const monthsInYear = 12;
const daysInYear = 365;
```

*Ignore that `daysInYear` is no strictly true as it doesn't account for leap years.*

Currently `daysInWeek` is failing our test because it has been `assigned` a value of 0 using the `=` assignment operator.

Fix this by defining `daysInWeek` in terms of `daysInWorkWeek` and `daysInWeekend` by using the `addition` operator `+` to combine them. (It's OK to peak at the `solution.js` to see what we mean here).

Likewise, we can define `daysInMonth` in terms of `daysInYear` and `monthsInYear` using the `division` `/` operator. **Note** though you can't see the result of this, you may be aware that 365 divided by 12 will yield a decimal number.

In programming terms, decimal numbers like `20.33` are known as a **float** and whole numbers like `3` or `10` are known as **integers**. In JavaScript we don't have to worry about this distinction as all numbers simply have a type of `number`.

Finally, to correctly calculate the number of weekend days in a whole year, define `weekendDaysInYear` in terms of the number of days in a year, multiplied by the fraction of weekend days to days in the week. To help clarify the mathematical operations going on here, you can use parenthesis `(` & `)` to group mathematical operations.

**If all this sounds a bit mathsy or wordy** just look at the `solution.js` file to get a sense for how numbers can be used in JavaScript.
