## Typescript

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