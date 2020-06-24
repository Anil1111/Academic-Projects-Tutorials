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

### Basic Syntax

- They are instructions in the DOM. Components are such instructions which requires angular to add content.
- There are couple of built in directives like:

```html
  <div *ngIf="onlyOdd">
    <li class="list-group-item"
      *ngFor="let oddNumber of oddNumbers"
      [ngClass]="{'odd': oddNumber%2 !== 0}"
      [ngStyle]="{backgroundColor: oddNumber%2 !== 0? 'yellow': 'trnaasparent'}"
    >{{oddNumber}}</li>
  </div>
```

### Structural Directive - `*ngIf`

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

### Structural Directive - `*ngFor`

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

#### Suing `[ngSwitch]` structural directive

```html
    <div [ngSwitch]="counter">
      <h6 *ngSwitchCase="5" class="text-info">Value is 5</h6>
      <h6 *ngSwitchCase="10" class="text-info">Value is 10</h6>
      <h6 *ngSwitchCase="15" class="text-info">Value is 15</h6>
      <h6 *ngSwitchDefault class="text-info">Value is not mentioned</h6>
    </div>
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

```html
    <p *ngFor="let counter of paraClickCounter; let counterIndex =index"
      [ngStyle]="assignColor(counterIndex)"
      [ngClass]="assignClass(counterIndex)">
      {{counter}}
    </p>
```

Corresponding TS file

```typescript
  assignColor(counterIndex: number){
    return {
      backgroundColor: counterIndex >= 4 ? 'blue' : 'transparent'
    }
  }
```

### Attribute directives - ngClass

- It allows us to change the css classes dynamically by attaching/removinf a class based on an expression
- Adds a class only if the condition is true

```html
<div class="container">
  <p [ngClass]="{online: serverStatus === 'online'}">
      <!-- = { 'online-some-text': serverStatus === 'online'} -->
        Server with {{'ID'}}
    {{serverId}} is {{getServerStatus()}}
  </p>
</div>
```

```html
    <p *ngFor="let counter of paraClickCounter; let counterIndex =index"
      [ngStyle]="assignColor(counterIndex)"
      [ngClass]="assignClass(counterIndex)">
      {{counter}}
    </p>
```

Corresponding TS file

```typescript
  assignClass(counterIndex: number){
    return {'white-text': (counterIndex >= 4) };
  }
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

### Custom Directives

#### Basic Directive

The below is `not` recommended as we are directly changing the DOM and might end up in error and therefore `render` needs to be used.

- basic-highlight.directive.ts

```typescript
@Directive({
  selector: '[appBasicHighlight]'
  // [] tells angular to select the directive as an attribute
})
export class BasicHighlightDirective implements OnInit{

  // getting access to the element on which the directive sits on
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    // not the best practise
  }
}
```

- directives.component.html

```html
    <div class="col">
      <!-- We do not use [], as we use it like an attribute -->
      <p appBasicHighlight>Style me with basic directive</p>
    </div>
```

- directives.module.ts

```typescript
@NgModule({
  declarations: [
    DirectivesComponent,
    BasicHighlightDirective // declaring the directive added
  ],
```

#### Using render in a directive

Better approach of updating the DOM as there are several environments in angular including service workers where DOM is not available and thus render works everywhere.

- better-highlight.directive.ts

```typescript
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // setStyle method allows us to change the style of the DOM
    // setStyle(elementReference, propertyToChange, value, anyFlags)
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

}
```

```html
      <p appBetterHighlight>Style me with a better directive</p>
```

#### Using HostListener to listen to host events

```html
    <p appBetterHighlight>Style me with a better directive</p>
```

```typescript
  // mouseenter is the event supported by the DOM element
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }
```

#### Using HostBinding to bind to Host Properties

Can bind to any property on the element the directive is attached to

```typescript
  // '' defines to which prooperty of hosting element we want to bind
  // setting initial value to transparent
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';


  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // no need to use the renderer as we already have the `style.backgoroundColor` property binded to `backgroundColor`
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
```

#### Binding properties to directives

If the directive itself must have a number of properties to which you want to bind some values using property binding.

```html
    <!-- Binding the properties from Directives using property binding  -->
    <!-- The angular itself figures whether the property binding belongs to our own directrives or the template-->
    <p appPropertyBindingHighlight
      [defaultColor]="'pink'"
      [highlightColor]="'orange'"
    >Custom binding</p>
```

```typescript
export class PropertyBindingHighlightDirective implements OnInit{
  // directive that allows binding values to its custom properties
  @Input() defaultColor = 'pink';
  @Input() highlightColor = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @HostBinding('style.color') color = 'white';

  // mouseenter is the event supported by the DOM element
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.color = 'black';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
```

- Another variety with binding directly on the directive

```html
    <!-- If you provide an alias to any of the above properties as the name of the directive then you can omit and bind directly to the directive -->
    <!-- can also use appPropertyBindingHighlight="orange" by removing the [] and ''-->
    <p [appPropertyBindingHighlight]="'orange'"
    [defaultColor]="'pink'"
  >Custom binding</p>
```

```typescript
  @Input('appPropertyBindingHighlight') highlightColor = 'orange';
```

#### What is * used on structural directives

```html
    <div *ngIf="onlyOdd">
      <h6 class="text-info">Example of structural directive without *</h6>
    </div>
```

- Is internally transformed into:

```html
    <!-- The below is an example of ngIf without * as angular internally does this conversion for us-->
    <ng-template [ngIf]="onlyOdd">
      <h6 class="text-info">Example of structural directive without *</h6>
    </ng-template>
```

#### Creating custom structural directive

Example of `*appUnless` as an alternative to `*ngIf`

```typescript
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // set converts appUnless into a setter method that gets executed whenever unless changes from outside
  // must share the same name as the directive name as we are property binding on [appUnless] (which is derived from *appUnless) externally
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      return;
    }
    this.vcRef.clear();
  }

  // since structural directives get converted into ng-template behind the scenes, we need access to the templateRef
  // unlike element ref for access to only the element
  // constructor takes the WHAT - TemplateRef, WHERE - ViewContainer
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

}
```

```html
    <div *appUnless="!onlyOdd">
      <h6 class="text-warning">Example of custom structural directive</h6>
    </div>
```

## Databinding - Communication between components

### Binding to custom properties

For pushing a data from the parent component to its child componenet.  
All properties of a component are only accessible within the component and cannot be binded from outside. In order to make it accessbile, we need to add `@Input` decorator

databinding.component.ts

```typescript
    <div class="col-12">
      <app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>
    </div>
```

server-element.component.ts

```typescript
export class ServerElementComponent implements OnInit {
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };
```

#### Assigning an alias to custom properties

databinding.component.html

```typescript
    <div class="col-12">
      <app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"></app-server-element>
    </div>
```

server-element.component.ts

```typescript
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { // alias is srvElement that needs to be used from outside
    type: string;
    name: string;
    content: string;
  };
```

### Binding to custom events

Pushing data from the child component into the parent component.  

