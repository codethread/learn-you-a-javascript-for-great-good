# Introduction

## In this section, you will learn:

- The meaning of node's `module` and `require` key word.
- Changing a single JavaScript `variable`
- Getting your first test to pass!

*(if the you feel confident in the bullets listed above, just run `yarn test` and get the test(s) to pass, if you get stuck, refer back to the `walkthrough` for guidance)*

## Walkthrough

### Getting the test to pass
Start by running `yarn test`. You will see jest scan for files, and then get an output something like

```sh
 FAIL  01-intro/index.spec.js (5.682s)
  ✕ returns hello world! (19ms)

  ● returns hello world!

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello World!"
    Received: null

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

**If you are unfamiliar with jest, first check out [what is jest](../00-setting-up-for-javascript/what-is-jest.md)**


The area of interest here is:
```sh
expect(received).toBe(expected) // Object.is equality

  Expected: "Hello World!"
  Received: null
```

First, let's get this test to pass.
Go into [index.js](./index.js) and change:
```js
var helloWorld;
```
to
```js
var helloWorld = 'Hello World!';
```

As soon as you save this change, go back to your terminal and you should see the test rerun (as jest is watching for file changes) with an ouput, something like:
```sh
 PASS  01-intro/index.spec.js
  ✓ returns hello world! (1ms)
```

**Great! You are now a pro!**  
Almost..  
well, this would be a rather poor tutorial if we stopped there!

### Getting code from one js file to another

This guide assumes you understand common programming principles, such as what a `String`, `function`,`test` is, and most crucially, what `scope` is i.e:  
*(there will be more details about functions later, but for now the syntax is self explanatory enough)*  
```js
var a = 2;

function foo() {
  var b = 4;

  return a + b
  // outputs => 6
}

function bar() {
  return a + b
  // Reference Error: b is not defined
}
```
But how do we get variables and functions from one javascript file into another, such as getting:
```js
var helloWorld = 'Hello World!';
```
out of `./index.js` and into `./index.spec.js`?

Well, it depends.
In the browser, if a html file were to import a javascript file, i.e:
```html
<script type="text/javascript" src="01-intro/index.js"></script>
```
the `var` `helloWorld` would be created inside the `global` scope, meaning it would be available to all other imported javascript files. This is **far** from ideal, as we have lost control and visibility of where `helloWorld` was defined, and where it may be used.

There are ways around this, however we won't go into them just yet, instead we'll look at how `node` handles this issue.  
In the browser, our `html` file is loaded, and begins importing everything, css, js, images etc, that the web page will need.  
In `node`, we are dealing with a more conventional file system, so we can 'import' and 'export' [[note*](###note-on-import-export)] peices of functionality from one `.js` file to another, and then at run time, `node` will pull these various pieces together. This is known as the **CommonJs Module System**.

Inside `./index.js`, notice this line:
```js
module.exports = helloWorld;
```

`module` is an `Object` ([what is an object?](./02-basic-built-ins/README.md#objects)) given to us by `node` runtime (more on this later sections), with a property `exports` which we can modify to, as the name implies, 'export' code from one 'module' to another.
So inside of `./index.js` we have now 'exported' our data by assigning `module.export` to be the value of of `var helloWorld`.  
You could think of `module.export` as like calling `return` inside the file as though the whole file were a function (which it actually is as, again, we'll see in later sections).

Once we have something 'exported', we can 'import' it. Go to `./index.spec.js` and you will see:
```js
var helloWorld = require('./index.js');
```

as you may have guessed, `require` is a function given to us by `node` and it allows us to import whatever was 'exported' from the `module` we point to inside the parameters of the `require` function. The pattern is a conventional unix path, where:  
- `./` and `.` : the folder I am currently in
- `../` : go back a folder

so inside of `index.spec.js` we are `require`ing whatever comes out of `index.js`  
**Two things of note**  
- the file extension is optional (and usually avoided, except if you want to import a non `.js` file)
- you will likely never see 'index' as js bundlers and `node` will automatically look for an `index.js` if you just give a folder path, e.g the following are the same:
    - require('./some/path/index.js')
    - require('./some/path')
    - or if you are already in 'path' you can use `require('.')` (i.e find 'index.js' inside my current folder)
    - of if you are already in a folder inside of `path` like `some/path/the-folder-with-our-index/child` require('../')

In summary, these can then be paired to all be the same thing;
```js
// exporting a single var
var helloWorld = 'Hello World!';
module.exports = helloWorld;
var helloWorld = require('.')
helloWorld // => 'Hello World!'

module.exports = 'Hello World!';
var helloWorld = require('.')
helloWorld // => 'Hello World!'
```
```js
// exporting an object
module.exports = { helloWorld: 'Hello World!' };
var imports = require('.')
imports.helloWorld
helloWorld // => 'Hello World!'

```
```js
// exporting a function
module.exports = function helloWorld() { return 'Hello World!'}
var helloWorld = require('.')
helloWorld() // => 'Hello World!'
```

## Practice
Now that we've gone through the getting information from one file to another, there are some pratice exercises if you'd like to familiarise yourself with `module.export` and `require`.

Go into the file `practice.spec.js`

### Note on import export
You may notice I refer here to 'import' and 'export' as opposed to `import` and `export`. This because when I say 'import' and 'export' I am refering to the collective idea of 'importing' and 'exporting' code from one place to another. We will later cover the key words `import` and `export` which are supported by bundlers such as `Webpack` and (some browsers)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#Browser_compatibility].  
`export` is not to be confused with `modules.export` which is a `node` specific `Object` method.
