import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  counterGenerator = setInterval(this.generateNumbers, 1000);
  @Output() numberEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  startGame() {
    this.counterGenerator;
  }

  stopGame() {
    clearInterval(this.counterGenerator);
  }

  generateNumbers() {
    this.counter++;
    this.numberEmitter.emit(this.counter);
  }

}