```html
  <app-cockpit (serverCreated)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)"></app-cockpit>
```

```typescript
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
```

#### Assigning alias to custom events

To avoid exposing the property names from the child component to the parent component.

```html
  <app-cockpit (serverCreated)="onServerAdded($event)" (bpCreated)="onBlueprintAdded($event)"></app-cockpit>
```

```typescript
  @Output('bpCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
```

## View Encapsulation

Ensures that the css/scss styles gets applied only to the corresponding component. This behaviour is enforced by angular by attaching random attributes to each element. Therefore, each component will have the same attribute and so only its specific style gets applied.

### Overriding encapsulation

```typescript
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // `````Emulated````` is the default property
  // `None` removes all the random attributes from each element and assigns the css properties globally / application wide affecting other components
  // `Native` not supported by browsers
})
```

## Using local references in Templates

- Local references can be placed on any HTML element in the syntax `#some-name`.
- It holds a reference to the entire element and not just to its value.
- It can be used anywhere inside the template but not in the corresponding typescript file.

```html
    <!-- <input type="text" class="form-control" id="name" name="name" [(ngModel)]="newServerName"> -->
    <input type="text" class="form-control" id="name" name="name" #serverNameInput>

  <!-- passing the local referebce `serverNameInput`-->
  <button class="btn btn-primary mx-2" type="button" (click)="onAddServer(serverNameInput)">Add Server</button>
```

```typescript
  onAddServer(nameInput) {
    // console.log(nameInput); // ouputs the input element as a whole
    console.log(nameInput.value); // outputs the value of the input element
  }
```

## Access to the template and DOM with @ViewChild

### @ViewChild

To reference the local reference from HTML directly to the  TS file.
`@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;`
The same change add `{ static: true }` needs to be applied to ALL usages of `@ViewChild()`, `@ContentChild()`if you plan on accessing the selected element inside of `ngOnInit()`.

databinding.component.html

```html
  <input type="text" class="form-control" id="content" name="content" #serverContentInput>
```

```typescript
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      // DO NOT do the below
      // this.serverContentInput.nativeElement.value = 'something'
    });
  }
```

## Projecting content using ng-content hook

Can be used to project content from parent component into the child component by creating the `ng-content` hook in the child.

### Original HTML without ng-content

Parent Component

```html
  <div class="row">
    <div class="col-12">
      <app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>
    </div>
  </div>
```

Child Component

```html
<div class="card my-3">
  <div class="card-header">
    {{ element.name }}
  </div>
  <div class="card-body">
    <p class="card-text">
      <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p>
  </div>
</div>
```

### Updated HTML without ng-content

Parent Component

```html
  <div class="row">
    <div class="col-12">
      <app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement">
        <div class="card-body">
          <p class="card-text">
            <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
            <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
          </p>
        </div>
      </app-server-element>
    </div>
  </div>
```

Child Component

```html
<div class="card my-3">
  <div class="card-header">
    {{ element.name }}
  </div>
  <ng-content></ng-content>
</div>
```

## Getting access to ng-Content using `@ContentChild`

lifecycle.component.html

```html
    <p class="card-text" #contentPara>
      <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
      <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
    </p>
```

```typescript
  @ContentChild('contentPara', {static: true}) contentPara: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content is ' + this.heading.nativeElement.textContent); // will return empty as View not initialised
    console.log('Para content is ' + this.contentPara.nativeElement.textContent); // will return empty as Content not initialised
  }
```

## Component Lifecycle Hooks

### Different Lifecycle Hooks

1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

- `Constructor()` runs first
- Corresponding to each lifecycle hook, we must implement each as an `interface`

### ngOnChanges

- Executed multiple times
- Executed when the component is created
- Executed when a bound property changes (`@Input`)
- Cannot be run simultaneously with `ngDoCheck`

```typescript
export class ServerElement2Component
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

        ngOnChanges(changes: SimpleChanges) {
          console.log('ngOnChanges called');
          console.log(changes); // element: SimpleChange; where element is the property whose value we receive as input
        }
  }
```

### ngOnInit

- Executed once the component is inititalised (Not added to DOM yet; but properties can be accessed)
- Runs after the constructor

```typescript
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentPara', {static: true}) contentPara: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content is ' + this.heading.nativeElement.textContent); // will return empty as View not initialised
    console.log('Para content is ' + this.contentPara.nativeElement.textContent); // will return empty as Content not initialised
  }
  ngAfterContentInit() {
    console.log('ng after content init called');
    // will be called only once as only when we add new servers does the ng-content gets projected
    console.log('Para content is ' + this.contentPara.nativeElement.textContent); // returns the content para
  }
  ngAfterViewInit() {
    console.log('ng after view init called');
    console.log('Text content is ' + this.heading.nativeElement.textContent);
    // returns the server name as the view is now initialised
  }

```

### ngDoCheck

- Executed multiple times whenever angular change detection runs (whenever anything changes from inside of the template)
- Executed on every events including those dont make any change (click, timer or observable resolving)
- Cannot be run simultaneously with `ngOnChanges`
- Must be used carefully as it might cause performance issue since it is called several times

### ngAfterContentInit

- Executed whenever content projected using `ng-content` has been initialized (in the parent component)

### ngAfterContentChecked

- Executed whenever the projected content has been checked by the change detection

### ngAfterViewInit

- Executed whenever the view of the component has been initialised
- We can access the values of `@ViewChild` here

### ngAfterViewChecked

- Executed whenever the view of the component has been checked by the change detection

### ngOnDestroy

- Executed whenever the component is destroyed (eg- `*ngIf`)
- Place to do clean up work before the object is removed

## Services

Should never be used by simple instantiation of the respective class. Can be used for the following circumstances:

- Logging
- Data Storage
- Component communication

Services can be injected at different hierarchies including:

- `AppModule` same instance of service is available application wide
- `AppComponent` same instance of service is available for all components (all children components) but not other services
- `Any Other component` same instance of service is available for all components and its children

Therefore, we need to be careful about adding the services to the `providers` array as it creates a new instance wherever mentioned. Thus, if you are dealing with the same dataset and making multiple changes to it from different components, it is advisable to have it provided in the top most compinent. But instantiating the service in constructor is still required.

>By providing the service on the root/custom root module allows us to use services on other services. For such cases it is mandatory to provide the `@Injectable` decorator on top for services where other services need to be injected. Others it is optional but recommended.
**No need to append the declared services on the providers array of the module**

### What is Hierarchical Injector / Dependency Injector

It injects an instance of the service class to a component which is dependent on the functionality provided by the instance.

#### Without @Injectable decorator

logging.service.ts

```typescript
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
```

Component on which you will inject the logging service

```typescript
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService] // we tell angular how to create the loggingService; this creates a new instance of the Logging Service
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // we append the service into the constructor to instantiate it and let the angular know how to handle loggingService
  constructor(private loggingService: LoggingService) {};

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
```

#### With @Injectable decorator

accounts.service.ts

