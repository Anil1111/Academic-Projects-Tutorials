import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  // ActivatedRoute is used to find the active route
  // placing in constructor as we can inject the ActivatedRoute using dependency injection
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const nameRouteParam = 'name';
    this.name = this.route.snapshot.params[nameRouteParam];
  }

}
