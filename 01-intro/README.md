# Introduction

## In this section, you will learn:

- Changing a single JavaScript `variable`
- Getting your first test to pass!

*(if the you feel confident in the bullets listed above, just run `npm test` and get the test(s) to pass, if you get stuck, refer back to the `walkthrough` for guidance)*

## Walk-through

### Getting the tests to pass

Open a terminal app, or if you are using [visual studio code](https://code.visualstudio.com/) you can press the back-tick key (`) while holding the CONTROL key to open up an integrated terminal.

```sh
$ npm test
# this will prompt you with some options, type 'a' to run all the tests
```

You will see jest scan for files, and then get an output, something like:

```sh
 FAIL  01-intro/index.spec.js (5.682s)
  ✕ returns hello world! (19ms)

  ● returns hello world!

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello World!"
    Received: ""

    Difference:

      Comparing two different types of values. Expected string but received null.

      2 |
      3 | it('returns hello world!', () => {
    > 4 |   expect(helloWorld).toBe('Hello World!');
        |                      ^
      5 | });
      6 |

      at Object.toBe (01-intro/index.spec.js:4:22)
```

**If you are interested to learn more about Jest check out [what is jest](../00-setting-up-for-javascript/what-is-jest.md)** but it is not needed to continue with these exercises unless explicitly stated.

The area of interest here is:
```sh
expect(received).toBe(expected) // Object.is equality

  Expected: "Hello World!"
  Received: ""
```

First, let's get this test to pass.
Go into [index.js](./index.js), where we can see:
```js
var helloWorld = '';
```

As you may have guessed, `var` is how we declare a 'variable' in JavaScript. In this case it has an 'Identifier' (posh word for the name, or label of the variable) of 'helloWorld'. We can use this Identifier throughout our program to reference whatever was stored inside of it. The semi-colon `;` is how we indicate to JavaScript that the line of code has finished (these can be omitted if you use line breaks, but it is best practice to keep them in).

The 'value' of our variable is currently **an empty string**. Strings are any collection of printable characters in code. Some examples would be:
```js
var string = 'hello there';
var string1 = ' we can have            lots of       spaces ';
var string2 = 'numbers are fine too 123 but do not expect to do any maths in here';
var string3 = 'symbols like #!*& are all fine to but watch out';
var string4 = "quotes and single quotes are both valid";
var string5 = "some prefer double quotes as you'll can use apostrophies more easily";
var string6 = 'if you don\'t use double quotes you need to \'escape\' apostraphies';
var string7 = 'and yes, if you want to print a backslash: \\ you need to escape it';
```

See if you can correct the value of the `helloWorld` variable to pass the test.
*As soon as you save a change to the file, go back to your terminal and you should see the test rerun (as jest is watching for file changes)*

Hopefully you should with an ouput, something like:
```sh
 PASS  01-intro/index.spec.js
  ✓ returns hello world! (1ms)
  ○ skipped 1 test
```

**Great! You are now a pro!**  
Almost..  
well, this would be a rather poor tutorial if we stopped there!

There are some more tests, which have been `skipped` this is a useful feature in `jest` to allow us to skip over some of our test suite (if every test ran, the output in the console might be a little noisy and hard for you to digest what the problem you were trying to fix was).

To re-enable a skipped test, go into the `index.spec.js` file and remove the `.skip`, i.e.:
```js
it.skip(... test string)
// becomes
it()
```

Now we have a new failing test which shows an expected output of
```js
"Hello
World!"
```

Notice the new line after 'Hello' which can be slightly tricky to make out in the terminal.

In order to get this test to pass you may find it helpful to know that as well as the backslash `\` there are a few other characters with special meaning in JavaScript:

**Horizontal Tab** is replaced with \t
**Vertical Tab** is replaced with \v
**Null char** is replaced with \0
**Backspace is** replaced with \b
**Newline is** replaced with \n
**Carriage return** is replaced with \r
**Single quote** is replaced with \'
**Double quote** is replaced with \"
**Backslash is** replaced with \\

Once you have addressed this failing test, Congratulations! You are ready to progress to the next section!
