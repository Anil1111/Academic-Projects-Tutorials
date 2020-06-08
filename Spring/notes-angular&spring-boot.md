# Full stack application using Angular and Spring boot

## Angular

### Syntax for creating files
**Always use camelCase for creating a component/service/directive**
All files in angular are of type `my-name.*.ext`.    
These are created by the command `ng g <<x>> myName`. **Note** myName will be in capital letters but the output file will be `my-name` 


### Bootstaping Angular Application

When an angular application is loaded:
1. The `main.ts` file loads the JS(after compilation) into the DOM
2. It bootstraps the `App.Module`
3. It then bootstraps the `App.Component`
4. It activates the `<app-root>` templateSelector in index.html
5. The `<router-outlet>` present in the App.Component is responsible for routing/navigation. 
6. The 'app-routing.module' is responsible for representing navigation paths.


### Components
The view is constructed using several components which uses the view(HTML), styling(CSS) and interactivity(JS).
Template: `component.html`
Style `component.css`
Code `component.ts`
The `app.component` is the root module of the entire project.

```typescript
@Component({ //is a decorator that has several attributes that defines the component AppComponent
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO'; //using interpolation we can use them on the template
}
```

We can add the template directly
```typescript
@Component({ 
  //...
  template: '<h1>{{title}}</h1>',
})
```

The newly generated Component can be appended by using its selector

```html
<!-- if selector is app-welcome-->
<app-welcome></app-welcome>
```


### Module
Every angular component(@Component) has to be associated to an Angular Module(@ngModule)   
An angular application is a group of angular modules.

```typescript
@NgModule({ //the decorator
  declarations: [
    AppComponent, //various components that are used in the AppModule
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // when this module is loaded which component needs to be loaded
})
export class AppModule { }

```

### Data Interpolation

*.component.html
```html
    <div>
      <label for="username">{{username}}</label>
    </div>
```

*.component.ts
```typescript
  username = 'richard';
```

### Event binding

*.component.html
```html
    <div>
      <button (click)=handleLogin()>Login</button>
    </div>
```

*.component.ts
```typescript
  handleLogin(){
    console.log(this.username);
  }
```

### 2 way databinding

*.module.ts
```typescript
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    //declarations
  ],
  imports: [
    //other imports
    FormsModule
  ]
})
```

*.component.html
```html
      <input type="text" id="username" name="username" [(ngModel)]="username">
```

*.component.ts
```typescript
  username = 'richard';
  handleLogin(){
    console.log(this.username);
  }
```



### Routing


app-routing.module.ts
```typescript
const routes: Routes = [
  {path: '', component: LoginComponent}, //default page that loads at 'localhost:4200/'
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent}
  {path: '**', component: ErrorComponent}, //handling errors due to incorrect routes and must be placed at the end as this should be the last route to get executed
  // ** matches anything
];
```

app.component.html
```html
<router-outlet></router-outlet> //tag that enables routing
```

### Routing from a component

*.component.ts
```typescript
import { Router } from '@angular/router';

  // dependency Injection where angular injects the depency into the component
  constructor(private router: Router) { }

  handleLogin(){
    if (this.username === 'richard' && this.password === 'dummy'){
      // Redirect to welcome page
      this.router.navigate(['welcome']); // navigate methods accepts an array
      this.invalidLogin = false;
    } 
  }
```

### Routing paramters

app-routing.component.ts
```typescript
const routes: Routes = [
  {path: 'welcome/:name', component: WelcomeComponent}, // routing parameter of name
];
```

welcome.component.ts
```typescript
export class WelcomeComponent implements OnInit {
  name = '';
  // ActivatedRoute is used to find the active route
  // placing in constructor as we can inject the ActivatedRoute using dependency injection
  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
    const nameRouteParam = 'name';
    this.name = this.route.snapshot.params[nameRouteParam];
  }
}

```


### Directives

#### *nfIf directive

*.component.html
```html
      <small *ngIf="invalidLogin">{{errorMessage}}</small>
```

*.component.ts
```typescript
  handleLogin(){
    if (this.username === 'richard' && this.password === 'dummy'){
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
```

#### *ngFor directive

*.component.html
```html
  <tbody>
    <!-- for (Todo todo: todos) -->
    <tr *ngFor="let todo of todos">
      <td>{{todo.id}}</td>
      <td>{{todo.description}}</td>
    </tr>
  </tbody>
```

*.component.ts
```typescript
  todos = [
    { id: 1, description: 'learn to dance'},
    { id: 2, description: 'learn to code'},
    { id: 3, description: 'learn to enjoy'},
  ];
```

#### Routing directive

*.component.html
```html
<div>
  <!-- Do not use href for anchor tags as it causes reloading of the entire page whereas routerLink changes that particular DOM-->
  <p>You can manage your todos <a routerLink="/todos">here</a></p>
</div>  
```

### Pipe
Is used to convert a field format.

*.component.html
```html
    <tr *ngFor="let todo of todos">
      <td>{{todo.description}}</td>
      <td>{{todo.done}}</td>
      <td>{{todo.targetDate | date | uppercase}}</td>
    </tr>
```








