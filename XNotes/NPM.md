## NPM Syntax

`npm i <<package>> --save-dev` #Use --save-dev to download and install into local repository as dev dependency;  
`npm i <<package>> -g` #to install globally;  
`npm i <<package>> -d` #to install as a local dependency  
`npm i -g npm@latest` #to update npm client to latest  
`npm init -y` #to start a npm project with -y as yes to all default params  
`npm outdated --save` #to find the outdated packages in dependencies  
`npm outdated --save-dev` #to find the outdated packages in dev-dependencies  
`npm config ls -l | grep config` #to find the location of the npmrc config files in the system  


---


## NPM Libraries Used

1. **Bootstrap**: `npm install -g bootstrap`
2. **SASS**: `npm install -g sass`
3. **holderjs**: `npm install -g holderjs` #Used for providing UI support for blank sized images
4. **jquery**
5. **Babel**: `npm install -g babel-cli`, `npm install -g babel-preset-env`
6. **Nodemon**: `npm install -g nodemon` #nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
7. `npm install -g create-react-app` #to generate boiler plate version of react application
8. `npm install -g surge` #to deploy static websites
9. `npm install -g express` #to install express js
10. `npm install -g newman` #OPTIONAL - to run collections exported from POSTMAN
 `newman run <<nameOfCollection>>`

11. Express middleware
    -`npm install -g morgan` #for logging in express
    -`npm install -g body-parser` #body parsing middleware
    -`npm install -g errorhandler` #error handling
    -`npm install -g cors` #cors filters
    -`npm i -g express-handlebars` #integrating handlebars with express for creating views
    -`npm i -g supertest` #library for testing node server responses
    -`npm i -g jsdom`
12. `npm install -g node-gyp`  
`npm install --global --production windows-build-tools` #OPTIONAL - Open with admin priveleges for configuring
13. `npm i --save-dev @wdio/cli`  
`npx wdio config -y` #to install all packages required for webdriverio in chrome headless browser
14. `npm install -g mocha` #Testing framework  
    `npm install -g chai` #Assertion Library
15. `npm i -g mongoose` #Node package for integrating MongoDB
15. `npm i -g typescript@latest` #Typescipt
16. `npm i -g lite-server` #for automatic compilation of TS files