```typescript
@Injectable({
  providedIn: 'root'
}) // adding @injectable directive to allow other services to be injected into this service
export class AccountsService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test Account', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  constructor(private loggingService: LoggingService) { }

  addAccount(account: Account) {
    this.accounts.push(account);
    this.loggingService.logStatusChange(account.status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
```

```typescript
@Injectable({
  providedIn: 'root'
}) // @Injectable decorator is optional as no services injected here
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
```

Component on which you will inject the accounts service

```typescript
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  ...
}
```

```typescript
export class ServicesComponent implements OnInit{
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService, private usersService: UsersService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts; // always perform initialisation from the service data in ngOnInit and not the constructor
  }
}
```

Changes to services.module.ts

```typescript
@NgModule({
  declarations: [ServicesComponent, AccountComponent, NewAccountComponent],
  imports: [CommonModule, FormsModule],
  providers: [] // no changes required in case we place the @Injectable({ providedIn: 'root'})
})
export class ServicesModule {}
```

### Using services for cross component communication

accounts.service.ts

```typescript
export class AccountsService {
  statusUpdated = new EventEmitter<string>(); // defining the eventemitter to enable cross component communication
  ...
}
```

account.component.ts

```typescript
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status); // emitting the event from the service whenever the account component changes
    this.accountsService.statusUpdated.emit(status);
  }

}
```

new-account.component.ts

```typescript
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {  }

  ngOnInit() {
    // subscribing to the event emitted by the service
    this.accountsService.statusUpdated.subscribe((status: string) => {
      console.log('New Status:' + status);
    });
  }

}
```

#### Example where you wish to NOT send the reference to the object in services

```typescript
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simply a test', '../../../assets/images/recipe1.jpg'),
    new Recipe('Another recipe', 'Simply another test', '../../../assets/images/recipe2.jpg'),
  ];

  getRecipes() {
    // returning this.recipes will send the reference to the recipes list defined here
    // therefore any modification will be reflected on this main list
    // we use the slice() method to return a new recipes array
    return this.recipes.slice();
  }
}
```

## Routing

Provides navigation support to an angular project

### Syntax of `app-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: BasicComponent}, // initial component that will be loaded at http://localhost:portNo/; BasicComponent will replace the contents of <router-outlet> in app.component.html;
  // <router-outlet> reuires importing the RouterModule in app.module.ts if routers need to be enabled in non root directory
  {path: 'databinding', component: DatabindingComponent}, // path http://localhost:portNo/databinding will get mapped
  ...
  {path: '**', component: ErrorComponent} // path ** corresponds to any BAD URL that cannot be taken care by angular as no existing routes matches;
  // it must come last in this array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // denotes that routes provides routing in root of the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Corresponding `app.module.ts`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // makes the exported routing available throughout the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Corresponding `app-sub-directory.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)], // routermodule is now imported for the children
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
```

### Using Routerlinks

Routerlink is a directive that enables routing without reloading of the page, preventing the default behavior of links and checks the route configuraiton(`app-routing.module.ts`) to determine the matched route.

```html
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link active" routerLink="/routing">Home</a></li>
    <!-- is same as -->
    <!-- <li class="nav-item"><a class="nav-link active" routerLink="./">Home</a></li> -->

    <li class="nav-item"><a class="nav-link" routerLink="/routing/servers">Servers</a></li>
    <!-- is same as -->
    <!-- <li class="nav-item"><a class="nav-link" routerLink="./servers">Servers</a></li> -->
    <!-- <li class="nav-item"><a class="nav-link" routerLink="servers">Servers</a></li> -->

    <!-- If we use the porperty binding notation, then we need to use strings inside it -->
    <!-- [] allows us to provide complex paths -->
    <li class="nav-item"><a class="nav-link" [routerLink]="['/routing/users']">Users</a></li>
    <!-- is same as -->
    <!-- <li class="nav-item"><a class="nav-link" [routerLink]="['/routing/users']">Users</a></li> -->
  </ul>
```

### Navigation Paths

#### Absolute Path

Where the routerLink starts with `/`, it denotes from the root URL. Since it is an absolute path, the working component from which it is called has no effect.  
**The routerLink gets added to `/`**

- Mentioning `/` corresponds to `http://localhost:4200/`  
- Mentioning `/routing` corresponds to `http://localhost:4200/routing`  

```html
<li class="nav-item"><a class="nav-link active" routerLink="/routing">Home</a></li>
```

#### Relative Path

Where the router link starts with `./` or `NO /`, it does NOT denote the root URL. Since it is a relative path, the working component has an effect on the final router link. Assuming we are on `http://localhost:4200/routes`  
**The routerLink gets appended to existing path**

- Mentioning `./` corresponds to `http://localhost:4200/routes` itself
- Mentioning `./routing` corresponds to `http://localhost:4200/routes/routing` itself
- Mentioning `routing` corresponds to `http://localhost:4200/routes/routing`

#### Using `../` relative path

Where the router link starts with `../`, it does NOT denote the root URL. Since it is a relative path, the working component has an effect on the final router link. Assuming we are on `http://localhost:4200/routes`. Assuming we are on `http://localhost:4200/routes`  
**The routerLink gets moved on level up from existing component**

- Mentioning `../routing` corresponds to `http://localhost:4200/routing` itself
- If existing component is `/routing/1` then Mentioning `../routing` corresponds to `http://localhost:4200/routing` as `/routing/1` is the same component

#### For [routerLink]="['/routing/users']"

Here realative paths will only work if the routerLink is operating on the parent components URL, otherwise relative paths will not work but will just get appended.

### Using Active router link

The `routerLinkActive` option automatically checks the route URL to identify which routes are activated currently and uses it to assign the given class to the html class.

- `routerLinkActive="active"` where active can be any class of choice which will dynamically get appended to the element on which it is defined.

Since the `root` component or likewise cases can be used to form other routes, they will always be identified as active. So we should add the additional attribute of `routerLinkActiveOptions`  

- `[routerLinkActiveOptions]="{exact: true}"` tells angular to check for exact matches of route.  
- For `http://localhost:4200/routes` has two active router links namely `/` and `/routes`. So as to avoid `/` from being the active we should use `routerLinkActiveOptions`
- **`routerLinkActive` and and `[routerLinkActiveOptions]` should be placed on the line tag enclosing the anhcor tag in bootstrap**

```html
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link"
        routerLink="./"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: true}"
      >Home</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="./servers" routerLinkActive="active">Servers</a></li>
    <li class="nav-item"><a class="nav-link" [routerLink]="['./users']" routerLinkActive="active">Users</a></li>
  </ul>
```

### Navigating programmatically

Enables Navigation from the TS Code

#### Absolute Routing promgrammatically

```html
<button class="btn btn-primary" (click)="onLoadServers()">Load Server</button>
```

```typescript
export class HomeComponent implements OnInit {
  constructor(private router: Router) { } // instantiate the router
  onLoadServers() {
    // performing complex calculation in TS

    //navigating using the absolute path
    // relative path is not supported in the below syntax variant
    this.router.navigate(['/routing/servers']);
  }
}
```

