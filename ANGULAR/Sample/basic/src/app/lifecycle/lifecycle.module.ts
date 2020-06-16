import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle.component';
import { Cockpit2Component } from './cockpit2/cockpit2.component';
import { ServerElement2Component } from './server-element2/server-element2.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './game-control/even/even.component';
import { OddComponent } from './game-control/odd/odd.component';

@NgModule({
  declarations: [
    LifecycleComponent,
    Cockpit2Component,
    ServerElement2Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class LifecycleModule {}
