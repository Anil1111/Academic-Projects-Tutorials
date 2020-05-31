# Angular

## Angular CLI commands:
1. `ng new <<AppName>>` create an angular application
2. `ng version; ng v` #check version of angular
3. `ng generate; ng g` #generate new files for angular
4. `ng serve --open` #run the angular application; `--open` the optional flag opens the app in the default browser
5. `ng build` #build the angular application; by default it is the development build
6. `ng lint` #check code for coding standards; ``
7. `ng help` for help options
8. `ng test` runs the test runner karma which uses the jasmine framework that uses spec.ts(specification) files
9. `ng e2e` runs the end to end integration test using protractor on top of selenium automation testing tool

## Angular CLI for Interacting with Project
1. `ng g c <<compName>>` / `ng generate component <<componentName>>` generates a new component
    - the component that gets generated will have the class name of `compNameComponent` in `compName.component.(html|css|spec.ts|ts)`
2. `ng g s <<serviceName>>` / `ng generate service <<serviceName>>` generates a new service



## NPM Commands
1. `npm install -g @angular/cli@latest` #Install the latest ng client:


## Angular files
1. `src/app` all the angular code is present here
2. `src/assets` all resources including images are stored
3. `environments` configuration for supporting different environments
4. `tsconfig.json` configuration file for TS support
5. `src/polyfills.ts` to ensure browser compatibility
6. `src/styles.css` global css style
7. `src/test.ts` starting point for running the unit test   
8. `angular.json` all the angular cli commands are defined

