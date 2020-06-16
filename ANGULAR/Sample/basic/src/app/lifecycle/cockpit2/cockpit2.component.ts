import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit2',
  templateUrl: './cockpit2.component.html',
  styleUrls: ['./cockpit2.component.css']
})
export class Cockpit2Component implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = ''; // commenting as replacing two way databinding with examples of local reference and ViewChild
  // newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // nameInput is the local reference representing the entire input element in HTML
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput); // console logs the ElementRef
    this.serverCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
