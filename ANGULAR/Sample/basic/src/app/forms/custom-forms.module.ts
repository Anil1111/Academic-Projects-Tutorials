import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { TDFormsAssignmentComponent } from './tdforms-assignment/tdforms-assignment.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsAssignmentComponent } from './reactive-forms-assignment/reactive-forms-assignment.component';

@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenFormsComponent,
    TDFormsAssignmentComponent,
    ReactiveFormsComponent,
    ReactiveFormsAssignmentComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class CustomFormsModule {}
