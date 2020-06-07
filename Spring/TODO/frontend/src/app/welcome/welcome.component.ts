import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService: string;
  // ActivatedRoute is used to find the active route
  // placing in constructor as we can inject the ActivatedRoute using dependency injection
  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    const nameRouteParam = 'name';
    this.name = this.route.snapshot.params[nameRouteParam];
  }

  getWelcomeMessage() {
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    console.log(error);
    this.welcomeMessageFromService = error.error.message;
  }
}
