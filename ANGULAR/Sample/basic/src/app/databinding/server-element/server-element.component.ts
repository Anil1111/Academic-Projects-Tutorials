import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {
  }


  ngOnInit(): void {}
}
