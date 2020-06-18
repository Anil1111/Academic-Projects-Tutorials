import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicesComponent, AccountComponent, NewAccountComponent],
  imports: [CommonModule, FormsModule],
})
export class ServicesModule {}
