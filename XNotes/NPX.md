# NPX

## Why NPX

- npx is a tool for running npm packages that live inside of a _local_ `node_modules` folder or are not installed globally.
- `npx` looks into the _local_ `/node_modules` folder for the package and if it can’t find it, it will download and run it without having that package globally installed.
- npx comes bundled with npm version `5.2+`

```bash
# Before
node ./node_modules/.bin/mocha

# Now with npx:
npx mocha
```

- `npx` can reach into node_modules to run package binaries
- `npx` is a replacement for installing global packages. It encourages you to - install packages locally, but still be able run them as if they were global, - just with `npx`.
- Make sure you `--save` or `--save-dev` the package first. This keeps dependent packages listed in package.json, so that npx can use the local version instead of downloading it to the npm cache.

```bash
npm i -D gulp gulp-cli
npx gulp
```

### Run any one off commands with npx

npx will download and execute any package you give it. This is useful for one-off commands, such as:

```bash
npx pa11y https://scottlogic.com
```

```bash
npx cowsay goodbye!
```

Using react

```bash
npx create-react-app harrys-site
```

Running a static web server

```bash
cd my-website
npx http-server
```

Deploying to a live server

```bash
cd my-website
npx now --public
```
