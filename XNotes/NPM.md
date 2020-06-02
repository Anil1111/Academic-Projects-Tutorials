## NPM Syntax

`npm i <<package>> --save-dev` or `-D` #Use --save-dev to download and install into local repository as dev dependency;  
`npm i <<package>> -g` #to install globally;  
`npm i <<package>> -d` #to install as a local dependency  
`npm i -g npm@latest` #to update npm client to latest  
`npm init -y` #to start a npm project with -y as yes to all default params  
`npm outdated --save` #to find the outdated packages in dependencies  
`npm outdated --save-dev` #to find the outdated packages in dev-dependencies  
`npm config ls -l | grep config` #to find the location of the npmrc config files in the system  
`npm remove <<package>>` removing specific packages
`npm ls <<packageName>>` from the directory which contains node_modules will list the package and its version
---


## NPM Libraries Used
1. **Bootstrap**
    - `npm install -g bootstrap`
    - `npm i -D jquery popper.js` #the js libraries that bootstrap depends on
2. **SASS**: `npm install -g sass`
3. **holderjs**: 
    - `npm install -g holderjs` #Used for providing UI support for blank sized images
4. **jquery**
5. **Babel**: 
    - `npm install -g babel-cli`, install babel cli
    - `npm install -g babel-preset-env`
6. **Nodemon**: 
    - `npm install -g nodemon` #nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
7. **React**
    - `npm install -g create-react-app` #to generate boiler plate version of react application
    - `npx create-react-app <<app-name>> --template typescript` #boiler plate with Typescript   
    Incase there is a webpack/webpack-dev-server installed with incompatible versions higher up the tree, you wont be able to `npm start`  
    - `npm i react-router-dom` 
8. **Surge**`
   - `npm install -g surge` #to deploy static websites
9. **Express** 
    - `npm install -g express` #to install express js
10. **POSTMAN**
    - `npm install -g newman` #OPTIONAL - to run collections exported from POSTMAN
    -  `newman run <<nameOfCollection>>`
11. **Express middleware**
    - `npm install -g morgan` #for logging in express
    - `npm install -g body-parser` #body parsing middleware
    - `npm install -g errorhandler` #error handling
    - `npm install -g cors` #cors filters
    - `npm i -g express-handlebars` #integrating handlebars with express for creating views
    - `npm i -g supertest` #library for testing node server responses
    - `npm i -g jsdom`
12. **Node Gyp**
    - `npm install -g node-gyp`  
    - `npm install --global --production windows-build-tools` #OPTIONAL - 
    Open with admin priveleges for configuring
13. **WebdriverIO**
    - `npm i --save-dev @wdio/cli`  
    - `npx wdio config -y` #to install all packages required for webdriverio in chrome headless browser
14. **Mocha** and **Chai**
    - `npm install -g mocha` #Testing framework  
    - `npm install -g chai` #Assertion Library
15. **MongoDB**
    - `npm i -g mongoose` #Node package for integrating MongoDB
15. **Typescript**
    - `npm i -g typescript@latest` #Typescipt
    - `npm i -g lite-server` #for automatic compilation of TS files
    - `npm i class-transformer reflect-metadata` used to map your plain javascript objects to the instances of classes you have. and make sure to import it in a global place, like app.ts with `import "reflect-metadata";` and `import { plainToClass } from "class-transformer";`
    - `npm i class-validator` Package that allows us to set up validation rules on classes using decorators
    - `npm i axios` Promise based HTTP client for the browser and node.js
    - `npm i -D @types/googlemaps` type support for google maps
    - `npm i -d @types/react-router-dom`
    - `npm i -d @types/node @types/express` all type support for node and express project in Typescript   
17. **Webpack**
    - `npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin` #webpack set up in  #webpack and corresponding CLI, webpack development server and plugin to clean the output directory each time 
    - `npm i -D typescript ts-loader`  #TS specific loader
    - `npm i -D @webpack-cli/init` #for using init command in npx
    - `npm i -D style-loader css-loader` #for CSS specific loader
    - `npm i -D sass-loader node-sass` #for SASS specific loader  
    - `npm i -D html-webpack-plugin`  plugin that will include all webpack bundles in the body using script tags
    - `npm i -D webpack-merge` merge package to merge two config files
    - `npm i -D html-loader file-loader` html-loader causes each image file to be 'require' by js & file-loader automatically sets the dynamic path
    - `npm i -D mini-css-extract-plugin` css loader to inject dynamically created css into the html
    - `npm i -D optimize-css-assets-webpack-plugin` minifying css files
18. **Lodash**
    - `npm i lodash` to install the lodash package
    - `npm i -D @types/lodash` to install the types package that support use of this JS library in TS
    - `npm i -D @types/jquery` type package for jquery
19. **Highcharts**
    - `npm i highcharts` 
20. **Angular**
    - `npm install -g @angular/cli@latest` #Install the latest angular CLI
    - `ng add @angular/material` installing angular material
    - `npm i highcharts-angular` installing highcharts for angular
    - `npm i @angular/flex-layout @angular/cdk` for flex support
