import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true; // property that defines the toggle status of the sideBar

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){ // method that gets toggled based on user click event on the HeaderComponent
    this.sideBarOpen = !this.sideBarOpen;
  }

}