#### Relative Routing promgrammatically

```typescript
export class ServersComponent implements OnInit {
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute // provides information regarding the current route as router isnt aware of it
  ) {}

  onReload() {
    // the below now supports relative paths as we provide the options { relativeTo: this.route }
    this.router.navigate(['./servers'], { relativeTo: this.route });
  }
}

```

### Passing parameters to Routes

`app-routing.component.ts`

```typescript
  {path: 'user/:id', component: UserComponent},
```

### Fetching route parameters

- **Route params are always of TYPE string and may need to be converted into desired type**

```typescript
  {path: 'user/:id/:name', component: UserComponent},
```

```typescript
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // below method works to use the route params in URL to construct the view
    // any reload of page with a different set of params matching the URL pattern will not update the view
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
  }
}
```

```html
  <p>User with ID {{user.id}} loaded.</p>
  <p>User name is {{user.name}}</p>
```

### Fetching route parameters reactively

Allows handling of any change in route params. Using subscribe to allow any reload of page with a different set of params matching the current URL pattern to update the view.

```typescript
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = 'id';
    const name = 'name';
    this.user = {
      id: this.route.snapshot.params[id],
      name: this.route.snapshot.params[name]
    };
    // route.params return an observable
    // subscribing to allow loading of the view with different/cahnged route params that will cause angular to detect any change in URL
    // for making [routerLink]="['/routing/users', 10, 'Anna']" to work
    this.route.params.subscribe((params: Params) => {
      this.user.id = params[id];
      this.user.name = params[name];
    });
  }
}
```

```html
<!-- providing absolute path ['/routing/users', 10, 'Anna'] is an alternative -->
<!-- Below relative path requires going up 3 levels, each for user,id and name -->
<a [routerLink]="['../../../users', 10, 'Anna']">Load Anna with ID 10</a>
```

#### Automatic Unsubscribing by Angular

Anngular removes the subscription when the component is destroyed. We can simulate it manually using:

```typescript
import { Subscription } from 'rxjs';

export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params[id];
      this.user.name = params[name];
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
```

### Passing Query Parameters and fragments

#### Usage in HTML

- `Query params` are of the format `http://localhost:4200/routes?mode=editing` where mode is a query param. Represented by a `#`.  
- `Fragments params` are of the format `http://localhost:4200/routes?mode=editing#bottom` where bottom is a query fragment. Represented by a `#`.

```html
  <!-- [queryParams] is a bindable property on the routerLink directive that takes a key value pair to create URL?allowEdit=1 -->
  <!-- [fragment] is a bindable property on the routerLink directive that takes only a single value to create URL?#loading -->

<!-- we can also write fragment="loading" -->

  <a
    [routerLink]="['./',5, 'edit']"
    [queryParams]="{allowEdit: 1}"
    [fragment]="'loading'"
    href="javascript:void(0)"
    class="list-group-item list-group-item-action"
    *ngFor="let server of servers">
    {{ server.name }}
  </a>
```

#### Usage programmatically

```html
<button class="btn btn-primary mx-2" (click)="onLoadServer(1)">Load Server ID:1</button>
```

```typescript
  onLoadServer(id: number) {
    this.router.navigate(['./servers', id, 'edit'], {
      relativeTo: this.route,
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }
}
```

#### Retrieve Query Parameters and fragments

```typescript
  ngOnInit() {
    // constants to use in the subscribe mthod
    const id = 'id';
    const allowEdit = 'allowEdit';
    // outputting the params value
    console.log('Query params is ' + this.route.snapshot.queryParams[allowEdit]);
    console.log('Fragment is ' + this.route.snapshot.fragment);

    this.route.queryParams.subscribe((params: Params) => {
      console.log(params[allowEdit]);
    });
    this.route.fragment.subscribe();
  }
```

#### Handling Query Params by preserving or merging

```typescript
  onEdit() {
    this.router.navigate(
      ['./edit'],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve'
        // use the 'preserve' id you wish to preserve the original query params
        // use the 'merge' if you wish to merge by adding new queryparams to the existing ones otherwise it will be overwritten
      }
    );
  }
```

### Child Routes

*-routing.module.ts

```typescript
const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'users',
        component: UsersComponent,
        children: [
          { path: ':id/:name', component: UserComponent },
        ]
      },
      { path: 'servers',
        component: ServersComponent,
        children: [
          { path: ':id', component: ServerComponent },
          { path: ':id/edit', component: EditServerComponent },
        ]
      },
    ],
  },
  { path: '**', component: ErrorComponent },
];
```

Corresponding components where children paths are defined: Eg: ServerComponent

```html
  <div class="col-12 col-sm-4">
    <!-- This new hook will be used by all the child routes of the servers component -->
    <!-- The below will only show the server.component as it has been defined in the respective routing module -->
    <router-outlet></router-outlet>

    <!-- <button class="btn btn-primary" (click)="onReload()">Reload Servers</button>
    <app-edit-server></app-edit-server>
    <hr>
    <app-server></app-server> -->
  </div>
</div>
```

### Redirecting and Wildcard requests

```typescript
  // will redirect the requests from `http://localhost:4200/redirect` to `http://localhost:4200/error`
  { path: 'redirect', redirectTo: '/error' },

  // should be placed at the end always, so that any routes not mentioned explicity can be handled
  { path: '**', component: ErrorComponent },
