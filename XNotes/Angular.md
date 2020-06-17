# Angular

## Angular CLI commands

1. `ng new <<AppName>>` create an angular application
2. `ng version; ng v` #check version of angular
3. `ng generate; ng g` #generate new files for angular
4. `ng serve --open` #run the angular application; `--open` the optional flag opens the app in the default browser
5. `ng build` #build the angular application; by default it is the development build
6. `ng lint` #check code for coding standards; ``
7. `ng help` for help options
8. `ng test` runs the test runner karma which uses the jasmine framework that uses spec.ts(specification) files
9. `ng e2e` runs the end to end integration test using protractor on top of selenium automation testing tool

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

## NG Commands

### ng add

`ng add` makes adding new capabilities to your project easy. ng add will use your package manager to download new dependencies and invoke an installation script (implemented as a schematic) which can update your project with configuration changes, add additional dependencies (e.g. polyfills), or scaffold package-specific initialization code.  
`ng add @angular/material`

### ng generate

1. `ng g c <<compName>>` / `ng generate component <<componentName>>` generates a new component
    - the component that gets generated will have the class name of `compNameComponent` in `compName.component.(html|css|spec.ts|ts)`
2. `ng g s <<serviceName>>` / `ng generate service <<serviceName>>` generates a new service
3. `ng g m <<moduleName>>` generates a module

#### Generating components specific to a module

`ng g m NewMoudle` to generate a module.  
`ng g c new-module/new-component` to create NewComponent with the entry tagged to the new-module.
`ng g c new-module` to create component with the same name as the module.
`ng g c new-module/new-component --module=new-module.module` to explicitly mention

#### Skipping .spec testing files

1. `ng generate component component-name --skipTests=true`
2. `ng generate component component-name -s=true`
3. `Modify your angular.json file with the below`

```json
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "skipTests": true
        },
        "@schematics/angular:class": {
          "skipTests": true
        },
        "@schematics/angular:directive": {.
          "skipTests": true
        },
        "@schematics/angular:pipe": {
          "skipTests": true
        },
        "@schematics/angular:service": {
          "skipTests": true
        }
      },
```

#### Dry runs

`ng g c component-name -d=true`  
`ng g c component-name --dryRun=true`  

## Installing Angular highcharts

More information [here](https://github.com/highcharts/highcharts-angular)

1. `npm install highcharts-angular`
2. In your app.module.ts add the HighchartsChartModule:

    ```typescript
    import { HighchartsChartModule } from 'highcharts-angular';

    @NgModule({
      imports: [
        ...
        HighchartsChartModule
    ```

3. In a component that will be building your Highcharts charts you will need to import Highcharts first
`npm install highcharts --save`

4. Next, in the app.component.ts, in top lines where other imports are add another one for Highcharts:
`import * as Highcharts from 'highcharts';`

5. In the same file (app.component.ts) add to the template Highcharts-angular component selector highcharts-chart:

    ```html
    <highcharts-chart
      [Highcharts]="Highcharts"

      [constructorType]="chartConstructor"
      [options]="chartOptions"
      [callbackFunction]="chartCallback"

      [(update)]="updateFlag"
      [oneToOne]="oneToOneFlag"
      [runOutsideAngular]="runOutsideAngularFlag"

      style="width: 100%; height: 400px; display: block;"
    ></highcharts-chart>
    ```

6. Exporting option

    ```typescript
    import HC_exporting from 'highcharts/modules/exporting';
    HC_exporting(Highcharts);
    ```
