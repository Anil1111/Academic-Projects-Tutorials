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

#### Navigate to Session Storage in Google Chrome

> Chrome --> Inspect --> Application --> Inside Storage Menu --> Session Storage
>
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

## Using RESTlet Client from Chrome

In the headers option, set onr of the headers to `Origin`: `http://localhost:4200/` to avoid the CORS error that will be generated when requests are sent from the RESTlet client using its own domain to the backend server

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

## Basic Authentication

### Using Form based authentication

If you try to access any backend URLs over the browser with Spring Security enabled, you will get a `Form based authentication`.
    - The default username is `user`
    - The default password is present in the console
On successful login, a session is set on the server whereas a cookie is set on the client which is sent along with each request. This cookie identifies the session on the server and it will be used as the authentication.

### Using Basic Authentication using Basic Authorization header

This does not require session being set on the server.

```http
GET http://localhost:8085/users/richard/todos HTTP/1.1
Origin: http://localhost:4200
Authorization: Basic dXNlcjpjNDgwY2EzNC03MjM5LTRmZTEtYjJhMy04ZjhhNWRlY2MwN2Y=

// generated from the Restlet Client by supplying the `username` and `password` same as above
// sending the encoded form of the password as `dXNlcjpjNDgwY2EzNC03MjM5LTRmZTEtYjJhMy04ZjhhNWRlY2MwN2Y=`
// this is known as the `basic authorization header`
```

### Creating the Authorization header in welcome-data.service.ts

#### Error without setting the Authorization HTTP Header

```console
Access to XMLHttpRequest at 'http://localhost:8085/hello-world-path-variable/richard' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

#### Setting the Authorization Header

```typescript
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanServiceWithPathVariable(name) {
    const headers = this.createBasicAuthorizationHttpHeader();
    return this.http.get<HellowWorldBean>(
      `http://localhost:8085/hello-world-path-variable/${name}`,
      { headers}
    );
  }

  createBasicAuthorizationHttpHeader() {
    const username = 'richard';
    const password = 'dummy';
    // encode the string into base64 string using `window.btoa`
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return headers;
  }


}
```

### Resolving denial of OPTIONS pre-flight Requests by configuring CSRF

After basic authentication, an HTTP `OPTIONS` method is fired by the client before every GET, POST request to ascertain whether the client is valid.
>CSRF - Cross site request forgery

```Console
Access to XMLHttpRequest at 'http://localhost:8085/hello-world-path-variable/richard' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
```

`CSRF Cross-Site Request Forgery (CSRF)` is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. CSRF attacks specifically target state-changing requests, not theft of data, since the attacker has no way to see the response to the forged request.

Adding a new class `SpringSecurityConfigurationBasicAuth.java` and overriding the `configure(HttpSecurity http)` method from `SpringSecurityConfigurationBasicAuth`

```java
@Configuration // enables spring configuration
@EnableWebSecurity // enables web security
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
  
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf().disable() // disabled CSRF; needed to run from Restlet Client
      .authorizeRequests()
      .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // // permit all OPTIONS methods; to remove pre-flight CORS error from frontend; error for any URL `/**` without authentication
        .anyRequest().authenticated()
        .and()
      // .formLogin().and()  // disable form login
      .httpBasic();
  }
  
}
```

### Using HttpInterceptor to add Authorization headers

Enables to add a specific header to every request rather than adding it manually as above.

app.module.ts

```typescript
  providers: [
    { // for providing the HttpInterceptor to the module to add header to every request
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorBasicAuthService,
      multi: true
    },
  ],