```

#### Redirection with full path matching

By default, Angular matches paths by prefix. That means, that the following route `''` will match both `/recipes` and just `/`.  
`{ path: '', redirectTo: '/somewhere-else' }`  
Of course every path starts with ''To fix this behavior, you need to change the matching strategy to "full" :
`{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full'}`
Now, you only get redirected, if the full path is `''`

## Route Guards

Used for running logic/functionality that decides whether the defined routes should be accessible to a user or not. Such features are referred to as `guards` by angular.

### Protecting routes using canActivate

app-routing.module.ts

```typescript
  { path: 'services', component: ServicesComponent },
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
      },
      {
        path: 'servers',
        component: ServersComponent,
        canActivate: [AuthGuardService], // protects the route 'servers' but not its child routes
        children: [
          { path: ':id', component: ServerComponent },
          { path: ':id/edit', component: EditServerComponent },
        ],
      },
    ],
  },
```

fake-auth.service.ts

```typescript
export class FakeAuthService {
  loggedIn = false;

  constructor() { }

  // faking authentication
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  // simulating the time taken to authenticate a user
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.loggedIn);
      }, 1000);
    });
    return promise; // will return false after 1s always
  }
}
```

auth-guard.service.ts

```typescript
export class AuthGuardService implements CanActivate {

  constructor(private fakeAuthService: FakeAuthService, private router: Router) { }

  // canActivate can run both asynchronously(Observable and Promise) or Synchronously(boolean)
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.fakeAuthService.isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return true;
        }
        this.router.navigate(['/routing/']); // navigate back to root if not authenticated
        return false;
      });
  }
}
```

### Protecting routes using CanActivateChild

*-routing.module.ts

```typescript
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],  // canActivateChild protects all the child routes of 'servers'
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
```

auth-guard.service.ts

```typescript
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private fakeAuthService: FakeAuthService, private router: Router) { }

  // to protect the route along with the child routes
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
```

### Controlling navigation with canDeactivate

Used to check whether the user is accidently navigating away when either some changes have been made to inputs or changes not saved.

*-routing.module.ts

```typescript
      {
        path: 'servers',
        component: ServersComponent,
        // this path will be activated only when the UAthGuard returns true
        canActivate: [AuthGuardService],
        // canActivateChild all the child routes of 'servers'
        canActivateChild: [AuthGuardService],
        children: [
          { path: ':id', component: ServerComponent },
          {
            path: ':id/edit',
            component: EditServerComponent,
            // on trying to navigate to another route from edit-server, the CanDeactivateGuardService is called
            canDeactivate: [CanDeactivateGuardService],
          },
        ],
      },
```

can-deactivate-guard.service.ts

```typescript
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

// to ensure that CanDeactivateGuardService and edit-server.component have the method canDeactivate
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuardService
  implements CanDeactivate<CanComponentDeactivate> {
  // implements CanDeactivate provided by angular
  // it is a generic type that wraps our interface CanComponentDeactivate

  // Defines the canDeactivate method forced by the CanDeactivate angular interface
  // Method that will automatically called when user leaves the component
  // the component needs to be of type CanComponentDeactivate ie should implement its canDeactivate method

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot // optional
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate(); // calls the canDeactivate of the edit-server component
    // provides the connection between the guard and the component
  }
}
```

edit-server.component.ts

```typescript
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false; // provides information whether the updateServer button was clicked or not for configuring canDeactivate guard

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(
      ['../'],
      { relativeTo: this.route}
    );
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name && this.serverStatus !== this.server.status) || !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    return true;
  };
```

### Passing STATIC data to a route

*-app.routing.module.ts

```typescript
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }, // passing static data in the route to display in ErrorPageComponent
  },
```

error-page.component.html

```html
<h4 class="text-danger">{{errorMessage}}</h4>
```

error-page.component.ts

```typescript
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const messageData = 'message';
    this.errorMessage = this.route.snapshot.data[messageData]; // passed from the *-routing.module.ts
    this.route.data.subscribe((error: Data) => {
      this.errorMessage = error[messageData];
    });
  }

}
```

### Passing DYNAMIC data to a route with the Resolve guard

*-app.routing.module.ts

```typescript
      {
        path: 'servers',
        component: ServersComponent,
        canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: ':id',
            component: ServerComponent,
            // resolve is used to load any asynchronous data before the component is rendered
            // data resolved will be saved in 'server'
            resolve: { server: ServerResolverService },
          },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [CanDeactivateGuardService],
          },
        ],
      },
```

server-resolver.service.ts

```typescript
export class ServerResolverService implements Resolve<Server>{

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    const idParam = 'id';
    return this.serversService.getServer(+route.params[idParam]);
    // will perform loading of data will be performed before actual loading of the component
    // can be used to return an observable/promise from a http request
  }
}
```

server.component.ts

```typescript
  ngOnInit() {
    // 'server' will contain the data loaded by the resolver form the *-routing.module.ts and must match the name mentioned there
    const serverData = 'server';
    this.route.data.subscribe((data: Data) => {
      this.server = data[serverData];
    });
  }
```

### Understanding location stratergies ny using Hash Mode

- Generally, any URLs used to work with angular in the browser **is ALWAYS parsed by the server(hosting the application) first**
- If the route cannot be handled by your server, it should return the index.html file
- By default, in development server has a special configuration that handles any 404(file not found) errors by loading the index.html file holding all the angular code
- If this does not work, then use the hash mode by doing the following:

app-routing.module.tsonEditRecipe

```typescript
const routes: Routes = [ ..
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // will embed # before all the routes
  // since the server only parses URL before the #, the angular can operate on the values after #
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Observables

- Can be thought to be a data source including User Events, Http Requests and similar asynchronous tasks.
- Observables can be handled by writing code to either:
  - Handle Data
  - Handle Error
  - Handle Completion
- They are constructs to which you can subscribe to be informed of changes to data
- Added to angular by a package `rxjs`

- Observables are the ones who throw some values
- Observers are the one who catch those thrown values

The observable can emit the following event:

- **next**: Event is used to emit the next value from the Observable.
- **error**: Following an event is used to notify Observer about some error.
- **complete**: Represents that Observable has completed emitting data.

### Building Custom Observable by using inbuilt `interval()`

Angular manages the subscription of all the observables provided by it

```typescript
export class ObsHomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    // custom Observable
    // built in function that gives an observable that fires an event every 1000ms
    // can cause memory leaks if not unsubscribed, as a new subscription is fired every time the component is laoded
    // the observable stop emitting event once we navigate away from the component
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
```

### Building a custom Observable

```typescript
    // observer is interested about the data, errors and completion of the observable
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        // method used to emit the next value
        observer.next(count);

        // observer.complete(); // method used to tell observer that you are done
        if (count === 2) {
          observer.complete();
        }

        // observer.error(); // method used to throw an error
        if (count > 3){
          observer.error(new Error('Count is greater than 3'));
          // observer throwing an error; observable will not throw any further events and will cease to exist; observable
        }
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data); // handling all events fired
    }, error => {
      console.log(error   ); // handling the error
    }, () => {
      console.log('Completed!'); // handling the completion of events
    });
```

### Using Operators in observables with PIPES

- `Pipes` support an unlimited number of functions/operators that can be used to change/transform the result of an observable before being ultimately subscribed by the target observer.

```typescript
import { map, filter } from 'rxjs/operators';

  ...
  this.secondObsSubscription = customIntervalObservable
    .pipe(
      filter(data => {
        return data > 0; // return all data greater than 0
      }),
      map((data: number) => { // map outputs an observable by applying the function on each value
        return 'Round: ' + (data + 1);
      })
    )
    .subscribe(
      (data) => {
        console.log(data); // handling all events fired
      },
      (error) => {
        console.log(error); // handling the error
      },
      () => {
        console.log('Completed!'); // handling the completion of events
      }
    );
```

### USing Subjects instead of Event Emitters(Observables)

- A recommended alternative to using EventEmitter for cross component communication using services which has better performance
- Are observables that can be subscribed to but unlike traditional Observables, these can be accessed from outside using the `next()`
- **Subjects must be unsubscribed onDestroy**
- Does not work for `@Output()`

user.service.ts

```typescript
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  activatedEmitter = new Subject<boolean>(); // replaces the regular event emitter
}
```

obs-user.component.html - Source of communication

```html
<button class="btn btn-primary" (click)="onActivate()">Activate</button>
```

obs-user.component.ts

```typescript
  onActivate() {
    this.userService.activatedEmitter.next(true); // replaces the emit by the next operation of the observer; uses the next() to emit/send a new value
  }
```

observable.component.html

```html
  <h3 clas="text-info" *ngIf="userActivated">Activated</h3>
