## Bootstrap requirements

### CSS (CDN):

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">`  
SASS (import to scss file) : `@import "../node_modules/bootstrap/scss/bootstrap.scss";`

### JS (CDN):

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
  crossorigin="anonymous"
></script>
<script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
  integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
  crossorigin="anonymous"
></script>
```

JS (add to script tag in html):

```html
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<!-- #the bundle contains popperJS+JS -->
```

---

## Softwares Used

1. **VSCode** - Text Editor
2. **GIT** - Version control
3. **NodeJS**
4. **Inkspace** - SVG Creator

---

## Browser Extensions - Chrome

1. **JSON View** #to view json files in browser with syntax highlighting
   `Ctrl + Alt + Mouse Click` to collapse all options in dev tools
2. **React Developer Tools**
3. **Postman**
4. **Markdown Viewer**
5. **Width and Height Display**
6. **Wizdler**

---

## Template Engines

1. _Safari_ - Webkit
2. _Edge_ - Trident
3. _Chrome and Opera_ - Blink
4. _Firefox_ - Gecko

---

## Node.JS

1. Issue for running ES6 commands in Node.js

- use .mjs file extension
- add "type": "module" in package.JSON
- run node in terminal with --input-type=module

---

## Nodemon

1. `nodemon [your node app]`
2. `nodemon ./server.js localhost 8080`

---

## Babel

Used to transpile ES6 to ES5 syntax

1. install npm dependencies - Babel: `npm install -g babel-cli`, `npm install -g babel-preset-env`
2. create the `.babelrc`file with - `{ "presets": ["env"]}`
3. Append to script property in package.json - `"build": "babel main.js -d lib"`
   then you can use `npm run build`
4. To view output file in bash/print in new js file - `babel filename > fileCreated.js`

---

## React

1. `npm install -g create-react-app` #to install
2. `create-react-app <name-of-app>` #create new react project
3. `npm start` #to start the app on dev server

---

## Surge

1. `npm install -g surge` ; `npm install --save-dev surge` #to install surge globally
2. `npm run build` #to production build your app in build/ folder

- `cd` into your build folder

3. `surge --domain jammWithRichard.surge.sh` #deploy your app into a customdomain.surge.sh
4. `echo jammWithRichard.surge.sh > CNAME` #creating a CNAME file with your customdomain.surge.sh
5. `surge` #to deploy and later browse in public

---

## Jenkins

Open Console/Command line --> Go to your Jenkins installation directory. Execute the following commands respectively:

1. to stop: `jenkins.exe stop`
2. to start: `jenkins.exe start`
3. to restart: `jenkins.exe restart`

---

## MongoDB

1. mongod #to start mongodb deamon
2. mongo #to start mongo client
3. show dbs #to list all the dbs in the mongodb; will work only after inserting data
4. use <<dbname>> #to create a new dbname
5. db.books.insert({ JSON Object}) #inserting value into a new collection books
6. show collections #show collections inside the DB
7. db.books.find() #list all documents inside the collection

---

## WebdriverIO

1. Have latest node installed
2. Setup Project by creating directory
   `$ mkdir webdriverio-test && cd webdriverio-test`  
   `$ npm init -y`
3. Install WebdriverIO CLI
   `\$ npm i --save-dev @wdio/cli`
4. Generate Configuration File
   `\$ npx wdio config -y`
5. Create Spec Files
   `$ mkdir .\test\specs`  
   `$ touch ./test/specs/basic.js`
6. Async mode: (in basic.js)
   ```javascript
   describe("webdriver.io page", () => {
     it("should have the right title", async () => {
       await browser.url("https://webdriver.io");
       await expect(browser).toHaveTitle("WebdriverIO");
     });
   });
   ```
7. Start the Testrunner
   `$ npx wdio wdio.conf.js`

---

## Chrome Developer Tools

1. To reduce Network Speed:
   `Three Dots -> More Tools --> Network Condiitons`

---


## Angular

1. `npm install -g @angular/cli@latest` #Install the latest ng client:
2. `ng version; ng v` #check version of angular
3. `ng generate; ng g` #generate new files for angular
4. `ng serve` #run the angular application
5. `ng build` #build the angular application
6. `ng lint` #check code for coding standards

---
## Paste JSON as Code

- Ensure the extension is installed
1. Create the _myFile_.json with the JSON text
2. Create the corresponding empty _myFile_.ts file
3. CLick `Ctrl + Shift + P` and type `Paste JSON as Code`
4. On the bar opened, give the toplevel interface name as _myFile_
5. The _myFile_.js gets automatically populated with it

---
## Numbered Bookmarks

- Ensure extension is installed
1. Navigate to the line where you wish to add the bookmark
2. Click on `Ctrl + Shift + <<anyNum>>` to add the bookmark there
3. To go to the bookmark, open the command pallette
4. Enter the number of the bookmark you wish to dive 

---
## Git Lens

  `"gitlens.menus": false` property has to be defined in the settings.json incase you wish to hide the toolbar on top of VSCode

---