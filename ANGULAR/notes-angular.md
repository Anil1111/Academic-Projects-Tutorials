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

Router links enables routing without reloading of the page, preventing the default behavior of links and checks the route configuraiton(`app-routing.module.ts`) to determine the matched route.

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

### Using Active router link

The `routerLinkActive` option automatically checks the route URL to identify which routes are activated currently and uses it to assign the given class to the html class.

- `routerLinkActive="active"` where active can be any class of choice which will dynamically get appended to the element on which it is defined.

Since the `root` component or likewise cases can be used to form other routes, they will always be identified as active. So we should add the additional attribute of `routerLinkActiveOptions`  

- `[routerLinkActiveOptions]="{exact: true}"` tells angular to check for exact matches of route.  
- For `http://localhost:4200/routes` has two active router links namely `/` and `/routes`. So as to avoid `/` from being the active we should use `routerLinkActiveOptions`  

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
