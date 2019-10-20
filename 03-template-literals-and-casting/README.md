# Template Literals and Casting

## In this section, you will learn:

- The basics of `casting` in JavaScript
- What happens when we try to mix different types of data
- How to create strings with variables inside them

*(if the you feel confident in the bullets listed above, just run `npm test` and get the test(s) to pass, if you get stuck, refer back to the `walkthrough` for guidance)*

## Walk-through

To combine strings and variables, use the `+` operator, just like adding numbers, e.g:

```javascript
const age = '11';
const a = 'I am ' + age + ' years old';
// => 'I am 11 years old'
```

Note the difference in variables:
```javascript
const age = 4;
const ageAsString = '4';
```

`age` is storing the number 4.
`ageAsString` is storing a string of '4'.

These are not the same thing, as you will see when you successfully complete the last test.

## Explanation
JavaScript is a dynamically types language, this means we don't specify the type of a variable. Instead JavaScript infers this as runtime, but sometimes, JavaScript has to make certain decisions to reconcile operations between different types.

For example:
1 + 1 = 2
We all appreciate this, but what about:
'me ' + ' you' ?
JavaScript 'adds' strings by combining them into a new string containing the characters from both strings:
'me you'

what about 'me' - 'you'?
The result of this is `NaN`, it is JavaScript's way of saying 'Not a number'

...WIP
