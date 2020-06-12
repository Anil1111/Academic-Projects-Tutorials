# Steps to Run

## DRAG-DROP (All except DRAG_DROP-WEBPACK)

1. `yarn start` at ./ to run the project in browser
2. `tsc -w` at ./ to compile the `src/*.ts` files into `dist/*.js`

## DRAG_DROP-WEBPACK

1. `yarn run build` build the bundle.js
2. `yarn start` spin up the webpack-dev-server at 8080

### Setting up Typescript Project with Webpack

1. `npm init -y` to initiate a node project with package.json
2. `npm i --save-dev typescript` install typescript
3. `tsc --init` in project folder to create tsconfig.json
4. Edit the `tsconfig.json` file as per [Typescript Reference]('../XNotes/Typescript.md')
5. Crete the `webpack.config.ts` file as per [Webpack Reference]('../XNotes/Webpack.md')

### package.json

```json
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "lite-server": "^2.5.4",
    "nodemon": "^2.0.4",
    "ts-loader": "^7.0.5",
    "typescript": "^3.9.3",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  }
```

---

## Sample

Uncomment the js files in the script tag of `./index.html`

1. `npm start` at ./ to run the project
2. `tsc -w` at ./ to compile the `src/*.ts` files into `dist/*.js`
3. `nodemon file.js` from `dist/*.js` file

---

## LibrariesWithTS

`npm start` to view the console window of the browser

---

## TSWithReact

`npm start` to spin up the react dev server

---

## TSWithNode

`tsc -w` to compile all TS into JS in the ./dist folder
`npm start` to run nodemon on app.js from ./dist

---
