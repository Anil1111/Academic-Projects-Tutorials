# Angular

## Features

Is a JS framework that enables building reactive `Single Page Application (SPA)`

## How Angular works

1. The first single page loaded when an angular application loads up is `index.html`. The scripts are injected into the file by angular.
2. `main.ts` is the first code that gets executed and bootstraps `AppModule`.
3. `app.module.ts` then bootstraps the component `AppComponent` that will be loaded.
4. `app.component.ts` defines the `<app-root>` which is present in the `index.html`

## Components

### app.component.ts

It is the root component that holds all the other components. Each component has its own template, business logic, styling and allowing to split your complex app into reusable parts. Therefore, we can replicate these parts.

### Componnet Syntax

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

## Modules

Angular uses modules to bundle all your functionalities into packages.

### Syntax Modules

```typescript
import { ServerComponent } from './server/server.component'; // .ts extension is added automatically by webpack

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // new components need to be registered as angular by itself does not scan all the packages
  ],
  imports: [ // allows us to add other modules
    BrowserModule, // all base functionalities to work with the browser
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // component that angular must be aware during application load
})
export class AppModule { }
```
