## Webpack

### Why Webpack?
- ES6 modules require modern browser support and create multiple HTTP Requests.   
- It is a Bundling and "Build Orchestration" Tool. Helps in reducing the number of HTTP requests by bundling all files. Thus, less imports required.
- Optimized code with less code to download
- Possibility to add several build steps


### Changes to be made
No need for an extension in the import statements as it automatically checks for `js` extensions.

From the js/ts source code files
```typescript
import NewName from '../pathToFile'
//import NewName from '../pathToFile.js' not required
```

From the tsconfig.json file
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015",
    "lib": [
     "dom",
      "es6",
      "dom.iterable",
      "scripthost"
    ],
    "sourceMap": true,
    /* commenting the below as webpack configures the below */
    /* "outFile": "./dist/bundle.js",   */
    /* "outDir": "./dist", */
    /* "rootDir": "./src" */
  }
```

### Running webpack from package.json

```json
{
  "scripts": {
    ...
    "build": "webpack"
  }
}
```

>`npm run build` / `yarn run build` from terminal


### Using webpack-dev-server

```json
{
  "scripts": {
    ...
    "start": "webpack-dev-server"
  }
}
```

>`npm start` from terminal to spin up dev server at http://localhost:8080/



### Sample `webpack.config.ts`

```javascript
const path = require('path');//core nodejs module

module.exports = {
  mode: 'development', //for lesser code optimization and better debugging support
  entry: './src/app.ts', //corresponds to the entry point of the application

  output: {
    filename: 'bundle.js', //output filename for the final bundle generated;
    // filename: 'bundle.[contenthash].js' //for generating dynamic parts/dynamic hash to create unique files
    path: path.resolve(__dirname, 'dist'), //must match './dist' from your tsconig.json file
    //it wants an absolute path
    //`__dirname` available globally by nodejs
    publicPath: 'dist' //required in dev mode to tell webpack where to find the output assets as in dev mode the bundle is created only in memory
    //without this code reload will not work
    //does not depend on the presence of the bunlde.js in dist/
  },
  //ensure "sourceMap": true in the compiler option of tsconfig.json
  //tells webpack that sourcemaps will be present and use it to bundle correctly
  devtool: 'inline-source-map',
  module: {
    //rules to tteach webpack to perform complex operation
    rules: [
      {
        //check whether the rule works on a given file (any file that ends with .ts)
        test: /\.ts$/,
        //use specifies what needs to be done with the file
        // ts-loader finds the tsconfi.json automatically
        use: 'ts-loader',
        exclude: /node_modules/, //exclude contents of node_modules
      }
    ]
  },
  //tells which file extension it adds to the imports it finds
  resolve: {
    extensions: ['.ts', '.js' ], //look for ts and js files- bundle them
  }
};
```


### Sample `webpack.config.prod.ts` with Production workflow

```javascript
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', //production mode
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'none', //no need for source maps
  //rules and modules are file specific
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  //extra extensions that can be added to webpack workflow to the entire project
  //to have latest bundle in dist/
  plugins: [
    //tells webpack to clear the contents of dist before writing something new
    //requires the plugin clean-webpack-plugin
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
```

Changes to `package.json`

```json
{
  "scripts": {
    ...
    //tells webpack to use the new prod config file instead
    "build": "webpack --config webpack.config.prod.js"
  }
}
```