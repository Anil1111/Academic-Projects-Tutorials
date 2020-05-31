## ES6

Three reasons for the ES5 to ES6 updates are listed below:

1. Readability and economy of code 
    - The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
2. Addresses sources of ES5 bugs
   - Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls.
3. A similarity to other programming languages
    - JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.

## BABEL:
Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript library called Babel that **transpiles ES6 JavaScript to ES5.**

Transpilation is the process of converting one programming language to another.

## NPM:
consists of packages published by many developers that can act as reusable code. One can publish the code in the public repository of npm and later installed by developers.
npm init. The `npm init` command creates a package.json file in the root directory.

A `package.json` file contains information about the current JavaScript project. Some of this information includes:
Metadata — This includes a project title, description, authors, and more.   
A list of node packages required for the project — If another developer wants to run your project, npm looks inside` package.json` and downloads the packages in this list.   
Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

## .babelrc
You can specify the initial JavaScript version inside of a file named `.babelrc`
Inside `.babelrc` you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.
To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into `.babelrc`:
```json
{
  "presets": ["env"]
  //["env"] instructs Babel to transpile any code from versions ES6 and later.
}
```

### npm run build
```json
{
  "scripts": "babel src -d lib"
}
```
In the "scripts" object above, we add a property called "build". The property’s value, "`babel src -d lib`", is a command line method that transpiles ES6+ code to ES5. Let’s consider each argument in the method call:

- `babel` — The Babel command call responsible for transpiling code.
- `src` — Instructs Babel to transpile all JavaScript code inside the src directory.
- `-d` — Instructs Babel to write the transpiled code to a directory.
- `lib` — Babel writes the transpiled code to a directory called lib.   

We need to call "`build`" from the command line to transpile and write ES5 code to a directory called lib.
From the command line, we type: