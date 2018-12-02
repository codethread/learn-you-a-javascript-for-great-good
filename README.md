# Learn You a JavaScript for Great Good!

> name stolen from the great [Learn You a Haskell for Great Good](http://learnyouahaskell.com/chapters)

## What this repo is

Learning by doing is often the best way to learn, so in that spirit, this repo is a series of tasks which you'll solve using JavaScript. Each chapter has one or many failing tests; by completing each one, you can advance to the next.

This series of tasks will take you from zero understanding of JavaScript to (hopefully) a fully fledged pro! The questions do grow in complexity, so even if you are comfortable with JavaScript, you should be able to blast through the early questions.

This is **not a guide to programming itself**, and assumes a working knowledge of programmatic constructs and practices such as `Integers`, `Arrays`, `Functions`, `for loops`, writing `tests` etc, instead, **the focus of this course will the ins and outs of JavaScript itself**, though you will likely learn a lot about writing modern JavaScript as a result.

## Getting set up for JavaScript

If you are **completely new** to any of the following, you may find the setup guides helpful:
- **node**: [00-setup/what is node?](./00-setting-up-for-javascript/what-is-node.md)
- **jest**: [00-setup/what is jest?](./00-setting-up-for-javascript/what-is-jest.md)
- editor for JavaScript [00-setup/which editor for js?](./00-setting-up-for-javascript/js-editors.md)

## Getting Started with the Exercises

To begin, [clone](https://help.github.com/articles/cloning-a-repository) this repo and run the following commands:

*You may need to set up the correct node version and install yarn*  
*If you aren't familiar with having multiple versions of node, check out [00-setup/what is node?](./00-setting-up-for-javascript/what-is-node.md)*

```sh
# add correct node-version
$ cat .nvmrc # outputs a node version like => 8.11.1
$ nvm install <node version> # or nodenv install <node version>

# if you don't have yarn in this version
$ npm i -g yarn@latest
```

*Once you have your environment set up, install the dependencies for this repo*
```sh
# install dependencies
$ yarn
```

Assuming the above are complete, you can now run the following command:  
*Now that the repo is set up, you won't need to run the above commands again*  
**note the next command: you'll be using it a lot**

```sh
# run tests
$ yarn test
```
**to cancel this command, hit Ctrl+C a couple of times**

You'll see the first failing test coming from [01-intro/index.js](./01-intro/index.js). Navigate to [01-intro](./01-intro) and you'll see the following structure:

- 01-intro/
  - index.js
  - index.spec.js
  - solution.js
  - README.md

All folders within this repo roughly follow the above structure.  
There will be at least one index.js file which you will alter to get the tests, inside of index.spec.js, to pass.  
The `README.md` will give you guidance and instructions on each task.  
There is also a solution file, just in case you get totally stuck, but you should keep these as a last resort!

