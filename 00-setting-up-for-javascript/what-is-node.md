# What is Node?

Node.js is an open source server environment, in other words, it is a place you can run JavaScript outside the browser. There are better, more in depth answers to the question, but for now this will do. The goal here is to get you up and running.

## Installing Node

It's possible to jump to [installing node](https://nodejs.org/en/download/) **but this is not recommended** as this would give you one single version of the node binary on your machine. The likelyhood is you'll be working on more than one node project, and they can often reuire **different versions of node**. To support this, developers use node version managers - the most popular being of the same name [nvm](https://github.com/creationix/nvm) or another, [nodenv](https://github.com/nodenv/nodenv).

Once you have one of the above installed, folowing the instructions on the respective site, your system will now be able to run different versions of node, depending on the version specified by a project (how this is identified will will be explained shortly)

## Using Node

now that you have installed, let's say, nvm, you'll need to install a version of node (it doesn't matter which for now)

```sh
nvm install node
nvm use node
```

You should now be able to run `node` in a shell and you'll see a `>`.  
*if you see something like `sh: command not found: node` you likely haven't got nvm or nodenv set up fully*
```sh
$ node
> _
```

You can now type a simple JavaScript command and execute after each line:
```sh
$ node
  > _
$ var a = 10 + 5
  > undefined
$ a
  > 15
```
**To exit, you'll need to hit `Ctrl+c` twice**  
*Generally when in doubt, mash `Ctrl+c` till things stop... if really in doubt try `Ctrl+d`*

## npm

[npm](https://www.npmjs.com/) stands for `node package manager` and is, as the name implies, a large repository of node packages that can be imported into your node projects. npm will also glue your node project together via a `package.json`.  
Look at the package.json for this project (it's in the root of the repo, as all `package.json`'s are) and you'll see a `Json` file with many fields, most of which, are self explanatory such as:
```json
"name": "learn-js-much-win",
"version": "1.0.0",
"license": "MIT"
```

There are some fields though which are less clear, but you will see in every project you come across:

### dependencies

This project has no deployable app, i.e there won't be any final website or server to present for public consumption, so there aren't any dependencies for this project to run. There are however, `devDependencies`, which, much like `dependencies` are packages being used in this project, but as the name implies, these are just for development purposes. In other words, if we were to publish this to work to a real live server, none of the `devDependencies` would be included.

```json
  "devDependencies": {
    "@babel/core": "^7.1.6",
    "eslint": "^5.9.0",
    "jest": "^23.6.0",
    ... etc
  }
```

a sample of the devDependencies for this project are above:

- **eslint**: handles linting (warnings) for your project, you will likely always want some form of linting in your projects to warn you of missing commas, semicolons, unused variables and a whole host of other minor typos that can cause issues at run time. You may see variations such as `jshint` which are less popular. `stylelint` if included, will do the same for css and sass
- **jest**: a popular testing JavaScript framework. See more in [what is jest](./what-is-jest.md)
- **@babel/core**: two things to note here:
  - **babel** itself is a JavaScript [transpiler](TODO: what is this), this will be covered in more detail within the tasks in this repo.
  - **@** and **/core**: `@` is how npm indicates packages contained within an `organisation`. Basically it's just a collection of packages under one single heading and helps identify grouped npm packages owned by a team. The `/core` shows this is the `core` packages published by the `babel` org (note, there is nothing special about the word `core`, they could have chosen `main`, `base` or any other descriptive word)

As you can infer, the production bundle of this app (if it had one) wouldn't need `eslint` (developer warnings) or `jest` (a test suite), but as developers we always want to know what packages we would need to download to run and contribute to this project. `babel` is less obvious here as a devDependency, and sounds like it should be a dependency, as the job of `babel` is to turn 'modern' JavaScript into something that all browsers can understand, but note the transpile would be done in development, and the 'transpiled' understandable code is what we would publish (meaning `babel`'s job would be done).

### scripts

```json
  "scripts": {
    "test": "jest --watch",
    "test:all": "jest --no-bail --watch"
  },
```

Scripts are a collection of custom commands we can run within our project, there is no steadfast rule on what these need to be, but you will nearly always see `start`, `test`& `build`. Some of these may be broken down further, such as you see in this repo: `test` and `test:all` are created to different tasks (one will run tests until a test fails and is useful for development, but the `test:all` will run everything, even if one test fails - this is more useful for the maintainers of this repo when adding tests).

These can all be run via:

```sh
# start with npm run ...
npm run <command>

# e.g
npm run test
npm run test:all

# test and start are special commmands which can be invoked without 'run'
npm start
npm test

# though any variations on these, such as a 'development' start, still need the 'run' keyword
npm run start:dev
npm run start-dev
npm run start_dev

```

wip...