```

http-interceptor-basic-auth-service.ts with hardcoded authorization

```typescript
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  // HttpInterceptor acts like a filter to add authorization header to the request and then forwarding the modified request

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username = 'richard';
    const password = 'dummy';

    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({ // cloning the request as we cannot modify the original request
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });

    return next.handle(req); // sending the modified request
  }
}
```

### Connecting login page to basic authentication

basic-authentication.service.ts

```typescript
  executeAuthenticationService(username: string, password: string) {
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http
      .get<AuthenticationBean>(`http://localhost:8085/basicauth`, { headers })
      .pipe(
        // we use the pipe operator to define an action that we need to perform if the request is successful
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data; // data is returned to whoever is using this service
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return user != null; // returns true
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
```

http-interceptor-basic-auth-service.ts with Updated basic authorization

```typescript
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  // HttpInterceptor acts like a filter to add authorization header to the request and then forwarding the modified request

  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    const username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      // checking if token and username is stored in the session, if true only then add authorization to the header else do nothing
      req = req.clone({
        // cloning the request as we cannot modify the original request
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }

    return next.handle(req); // sending the modified request
  }
}
```

### Creating an app.constants.ts file on /app/ to store constants

app.constants.ts

```typescript
export const API_URL = 'http://localhost:8085';
```

other ts files

```typescript
import { API_URL } from 'src/app/app.constants';

  deleteTodo(username, id) {
    return this.http.delete(
      `${API_URL}/users/${username}/todos/${id}`
    );
  }
```

## JWT

JSON Web Tokens are an open standard for representing claims between two parties.

### Cons of Basic Authentication

- No expiration time for Authorization Token
- Token does not have any authorization details on it

### Features of JWT

- Contains User details and Authorizations

### Constituents of Decoded JWT

#### Header

```json
{
  "alg":"HS512", // algorithm used for encoding
  "typ":"JWT"
}
```

#### Payload

```json
{
  "sub": "1234", // who are we talking about
  "name": "John Does", // name of the person
  "admin": true, // whether admin?
  "iat": 123123 // creation time of token
  //.. can add custom values
}
```

#### Verify Signature

```json
{
  // contains base 64 encoded header + payload + your 512 bit secret
}
```

### JWT requests syntax

```http
// POST request sent to `/authenticate` with credentials and we get back the `Token`
POST http://localhost:8085/authenticate HTTP/1.1
content-type: application/json
Origin: http://localhost:4200

{
  "username": "in28minutes",
   "password": "dummy"
}


###
// Adding the Token that we received to future requests
// Header - Authorization: "Bearer JWT_TOKEN"

GET http://localhost:8085/users/richard/todos HTTP/1.1
Origin: http://localhost:4200
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5MjM5MTcwNywiaWF0IjoxNTkxNzg2OTA3fQ.0NB9sSBWU1v_pKfHiPzvZFwKEAO-Jep3EICcrzM63tObRx-sZSF4Oj4ciQ4oWQgPQ1HDuxcYt2j3kLopDBm-Aw

###

// Sending request for a refresh token
GET http://localhost:8085/refresh HTTP/1.1
Origin: http://localhost:4200
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5MjM4OTgwNiwiaWF0IjoxNTkxNzg1MDA2fQ.2XjiaqlpHwst2Jj9TyKF_EJte2i2VJ2uDW4_bntdfPepKHVdfdR2U55FhqR7K78M6WMyEkX0WNBMuTkiQboNJA

###

```

### JWT project folder structure

1. `JwtTokenRequest` object representing the valid request type for token generation
2. `JwtTokenResponse` object representing the valid response type for sending generated token
3. `JwtAuthenticationRestController` used for managing the HTTP request for `/authentication` and `/refresh`
4. `AuthenticationException` exception thrown from the JwtAuthenticationRestController during runtime

5. `JwtUserDetails` object representing the user details (id, username, password, role) type from DB
6. `JwtInMemoryUserDetailsService` mimics the DB by providing the list of users as type JwtUserDetails and loads the required user details; we just need to provide the user details by implementing the `UserDetailsService` and spring will take care of the rest including validation of the password;

7. `JwtTokenUtil` used for processing and managing tokens including creating tokens, calculating expiration dates and getting details out of the token

8. `JwtTokenAuthorizationOncePerRequestFilter` represents the filter that is applied on all the subsequent requests post authentication for accessing data from the system
9. `JwtUnAuthorizedResponseAuthenticationEntryPoint` retuns the error of providing jwt if

10. `JWTWebSecurityConfig` extends the WebSecurityConfigurerAdapter and configures the below
    - UserDetailsService with BCryptPassword encoder
    - statelessness by not creating a session on the server
    - authentication entry point to handle unauthenticated users by sending JWT required error response from `JwtUnAuthorizedResponseAuthenticationEntryPoint`
    - configuring the JwtTokenAuthorizationOncePerRequestFilter to run
    - enabling the /h2-console to be accessed without headers

### Create a new user in JWT with encoded password

BcryptEncoderTest will be able to generate 10 different encoded variations of the password that can be then used in the main system

```java
public class BcryptEncoderTest {
  public static void main(String[] args) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    for (int i=1; i<10; i++){
      String encodedString = encoder.encode("password@123!");
      System.out.println(encodedString);
    }
  }
  
}
```

## JPA

`data.sql` file on the `resources/` directory will append the data to the H2 database during runtime

```sql
insert into todo(id, description, done, target_date, username)
values (1001, 'richard', true, sysdate(), 'learn jpa');
insert into todo(id, description, done, target_date, username)
values (1002, 'richard', false, sysdate(), 'learn cloud');
```
