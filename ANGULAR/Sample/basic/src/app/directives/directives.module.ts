import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { HostBindingHighlightDirective } from './hostbinding-highlight/host-binding-highlight.directive';
import { PropertyBindingHighlightDirective } from './directiveWithPropertyBinding-highlight/property-binding-highlight.directive';
import { UnlessDirective } from './unless-directive/unless.directive';



@NgModule({
  declarations: [
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HostBindingHighlightDirective,
    PropertyBindingHighlightDirective,
    UnlessDirective // declaring the directive added
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