### Adding Bootstrap

Add a CDN to the styles.css
```css
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
```



### Services

*.service.ts
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // service providing authentication logic
  authenticate(username, password){// makes the service class available for dependency injection
  // If any component wishes to use this, then it needs to be added to its constructor

    if (username === 'richard' && password === 'dummy'){
      return true;
    } else {
      return false;
    }
  }
}
```

*.component.ts
```typescript
export class LoginComponent implements OnInit {
  // dependency Injection where angular injects the depency into the component
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  handleLogin(){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // authentication successful
    } 
  }

}
```

### Using services for Session Storage to store authentication token

To check the session storage from browser:
- Session Storage represents the temporary storage where key value pairs can be stored during the browser session. If browser is restarted the keys are lost.   
- Incase of Local Storage, the keys remain even on browser restart but are less secure and thus, not recommended.


#### Navigate to Session Storage in Google Chrome:   
> Chrome --> Inspect --> Application --> Inside Storage Menu --> Session Storage   
> **To clear**, just `Rt. Click` on the entry inside session storage and click on `clear`.


```typescript
export class HardcodedAuthenticationService {
  constructor() { }
  authenticate(username: string, password: string){
    console.log('before authenticate ' + this.isUserLoggedIn());
    if (username === 'richard' && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after successful authenticate ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  //checking for an key of 'authenticatedUser' in session storage of the browser
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
```

### Securing Components using Route Guards

app-routing.module.ts
```typescript
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  // the route property of canActivate can take a list of Route guards which are checked sequentially
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];
```

route-guard.service.ts
```typescript
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //checking whether the user is logged in and if it is then only return true and perform the route navigation
    if (this.hardcodedAuthenticationService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login']); //routing back to login if the user is not logged in
    return false;
  }
}
```




## Connecting to Spring Boot Backend

### USing HttpClient

app.module.ts
```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...],
  imports: [
    HttpClientModule,
    ...
  ]
```

welcome-data.service.ts
```typescript
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }
}
```




### Understanding Observables
- To handle HTTP Requests asynchronously as otherwise the browser will hand in synchronize mode.
- `Observables` is an approach to implement asynchronous communication
- An observable does not automatically get invoked as it needs to be subscribed

welcome-data.service.ts
```typescript
  executeHelloWorldBeanService() {
    // returns an observable to frontend
    return this.http.get('http://localhost:8085/hello-world-bean'); // URL to the backend server which provides RESTful web service
  }
```

welcome.component.ts
```typescript
  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService()); // the Observable does not get automatically invoked and requires to be subscribed to

    this.welcomeDataService
      .executeHelloWorldBeanService()
      .subscribe((response) => this.handleSuccessfulResponse(response));  // subscribed to the observable which returns a response
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomeMessageFromService = response.message;
  }
```

**To prevent Cross origin error**
HelloWorldController.java
```java
@CrossOrigin(origins = "http://localhost:4200")
@RestController // controller that can handle REST Request
public class HelloWorldController { ...
}
```

### Handling error from HTTP response

welcome.component.ts
```typescript
  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }
```

### [(ngModel)] breakup

Original
```typescript
      <input class="form-control" type="date" name="targetDate" id="description" [(ngModel)]="todo.targetDate" required>
```

Equivalent to
```typescript
      <input class="form-control" 
        type="date" 
        name="targetDate" 
        id="description" 
        [ngModel]="todo.targetDate"  // Nomral property binding to the value of todo.targetDate
        (ngModelChange)="todo.targetDate = $event" // event binding that sets the updated date into the todo.targetDate 
        required>
```


### Form validation

```html
<div class="container">
  <!-- todoForm.dirty will be true only when the form has been edited once so that it does not appear on initial load-->
  <!-- todoForm.invalid will be true when the validations rules are not followed-->
  <div class="alert alert-warning" *ngIf="todoForm.dirty && todoForm.invalid">Enter Valid values!</div>
  <div class="alert alert-warning" *ngIf="descriptionValid.dirty && descriptionValid.invalid">Enter Valid description!</div>

  <!-- #todoForm is a template variable and !todoForm ensures that user is not able to submit an invalid form -->
  <form (ngSubmit)="!todoForm.invalid && saveTodo()" #todoForm="ngForm">
    <div class="form-group">
      <label for="description">Description</label>
      <input class="form-control" type="text" name="description" id="description" [(ngModel)]="todo.description" required #descriptionValid="ngModel">
      <!-- #descriptionValid="ngModel" can be used to define a template variable for the description input tag-->
    </div>

    <div class="form-group">
      <label for="description">Target Date</label>
      <input class="form-control" type="date" name="targetDate" id="description" [ngModel]="todo.targetDate | date: 'yyyy-MM-dd'" (ngModelChange)="todo.targetDate = $event" required>
    </div>

    <!-- <button class="btn btn-success" (click)="saveTodo()">Save</button> -->
    <!-- click event can be replaced by ngSubmit on the form in order to ensure that clicking on enter sends the request-->
    <button type="submit" class="btn btn-success">Save</button>
  </form>

</div>
```