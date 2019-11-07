# Learn You a JavaScript for Great Good! [![Coding time tracker](https://wakatime.com/badge/github/AHDesigns/learn-you-a-javascript-for-great-good.svg)](https://wakatime.com/badge/github/AHDesigns/learn-you-a-javascript-for-great-good)

> name stolen from the great [Learn You a Haskell for Great Good](http://learnyouahaskell.com/chapters)

## What this repo is

Learning by doing is often the best way to learn, so in that spirit, this repo is a series of tasks which you'll solve using JavaScript. Each chapter has one or many failing tests; by completing each one, you can advance to the next.

This series of tasks will take you from zero understanding of JavaScript to (hopefully) a fully fledged pro! The questions do grow in complexity, so even if you are comfortable with JavaScript, you should be able to blast through the early questions.

This is **not a guide to programming itself**, and assumes a working knowledge of programmatic constructs and practices such as `Integers`, `Arrays`, `Functions`, `for loops`, writing `tests` etc, instead, **the focus of this course will the ins and outs of JavaScript itself**, though you will likely learn a lot about writing modern JavaScript as a result.

## Getting set up for JavaScript

There is a wiki attached to this project, please navigate to [Node](https://github.com/AHDesigns/learn-you-a-javascript-for-great-good/wiki/Node) and follow the setup instructions there.

## Getting Started with the Exercises

To begin, [clone](https://help.github.com/articles/cloning-a-repository) this repo and run the following commands in a terminal:

```sh
# add correct node-version
$ cat .nvmrc # outputs a node version like => 8.11.1
$ nvm install <node version> # or nodenv install <node version>
```

*Once you have your environment set up, install the dependencies for this repo*
```sh
# install dependencies
$ npm install
```

The exercises in this repo are broken into sections such as `01-intro`. The exercises should be completed in sequential order to help you progress as new concepts are introduced.

All folders within this repo follow this structure:

- 01-intro/
  - README.md
  - index.js
  - index.spec.js
  - solution.js

The `README.md` will give you guidance and instructions on each task.

The `index.js` file contains JavaScript code that is either incomplete or 'broken'. You will open this file in an [editor](https://github.com/AHDesigns/learn-you-a-javascript-for-great-good/wiki/JavaScript-Editors) on your machine, and alter the code according to the instructions in the `README.md` and get the tests to pass.

The `index.spec.js` file contains 'tests' that run the code inside of `index.js` to make sure it does what it is expected to do (of course it does not at first, and you will fix this).

There is also a `solution.js` file so you can peek at the answer, just in case you get totally stuck, but you should keep these as a last resort!

Now open up [01-intro/README.md](./01-intro/README.md) in your editor to see your first task.
