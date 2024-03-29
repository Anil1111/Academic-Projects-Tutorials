# Webpack

## CONCEPTS

### Why Webpack

- Bundles our code/assets together and manages all dependencies
- ES6 modules require modern browser support and create multiple HTTP Requests.
- It is a Bundling and "Build Orchestration" Tool. Helps in reducing the number of HTTP requests by bundling all files. Thus, less imports required.
- Optimized code with less code to download
- Possibility to add several build steps

### NPM packages required

```bash
# For Normal JS project
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin

#For TS Project
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin typescript ts-loader

#For CSS Project
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin style-loader css-loader

#For SASS Project
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin style-loader css-loader sass-loader node-sass

#General plugins
npm i -D html-webpack-plugin

#General packages
npm i -D webpack-merge
npm i -D html-loader file-loader
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin
```

### Changes to be made if TS project

No need for an extension (ie .js)in the import statements as it automatically checks for `js` extensions.

From the js/ts source code files

```typescript
import NewName from "../pathToFile";
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

### Building webpack from package.json by npm run build

Automatically creates a default `./dist/` folder with the bundled default code `./dist/main.js` (_If webpack.config.js is not provided_)

```json
{
  "scripts": {
    ...
    "build": "webpack"
  }
}
```

> `npm run build` / `yarn run build` from terminal

### Using webpack-dev-server by npm start

It creates the output file in memory and does not generate output files to the dist, but uses the files generated from its memory.

```json
{
  "scripts": {
    ...
    "start": "webpack-dev-server", //uses its own memory to render changed layout although index.html requires output(bundle.js) in the ./dist directory
    "build": "webpack" //builds the files into the dist folder if npm run build is used, but these files are not used when `npm start` is run as it uses the inbuilt memory and thus only represents what runs in the browser
  }
}
```

> `npm start` from terminal to spin up dev server at `http://localhost:8080/`
> `npm build` to generate the bundle in ./dist as per the development mode configuration in `webpack.config.dev.js`

### Sample `webpack.config.js` with development workflow

>Run the below by using `npm start` that spins up the webpack dev server with the `index.html` file and the supporting `css` files mentioned in it and uses the below mentioned entry point `./src/app.ts` to load the JS file that gets dynamically generated by webpack

```javascript
const path = require("path"); //core nodejs module

module.exports = {
  mode: "development", //for lesser code optimization and better debugging support
  entry: "./src/app.ts", //corresponds to the entry point of the application

  output: {
    filename: "bundle.js", //output filename for the final bundle generated;
    // filename: 'bundle.[contentHash].js' or 'bundle.[contenthash].js'//for generating dynamic parts/dynamic hash to create unique files
    //it is used for cache busting where new hash is created only when the content changes which causes cached browser to request for new resource
    //thus filename has to be changed in index.html else use the html-webpack-plugin
    path: path.resolve(__dirname, "dist"), //must match './dist' from your tsconig.json file
    //it wants an absolute path
    //`__dirname` available globally by nodejs and represents current directory
    publicPath: "dist", //required in dev mode to tell webpack where to find the output assets as in dev mode the bundle is created only in memory due to the webpack-dev-server
    //without this code reload will not work
    //does not depend on the presence of the bunlde.js in dist/
  },
  //ensure "sourceMap": true in the compiler option of tsconfig.json
  //tells webpack that sourcemaps will be present and use it to bundle correctly
  devtool: "inline-source-map", //can take value of 'none' which eliminates the eval function enclosure and better relates to source functions
  /* Below code is required to set up a TS project and specific rules for it*/
  module: {
    //rules to tteach webpack to perform complex operation
    rules: [
      {
        //check whether the rule works on a given file (any file that ends with .ts)
        test: /\.ts$/,
        //use specifies what needs to be done with the file
        // ts-loader finds the tsconfi.json automatically
        use: "ts-loader",
        exclude: /node_modules/, //exclude contents of node_modules
      },
    ],
  },
  //tells which file extension it adds to the imports it finds
  resolve: {
    extensions: [".ts", ".js"], //look for ts and js files- bundle them
  },
};
```

#### Sample `webpack.config.js` for bundling **CSS** files coupled with default JS

```javascript
module.exports = {
  //other properties ...

  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader takes the css file imports and converts into js
        //style-loader uses the converted js and inject into DOM
        //but use loads in reverse order
        //thus, no link tag required in index.html as injected automatically by webpack
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
```

#### Sample `webpack.config.js` for bundling **SASS/SCSS** files coupled with default JS

```javascript
module.exports = {
  //other properties ...

  module: {
    rules: [
      {
        //sass-loader- transpiles scss to css
        //css-loader- takes the css file imports and converts into js
        //style-loader- uses the converted js and inject into DOM
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
```

#### Sample `webpack.config.js` for Cache Busting & Plugins

`Cache busting` or forcing browsers to download the latest updated files by hashing the files names using `[contentHash]`

`Plugins` give the option of customizing the build options.

