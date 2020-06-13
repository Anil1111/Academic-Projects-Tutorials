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
  // is similar to a CSS Selector
  templateUrl: './server.component.html',
  // or template: `<<write html template here>>`
  styleUrls: ['./server.component.css']
  // to add an array of style files
  // or style: `h3 { color: blue }`
})
export class ServerComponent implements OnInit {
...
}
```

### Various forms of `selector` for a `component`

#### Selector as an Attribute

```typescript
@Component({
  selector: '[app-server]', // change selector to an attribute
})

// in corresponding HTML
<div app-server></div>
```

#### Selector as a class

```typescript
@Component({
  selector: '.app-server', // change selector to a class
})

// in corresponding HTML
<div class="app-server"></div>
```

#### Selector as ID does not work

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

## Databinding

### String interpolation

```typescript
<div class="container">
  // {{ should always be a string}}, thus {{ 'id' }} works
  // cannot add multiline expressions here
  <p>Server with {{'ID'}} {{serverId}} is {{getServerStatus()}}</p>
</div>
```

### Property Binding

```html
<button type="button" class="btn btn-primary" [disabled]="allowNewServer">Add Server</button>
// a valid TS expression can be added between the quotes
```

```typescript
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
```

#### Achieving string interpolation using property binding

```html
  <p [innerText]="allowNewServer"></p>
```

### Event Binding

```html
    <button type="button" class="btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button>

    <div class="form-group">
      <label for="server-name">Server Name</label>
      <input type="text" class="form-control" id="server-name" aria-describedby="emailHelp" (input)="onUpdateServerName($event)">
      <!-- $event is a reserved keyword that gives us access to event data -->
    </div>
    <p>{{serverName}}</p>
```

```typescript
  serverCreationStatus = 'No server was created';
  serverName = '';

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

    onUpdateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
    // prints the valie inputted in realtime on the DOM
  }

```

### Two way data binding with ngModel

For Two-Way-Binding to work, you need to enable the `ngModel` directive. This is done by adding the `FormsModule`  to the imports[]  array in the AppModule.
You then also need to add the import from `@angular/forms`  in the app.module.ts file:
`import { FormsModule } from '@angular/forms';`

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ],
  imports: [
    FormsModule
  ]
```

```html
  <div class="row">
    <input type="text" class="form-control" [(ngModel)]="serverName">
  </div>
```

## Directives

- They are instructions in the DOM. Components are such instructions which requires angular to add content.
- There are couple of built in directives like:

### Structural Directive - *ngIf

It either adds the HTML element into the DOM or does not.

```html
  <p *ngIf="serverCreated">Server was created and the server name is {{serverName}}</p>
```

#### *ngIf with else condition

```html
    <div class="col-6">
      <p *ngIf="serverCreated; else noServer">Server was created and the server name is {{serverName}}</p>
      <!-- ng-template used with a local reference(#noServer) marks a place within the template that can be referenced-->
      <ng-template #noServer>
        <p>No server was created</p>
      </ng-template>
    </div>
```

### Structural Directive - *ngFor

```html
<app-server *ngFor="let server of servers"></app-server>
```

```typescript
export class ServersComponent implements OnInit {
  servers = ['TestServer', 'TestServer2'];

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' +  this.serverName;
    this.servers.push(this.serverName);
  }

```

### Attribute directives - ngStyle

- It allows us to change the style dynamically
- Unlike structural directives, attribute directives do not add or remove elements from the DOM. They only change the element they are on!  
- The `[]` refers to the property binding on the property `ngStyle`.  
- It receives a JS object.

```html
<div class="container">
  <p [ngStyle]="{ backgroundColor: getColor() }">Server with {{'ID'}} {{serverId}} is {{getServerStatus()}}</p>
</div>
```

### Attribute directives - ngClass

- It allows us to change the css classes dynamically by attaching/removinf a class based on an expression
- Adds a class only if the condition is true

```html
<div class="container">
  <p [ngStyle]="{ backgroundColor: getColor() }"
     [ngClass]="{online: serverStatus === 'online'}">
      <!-- = { 'online-some-text': serverStatus === 'online'} -->
        Server with {{'ID'}}
    {{serverId}} is {{getServerStatus()}}
  </p>
</div>
```

### Combined example

```html
  <div class="row my-3">
    <div class="col">
      <!-- counterIndex can  be any name but index is a reserved keyword where counterIndex gives the iteration index-->
      <p *ngFor="let counter of paraClickCounter; let counterIndex =index"
        [ngStyle]="assignColor(counterIndex)"
        [ngClass]="assignClass(counterIndex)">
        {{counter}}
      </p>
    </div>
  </div>
```

```typescript
  changeParaVisibility(){
    this.paraVisible = !this.paraVisible;
    this.paraClickCounter.push(this.paraClickCounter.length + 1);
  }
  assignColor(counterIndex: number){
    return {
      backgroundColor: counterIndex >= 4 ? 'blue' : 'transparent'
    }
  }
  assignClass(counterIndex: number){
    return {'white-text': (counterIndex >= 4) };
  }
```
