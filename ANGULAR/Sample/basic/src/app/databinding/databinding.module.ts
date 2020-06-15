import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './databinding.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';



@NgModule({
  declarations: [
    DatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DatabindingModule { }