Using contentHash file names while automatically generating `index.html` using `html-webpack-plugin`

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //other properties ...
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  module: {...  },
  //will create an index.html file automatically in ./dist folder which appends the contenthashed new filename automatically
  //but requires a template to be used
  plugins: [
    new HtmlWebpackPlugin({
      //template will represent the template file (without script tags) that will be used to build the ./dist/index.html
      template: "./src/template.html"
    })
  ]

};
```

### Sample `webpack.config.prod.js` with Production workflow

```javascript
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production", //production mode
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "none", //no need for source maps
  //rules and modules are file specific
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  //extra extensions that can be added to webpack workflow to the entire project
  //to have latest bundle in dist/
  plugins: [
    //tells webpack to clear the contents of dist before writing something new
    //requires the plugin clean-webpack-plugin
    new CleanPlugin.CleanWebpackPlugin(),
  ],
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

Finally, to run the above

Edit the package.json

```json
  "scripts": {
    // "start": "webpack --config webpack.config.dev.js",
        //--open opens the browser in 8080 port
        //webpack-dev-server oepn the dev server
        //it does nto create the ./dist folder but does everything in memory
    "start": "webpack-dev-server --config webpack.config.dev.js --open",

    "build": "webpack --config webpack.config.prod.js"
  },
```

```bash
npm start #starting up dev version
npm run build #starting prod version
```

### Sample `webpack.config.js` with Support for automatic rendering of Images

```javascript
module.exports = {
  module: {
    rules: [
      {
        //existing...
      },
      {
        test: /\.html$/,
        use: ["html-loader"], //forces any images in the html to be required/imported by js
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|jpeg|gif|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]", //new name of file
            outputPath: "imgs", //copies into new folder
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
```

### Sample `webpack.config.js` with classification of Vendor Code and User Code

```javascript
module.exports = {
  entry: {
    main: './src/index.js', //the name of the entry point for User code is marked as 'main'
    //all other configs including prod and dev should make use of [name] instead of explicitly mentioning the name of the produced file
    vendor: './src/vendor.js', //the name of the vendor code
  },
```

#### Changes to be made in `webpack.config.prod.js`

```javascript
module.exports = merge(common ,{
  mode: "production",
  output: {
    filename: '[name].[contenthash].bundle.js',  //the [name] is used as against a specific name like main.[contenthash].bundle.js
    path: path.resolve(__dirname, 'dist'),
  }
```

#### Changes to be made in `webpack.config.dev.js`

```javascript
module.exports = merge(common ,{
  mode: "development",
  output: {
    filename: '[name].bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  }
```

### Sample `webpack.config.prod.js` with Extarcting CSS

Since style is injected later by the JS into the DOM, in production, we can see the unstyled HTML render for a split second initially.

#### Code to affect `webpack.config.prod.js`

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common ,{
  mode: "production",
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], //MiniCssExtractPlugin.loader will replace the 'style-loader'
        //instead of injecting the css into DOM, MiniCssExtractPlugin will append the dynamic css into the html
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin ({
      filename: '[name].[contantHash].css' //creates the optimized css code into ./dist
    }),
    new CleanPlugin.CleanWebpackPlugin()
  ]
});
```

#### Changes to `webpack.config.js`

```javascript
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      //All other rules by removing rules especially for CSS and SCSS
      //Original rules moved to webpack.config.dev.js
      //New rules updated in webpack.config.prod.js
    ]
  },
  plugins: [ new HtmlWebpackPlugin({
    template: "./src/template.html"
  })]
};
```

#### Changes to `webpack.config.dev.js`

```javascript
module.exports = merge(common ,{
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, //adding these
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader'],
        exclude: /node_modules/,
      },
    ]
  }

});
```

### Sample `webpack.config.prod.js` with Minifying CSS & JS & HTML

By default, the CSS files do not get minimized, and thus we need to use an optimizer. But using this optimizer disables the default JS optimizer and causes JS files not to be minimized. So we need to explicitly handle that as well.

#### Code to affect `webpack.config.prod.js` II

```javascript
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); //present by default by webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(), //adding the minizing option for css disables minimization for JS
      new TerserPlugin(), //adding the default minimization package that got overwritten due to the above css mimizer and thus needs to be explicitly mentioned
      new HtmlWebpackPlugin({ //taken from the webpack.config.js
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true, //several minification properties
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  module: {
    //some rules
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new CleanPlugin.CleanWebpackPlugin()
  ]
});
```

#### Changes to `webpack.config.js` II

```javascript
  //removed the plugin option for HtmlWebpackPlugin and moved into webpack.config.dev.js
```

#### Changes to `webpack.config.dev.js` II

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  //other properties

  plugins: [
    new HtmlWebpackPlugin({ //added the plugin so that optimization can be made on the webpack.config.prod.js
      template: "./src/template.html"
    })
  ]
}
```

### Sample config file setup of Common, Dev and Prod

#### `webpack.config.js`

```javascript
const path = require('path');

//common webpack config shared by both webpack.confog.dev and webpack.config.prod
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|jpeg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
};
```

#### `webpack.config.dev.js`

```javascript
const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/, //adding these
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]

});
```

#### `webpack.config.prod.js`

```javascript
const CleanPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new CleanPlugin.CleanWebpackPlugin()
  ]
});
```

### NPX command for Webpack cli

```bash
npx webpack-cli init --auto
```

1. Appends the `package.json` with

```json
{
  "name": "NameofProject",
  "version": "1.0.0",
  "description": "My webpack project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "html-webpack-plugin": "^4.3.0",
    "terser-webpack-plugin": "^3.0.2",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0",
    "workbox-webpack-plugin": "^5.1.3"
  }
}
```

#### Adds the below files

- index.html
- src/index.js
- .yo-rc.json
- README.md
