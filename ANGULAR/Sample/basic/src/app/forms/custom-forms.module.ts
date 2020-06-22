import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent],
  imports: [CommonModule, FormsModule],
})
export class CustomFormsModule {}
