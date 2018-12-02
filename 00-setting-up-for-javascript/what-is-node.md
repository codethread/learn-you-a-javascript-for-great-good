# What is Node?

Node.js is an open source server environment, in other words, it is a place you can run JavaScript outside the browser. There are better, more in depth answers to the question, but for now this will do. The goal here is to get you up and running.

## Installing Node

It's possible to jump to [installing node](https://nodejs.org/en/download/) **but this is not recommended** as this would give you one single version of the node binary on your machine. The likelyhood is you'll be working on more than one node project, and they can often reuire **different versions of node**. To support this, developers use node version managers - the most popular being of the same name [nvm](https://github.com/creationix/nvm) or another, [nodenv](https://github.com/nodenv/nodenv).

Once you have one of the above installed, folowing the instructions on the respective site, your system will now be able to run different versions of node, depending on the version specified by a project (how this is identified will will be explained shortly)

## Using Node

now that you have installed, let's say, nvm, you'll likely need to install a version of node

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
Look at the package.json for this project and you'll see a `Json` file with many fields, most of which, are self explanatory such as:
```json
"name": "learn-js-much-win",
"version": "1.0.0",
"license": "MIT"
```