```

observable.component.ts - Destination of communication

```typescript
export class ObservablesComponent implements OnInit, OnDestroy {
  userActivated = false;
  activateSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activateSub = this.userService.activatedEmitter.subscribe((didActivate: boolean) => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.activateSub.unsubscribe(); // subscription due to sujects needs to be unsubscribed
  }
}
```

## Forms

- Check whether the form is valid
- Angular provides you a JS Object representation of the form that eases handling of forms

### **Template Driven**: Angular infers the Form object from the DOM

- All functionality changes are made in the template in the TD approach  
- Requires the `FormsModule` to be imported in your respective module

> This will also remove the default submit behaviour of the submit buttons

```typescript
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsModule // includes a lot of form related features and required for the TD approach
  ]
})
export class CustomFormsModule { }
```

#### TD - Creating the form and registering the controls

- We need to register all the form controls in our form to explicitly inform angular about them and allow it to construct the java script object representation of the form
- We can use the `ngModel` directive to tell angular about the controls on forms, without the `[()]` as they mean different things
- ngModel requires setting the 'name' attribute in respective elements `ngModel name="<<name_form_control>>"`

```typescript
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" ngModel name="username">
  </div>
```

#### Submitting and using the form

- Using `(ngSubmit)` and usinng local reference at the form level

```html
  <form (ngSubmit)="onSubmit(form)" #form>
  </form>
```

```typescript
  onSubmit(form: HTMLFormElement) {
    console.log(form); // can access the form element
  }
```

- To get access to the form created by angular we use `ngForm`

```html
      <form (ngSubmit)="onSubmit(form)" #form="ngForm">
  </form>
```

```typescript
  onSubmit(form: NgForm) {
    console.log(form); // we will get an ngForm(JS object) created by angular
    // will contain a number of key value pairs providing the details of the controls submitted by the form with the name attribute
    // value: {username: "asdwe", email: "wedwqe", secret: "pet"}
  }
```

#### Understanding Form State

- **dirty** - return true if any form input is changed; default false
- **disabled** - if form is made disabled; default false
- **invalid** - If the form validation is invalid; by default false
- **valid** - If the form is valid(post validation) or not; default true
- **touched** - If the form is clicked or not; default false
- **touched** - If the form is clicked or not; default false

#### Accessing form with @ViewChild - Alternate way

- This way is useful when you need access to the form even before you submit the form

```html
      <form (ngSubmit)="onSubmit()" #form="ngForm">
  </form>
```

```typescript
export class FormsComponent {
  @ViewChild('form') signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm);
  }
}
```

#### Adding validation to check user input

- Enable HTML5 validation (by default, Angular disables it). You can do so by adding the `ngNativeValidate`  to a control in your template.
- Tracks the validity of inputs both at the form as well as the control level
- Using directives like:
- `required` checks whether the form control is mandatory
- `email` checks whether the email inputted is valid or not
- `[pattern]="'^[1-9]+[0-9]*$'"` for ensuring that only positive numbers are added

```html
<div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" ngModel name="username" required>
</div>
<button class="btn btn-default" type="button">Suggest an Username</button>
<div class="form-group">
    <label for="email">Mail</label>
    <input type="email" id="email" class="form-control" ngModel name="email" required email>
  </div>
</div>
```

#### Using the form state

##### Using template states

- `!form.valid` returns true when the form is invalid

```html
  <form (ngSubmit)="onSubmit()" #form="ngForm">
    ...
    <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Submit</button>
  </form>
```

##### USing CSS Classes

```css
/* css class to select invalid elements of input, select which have been touched once */
input.ng-invalid.ng-touched,
select.ng-invalid.ng-touched {
  border: 1px red solid;
}

```

#### Outputting validation error messages

- Use the `#<<local_ref>>="ngModel"` for referencing the form controls and use helper blocks to output validation error messages

```html
  <div class="form-group">
    <label for="email">Mail</label>
    <input type="email" id="email" class="form-control" ngModel   name="email" required email #email="ngModel">
    <small id="emailHelp" class="form-text text-muted" *ngIf="!email.valid && email.touched">Please enter a validd email!.</small>
  </div>
```

#### Set default values with `ngModel` one way property binding

```typescript
  defaultQuestion = 'pet';
```

```html
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" [ngModel]="'test Name'" name="username" required>
  </div>
<div class="form-group">
  <label for="secret">Secret Questions</label>
  <select id="secret" class="form-control" [ngModel]="defaultQuestion" name="secret">
    <option value="pet">Your first Pet?</option>
    <option value="teacher">Your first teacher?</option>
  </select>
</div>
```

#### Uusing ngMmoddel with two way data binding

```html
  <div class="form-group">
    <label for="qa">QA</label>
    <textarea class="form-control" id="qa" rows="3" name="qa" [(ngModel)]="answer"></textarea>
    <p>Your reply: {{answer}}</p>
  </div>
```

#### Grouping Form controls

- If we wish to group a set of form controls logically into a group
- We use `ngModelGroup="<<nameOfGroup>>" #<<nameOfGroup>>="ngModelGroup"`
- We use the `*ngIf="!userData.invalid && userData.touched"` to output validation errors at the group level

```html
  <div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" class="form-control" [ngModel]="'test Name'" name="username" required>
    </div>
    <button class="btn btn-default" type="button">Suggest an Username</button>
    <div class="form-group">
      <label for="email">Mail</label>
      <input type="email" id="email" class="form-control" ngModel   name="email" required email #email="ngModel">
      <small id="emailHelp" class="form-text text-muted" *ngIf="!email.valid && email.touched">Please enter a vlaid email!.</small>
    </div>
  </div>
  <p class="text-info" *ngIf="!userData.invalid && userData.touched">User data is invalid!</p>

```

#### Handling radio buttons

```html
<!-- [ngModel]="'male'" to make male as checked by default -->

  <div class="form-check" *ngFor="let gender of genders">
    <input class="form-check-input" type="radio" name="gender" id="{{gender}}" [value]="gender" required ngModel>
    <label class="form-check-label" for="{{gender}}">
      {{gender}}
    </label>
  </div>
```

#### Setting and Patching Foorm Values

```typescript
  <button class="btn btn-secondary mx-2" type="button" (click)="setInitialValues()">Set Initial Value by setValue</button>
  <button class="btn btn-secondary mx-2" type="button" (click)="setSelectValues()">Set Select Value by patchValue</button>
  <div class="form-group">
```

```typescript
export class FormsComponent {
  @ViewChild('form') signupForm: NgForm;

  setInitialValues() {
    const suggestedName = 'Superuser';
    // setValue method allows to set values of the whole form; it requires JS object representing the form
    // setValue overwrites all the values of controls entered in the DOM
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: 'test@tcs.com'
      },
      secret: 'pet',
      qa: 'sample qa',
      gender: 'female'
    });
  }

  setSelectValues() {
    const suggestedName = 'Superuser';
    // overwrite parts of the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
```

#### Submitting form data

