## Typescript

### Crete tsconfig.json
Used to get configuration option for generating JS from TS.
1. `npm i --save-dev typescript` install typescript
2. `tsc --init` in project folder

---

1. `tsc <<typescriptFile>>` #Complile typescript file
2. `tsc --init` #create a tsconfig.js file
3. `tsc -b` #to build the ts file
4. `tsc -w` / `tsc --watch` #to watch for ts compilation
5. `"start": "lite-server"` in package.json scripts key for running on a live server

### Properties added to tsconfig.json

```json
{
   ...tsconfig default settings,
   "exclude": [
      //files that need to be excluded
   ],
   "include":[
      //files / folder that need to be included
   ]
}
```

#### Compiler Options

```json
"compilerOptions": {
   /* lib indicates the default core libraries required to run the js syntax like document and window properties */
   "lib":[
      "dom", //default libraries when lib is commented out
      "es6",
      "dom.iterable",
      "scripthost"
   ]
   ...
}
// for support for = new Promise() syntax
// "lib": ["es5", "es2015", "dom", "scripthost"]
```

```json
"compilerOptions": {
   ...
   "allowJs": true, //allows to compile JS files using TS compiler
   "checkJs": true, //check for errors using TS compiler
   "sourceMap": true, //will create map files and allow TS files in browser that aids development and debugging
   ...
}
```

```json
"compilerOptions": {
   ...
   "outDir": "./dist", //generates all JS and source maps here; also the output directory retains the directory structure from input src folders
   //the above is generated while using `tsc -w`
   "rootDir": "./src", //all src files of TS stored here; if rootDir not given then all TS files in other folders also gets compiled into the outDir

   ...
}

```json
"compilerOptions": {
   ...
   "removeComments": true, //removing comments from the generated JS files
   "noEmit": true, //for not generating any JS files; where only TS files are required
   "noEmitOnError": true // will ensure no filed gets compiled even if one error present in any TS file
   ...
}

```

Providing support to decorators
```json
    "experimentalDecorators": true /* Enables experimental support for ES7 
```

Providing support to namespace and bundling of all js files
```json
    "module": "amd",    /* only `amd` and `system` support outfile*/
    "outFile": "./dist/bundle.js",  /* Concatenate and emit output to single file. */
```



### Sample tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    //extremely important which decides how modules are rendered in TS, default is commonjs
    //for namespace integration and advanced modules, use es2015
    "lib": [
      "es5",
      "es2015",
      "dom",
      "scripthost",
      "dom.iterable"
    ] /* Specify library files to be included in the compilation. */,

    "sourceMap": true /* Generates corresponding '.map' file. */,
    "outFile": "./dist/bundle.js",  /* Concatenate and emit output to single file. */
    "outDir": "./dist" /* Redirect output structure to the directory. */,
    "rootDir": "./src" /* Specify the root directory of input files. Use to 
    "removeComments": true /* Do not emit comments to output. */,

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    "noUnusedLocals": true,                /* Report errors on unused locals. */
    "noUnusedParameters": true,            /* Report errors on unused parameters. */
    "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    /* Module Resolution Options */
    "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */

    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

    /* Experimental Options */
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src/**/*.ts"
  ]
}

```


### Sample tsconfig.json with webpack

```json
{
  "compilerOptions": {
    "target": "es6",  //atleast es6
    "module": "es2015", //supporting es6 module notation or Use "commonjs"
    "lib": [ //providing support for interacting with DOM
      "dom", 
      "es6",
      "dom.iterable",
      "scripthost"
    ],  
    "sourceMap": true,
    "outDir": "./dist",   //determined where the output files get saved
    "removeComments": true, 
    "strict": true, 
    "noUnusedLocals": true,   
    "noUnusedParameters": true,   
    "noImplicitReturns": true,        
    "esModuleInterop": true, 
    "experimentalDecorators": true, 
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true 
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "src/**/*.ts" //ts source folder
  ]
}

```


### TS change for using JS libraries
Install Type packages. Eg: from [here](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)