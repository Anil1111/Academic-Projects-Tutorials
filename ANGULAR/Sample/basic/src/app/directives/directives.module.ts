import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { BasicHighlightDirective } from './basic-highlight.directive';



@NgModule({
  declarations: [DirectivesComponent, BasicHighlightDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