```typescript
export class FormsComponent {
  @ViewChild('form') signupForm: NgForm;
  ...
  user = { // the keys need not match to those on the form
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false;

onSubmit() {
  console.log(this.signupForm);
  this.submitted = true;

  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secret = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.qa;
  this.user.gender = this.signupForm.value.gender;
}
```

- Final TD Form

```html
  <form (ngSubmit)="onSubmit()" #form="ngForm">
    ...
  </form>

  <div class="row" *ngIf="submitted">
    <div class="col-12">
      <h3 class="text-dark">Your Data</h3>
      <p class="text-info">Username: {{user.username  }}</p>
      <p class="text-info">Mail: {{user.email  }}</p>
      <p class="text-info">Secret Question: {{user.secret }}</p>
      <p class="text-info">Answer: {{user.answer  }}</p>
      <p class="text-info">Gender: {{user.gender  }}</p>
    </div>
  </div>
</div>
```

#### Resetting Forms

```typescript
  onSubmit() {
    this.signupForm.reset();
  }
```

#### Steps to make a TD Form - Example

> Ensure `import { FormsModule } from '@angular/forms';` is imported in your module

1. Add the desired HTML for Form
2. Create the form element with reference `<form (ngSubmit)="onSubmit()" #form="ngForm">` in DOM
3. Create the view child `@ViewChild('form') subscriptionForm: NgForm;` in TS
4. Add the name attribute and ngModel directive to each form control `name="email" ngModel` in DOM  
   1. If you wish to use a form a grouping to logically group set of form controls, then on the wrapping div `ngModelGroup="userDetails" #userDetails="ngModelGroup"`
5. Create the onSubmit to see if the form is generating `onSubmit() {  console.log(this.subscriptionForm);}` in TS
6. Add the submitted flag `submitted = false` and change it to true in `onSubmit()`in TS
7. Add the directives as per requirement like `required`, `email` against each element in DOM
8. Add the disabled property to the submit button `[disabled]="!form.valid && form.touched"` in DOM
9. Add the ngIf property to display form level warning `*ngIf="!form.valid && form.touched"` in DOM
10. Peform one way property binding if default values need to be set `[ngModel]="defaultSubscription"` in DOM
11. Add the local reference to  each form control for showing form level error blocks `#password="ngModel"` in DOM
12. Add the condition on each form level error block `*ngIf="!password.valid && password.touched"` in DOM
13. Add the code to reset after submit `this.subscriptionForm.reset();` in th `onSubmit` in TS
14. To retrive the data entered by the user, create an empty object representing the form, the keys can be named as per your choice and need not be similar to `name` attribute by `subscriptionData = { password: 'dummy'}`
15. To retrieve the data entered by the user, use `this.subscriptionData.password = this.subscriptionForm.value.password;` where `password` corresponds to the name attribute value
    1. If form grouping is done, `this.subscriptionData.password = this.subscriptionForm.value.userDetails.password;`
16. To view all the values in the form `console.log(this.subscriptionForm.value)`

### **Reactive**: Form is created programmatically and synchronized with the DOM

- Configuring changes are made in the TS file and later synchronizing with DOM
- It requires the `ReactiveFormsModule` imported in angular

```typescript
@NgModule({
  declarations: [
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class CustomFormsModule {}
```

#### Creating Form in Code

```typescript
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup; // the form is of type FormGroup
  constructor() { }

  ngOnInit(): void {
    // setting up a basic form
    this.signupForm = new FormGroup({
      // Arguments taken by FormControl includes initial state, single validator or array of validator and Async validator
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
    }

    // it is recommended to use username as 'username'
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    // }
```

#### Syncing up HTML and Form

```html
  <!-- for connecting the form to take the value from TS -->
  <form [formGroup]="signupForm">
    <!-- for connecting the form control to a string representing the form control in TS -->
    <input type="text" id="username" class="form-control" [formControlName]="'username'">
    <!-- without property binding -->
    <input type="text" id="username" class="form-control" formControlName="username">
```

#### Submitting the form

```html
  <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
```

#### Adding validation

```typescript
  ngOnInit(): void {
    // setting up a basic form
    this.signupForm = new FormGroup({
      // Arguments taken by FormControl includes initial state, single validator or array of validator and Async validator
      // Validators.required is just a reference that is executed by angular when the form control value changes
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
    });
  }
```

#### Getting access to controls

```html
<!-- Error block appearing only if the form as a whole is invalid-->
  <h6 id="emailHelp" class="form-text text-danger" *ngIf="!signupForm.valid && signupForm.touched">Please enter
    valid details!</h6>

  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" [formControlName]="'username'">
    <!-- SpecificError block appearing only if the form control is invalid-->
    <small id="usernameHelp" class="form-text text-danger"
      *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched">Please enter a
      valid username</small>
  </div>
```

#### Grouping controls

```typescript
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
    });
```

```html
<!-- we add `[formGroupName]="'userData'"` -->
<div [formGroupName]="'userData'">
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" [formControlName]="'username'">
    <!-- modify ('userData.username') -->
    <small id="usernameHelp" class="form-text text-danger"
      *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched">Please enter a
      valid username</small>
  </div>
```

#### Arrays of Form Control

```typescript
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }
  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
```

```html
<!-- use the `[formArrayName]="'hobbies'" ` to represent a form array that holds controls -->
  <div [formArrayName]="'hobbies'">
    <h4>Your hobbies</h4>
    <button class="btn btn-secondary" type="button" (click)="onAddHobby()">Add Hobby</button>
    <!-- looping through the controls -->
    <div class="form-group"*ngFor="let hobbyControl of getControls(); let i = index">
      <input type="text" class="form-control" [formControlName]="i">
    </div>
  </div>
```

##### Another example for Arrays of Form Controls in Form Group

```html
  <div class="row">
    <div class="col" [formArrayName]="'ingredients'">
      <!-- form-group row allows for having all 3 columns in a horizontal line -->
      <div class="row" class="form-group row" *ngFor="let ingredientControl of getControls(); let i = index" [formGroupName]="i">
        <div class="col-8">
          <input type="text" class="form-control" [formControlName]="'name'">
        </div>
        <div class="col-2">
          <input type="text" class="form-control" [formControlName]="'amount'">
        </div>
        <div class="col-2">
          <button class="btn btn-danger">X</button>
        </div>
      </div>
    </div>
  </div>
```

```typescript
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, [Validators.required]),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imgPath: new FormControl(recipeImagePath, [Validators.required]),
      description: new FormControl(recipeDescription, [Validators.required]),
      ingredients: recipeIngredients
    });
  }
  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
    // (this.recipeForm.get('ingredients') as FormArray).clear(); to remove all the form array elements
  }
```

#### Creating custom validators

```typescript
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // we need to bind it with `this` as angular executes it and does not occur from within this class
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),

      }),
    ...
    })
  // custom validator that gets executed by angular automatically when it checks the validity of the form control
  // it should check a form control and have a return type of JS object {nameIsForbidden: true}
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null; // if validation is successful you have to pass nothing or null
    // should not pass false;
    // passing null or nothing is how you tell that the form control is valid
  }
```

