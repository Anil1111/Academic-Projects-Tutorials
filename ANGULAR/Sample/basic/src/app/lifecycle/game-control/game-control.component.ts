import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  counterGenerator;
  @Output() numberEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onStartGame() {
    this.counterGenerator = setInterval(() => {
      this.counter++;
      this.numberEmitter.emit(this.counter);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.counterGenerator);
  }



}
