import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'richard';
  password = 'dummy';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // dependency Injection where angular injects the depency into the component
  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    public basicAuthenticationService: BasicAuthenticationService,
    public jwtAuthenticationService: JwtAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.username);
    console.log(this.password);

    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
      console.log('Authentication successful');
    } else {
      this.invalidLogin = true;
    }

  }

  handleBasicAuthLogin() {
    // returns an Observable
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        }, error => {
          console.log(error);
          this.invalidLogin = true;
        });

  }

  handleJWTAuthLogin() {
    // returns an Observable
    this.jwtAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        }, error => {
          console.log(error);
          this.invalidLogin = true;
        });

  }
}