#### Using error codes

```typescript
// Using `signupForm.get('userData.username').errors['nameIsForbidden']` to get access to the error object
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" class="form-control" [formControlName]="'username'">
      <small id="usernameHelp" class="form-text text-danger"
        *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched">
        <small class="form-text text-danger"
          *ngIf="signupForm.get('userData.username').errors['nameIsForbidden']">This name is invalid!</small>
        <small class="form-text text-danger"
          *ngIf="signupForm.get('userData.username').errors['required']">This is required!</small>
        Please enter a
        valid username
      </small>
    </div>
```

#### Creating a custom Async Validator

- Such validators which are able to wait for asynchronous response from the server

```typescript
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
    }

  // asynchronous validators
  // will put the element in the `ng-pending` state
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve( {emailIsForbidden: true});
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
```

#### Reacting to status or value changes

```typescript
  ngOnInit(): void {
    // logs all the changes per keystroke made on the signupForm
    this.signupForm.valueChanges.subscribe(
      value => console.log(value)
    );
    // logs all the status changes from INVALID --> PENDING --> VALID
    this.signupForm.statusChanges.subscribe(
      status => console.log(status)
    );
```

#### Setting and Patching values

```typescript
  // set values of the form controls on the form
  this.signupForm.setValue({
    userData: {
      username: 'Rich',
      email: 'test@gtc.com'
    },
    gender: 'male',
    hobbies: []
  });

  // patch specific values of one form control on the form
  this.signupForm.patchValue({
    userData: {
      username: 'Samurai',
    },
  });
```

#### Reset

```typescript
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
    // you can pass an object if you wish to reset to specific values
  }
```

#### Steps to make a Reactive Form - Example

> Reuires the `ReactiveFormsModule` to be imported in your module file.

1. Add the desired HTML for Form
2. Create the FormGroup element with `projectStatusForm: FormGroup;` in TS
3. Assign the FormGroup to the form element with submit `<form [formGroup]="projectStatusForm" (ngSubmit)="onSubmit()">` in DOM
4. Create the submit method with submitted property as true `onSubmit() {this.submitted = true;}`; Also you may `console.log(this.projectStatusForm);` to observe JSON properties on every submit
5. Add the directive for form grouping `[formGroupName]="'projectDetails'"` in DOM
6. Add the directive for form controls `[formControlName]="'name'"` in DOM
7. Instantiate the projectStatusForm with initial values and validators in the ngOnInit() in TS

    ```typescript
        this.projectStatusForm = new FormGroup({
          projectDetails: new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
          }),
          status: new FormControl('Finished'),
        });`
    ```

8. Add the css classes for highlighting the borders incase the formcontrol is invalid `select.ng-invalid.ng-touched {  border: 1px solid red;}` in CSS
9. Add the ngIf statements for the helper blocks that throw the error like `*ngIf="!projectStatusForm.get('projectDetails.name').valid && projectStatusForm.get('projectDetails.name').touched"` at the control level and `*ngIf="!projectStatusForm.valid && projectStatusForm.touched"` at the form level in DOM
10. Add custom validators by adding `this.forbiddenProjectNames` to the list of validators on the name property of `projectStatusForm` in ngOnInit in TS
11. Add custom validator function that returns true if the formcontrol of `name` takes the value of `Test` in TS

    ```typescript
      forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Test'){
          return {forbiddenProjectNames: true};
        }
        return null;
      }
    ```

12. Add custom asynchronous validator function that returns true if the formcontrol of `name` takes the value of `Test` in TS

    ```typescript
      forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'test@gmail.com'){
              resolve({forbiddenEmail: true});
            }
            resolve(null);
        }, 1000);
      });
      }
    ```

13. Add the above validator as the third argument of the `email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),` in TS
14. You can pass the reset function to OnSubmit as `this.projectStatusForm.reset();` and pass the object you want to reset the `projectStatusForm` to in TS

## Pipes

- Transforms output in the Template
- Format `{{ exp | myPipe }}`

```html
  <!-- server.instanceType made to CAPITAL using uppercase -->
  <!-- server.started made to format mmm d, yyyy using date -->
    <span><strong>{{ server.name }}</strong> | {{ server.instanceType | uppercase}} | {{ server.started | date}}</span>
```

### Parametrizing pipes

```html
  {{ server.started | date: 'fullDate'}}
```

### Built in [Pipes](https://angular.io/api/common) and chaining

- When chaining multiple pipes, the order is from left to right
- The order is important while chaining

```html
{{ server.started | date: 'fullDate' | uppercase}} //will work
{{ server.started | uppercase | date: 'fullDate'}} //will NOT work as uppercase cannot operate on date as its not a string
```

### Pipe Syntax

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten' // we use this name in the template
})
export class ShortenPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
```

```typescript
@NgModule({
  declarations: [ShortenPipe], // added as a declaration
  imports: [  ]
})
```

### Creating a custom pipe

`{{ server.name | shorten }}`

```typescript
export class ShortenPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 10) {
      return value.substr(0, 10) + ' ...';
    }
    return value;
  }
}
```

### Parametrizing cutom pipes

`{ server.name | shorten:5 }}`

```typescript
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > 10) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
```

#### Multiple parameters

`{ server.name | shorten:5:10 }}` DOM

`transform(value: string, limit: number, anotherArg: type): string {` TS

### Creating a filter pipe

```html
<!-- filter pipe operates on servers and returns the new output array values of servers that is then used to generate li -->
  <li class="list-group-item d-flex justify-content-between"
    *ngFor="let server of servers | filter: filteredStatus: 'status'" [ngClass]="getStatusClasses(server)">
    <span><strong>{{ server.name | shorten:5 }}</strong> | {{ server.instanceType | uppercase}} |
      {{ server.started | date: 'fullDate' | uppercase}}</span>
    <span class="badge badge-pill badge-dark">{{server.status }}</span>
  </li>
```

```typescript
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value){
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
```

### Pure and impure pipes

- Updating the underlying Arrays and Object doesnt trigger re-running of the pipes, however if the input changes it will be re-run
- To force angular to re-run the pipes whenever data changes results in impure pipes; we can do this by adding `pure: false` to the pipe.ts
- Such kinds of impure pipes causes performance issues

```typescript
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform { ...}
```

### Async Pipe

```html
<h4 class="text-dark">App Status: {{ appStatus | async}}</h4>
```

```typescript
  // works with promises and observables
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
```

### Custom Sort Pipe

```html
  <li class="list-group-item d-flex justify-content-between"
    *ngFor="let server of servers | filter:filteredStatus:'status' | sort:'name'"
      [ngClass]="getStatusClasses(server)">
```

```typescript
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.length === 0) {
      return value;
    }
    value.sort((a , b) => {
      if(a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
    return value;
  }

}
```

### Anatomy of a HTTP Request

1. HTTP Verb
2. URL(API Endpoint)
3. Headers
4. Body