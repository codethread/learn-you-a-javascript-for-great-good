# Functions

## In this section, you will learn:

- The basics of defining a function, its parameters and return value

*(if the you feel confident in the bullets listed above, just run `npm test` and get the test(s) to pass, if you get stuck, refer back to the `walkthrough` for guidance)*

## Walk-through

```javascript
function foo(x, y) {
  const a = 4;
  const b = 'cheese';
  
  return 'some string';
}

foo(z) // will return the value 'some string'
```

- foo: is the **name** of our function
- x and y: are **parameters** of our function
- everything inside the `{ ... }` is known as the function **body**
- 'some string' is the value returned out of our function
- putting `()` after a function name once it has been declared **invokes** the function
- foo(z): everything inside the `( ... )` are the **arguments** to our function and they can change each time we call `foo`, see below.

**Note**
```javascript
foo; // won't do anything as we haven't called the function

const x = foo(); // the evaluated result of calling foo is now stored in 'x'
x // 'some string'

const y = foo(1, 2); // different arguments but the result will be the same
y // 'some string' : the result is the same because `foo` doesn't actually do anything with it's arguments.

```

functions can define many parameters, but they don't all have to be used. This will likely be flagged by your linter, as this is bad practice due to it's confusing nature, but you won't get any errors from JavaScript for doing this.

Of course if you try to use an argument that doesn't exist, that will throw an error:

```javascript
function bar(x) {
  return z;
}

bar(3) // error variable 'z' is undefined
```

```javascript
function add(x, y) {
  return x + y;
}

add(1,2) // 3
add(6,2) // 8
add('foo','bar') // 'foobar'

const i = 3;
const j = 4;

// we can pass variables as arguments to functions too
add(i, j) // 7
```
