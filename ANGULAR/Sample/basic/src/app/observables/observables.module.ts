import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables.component';
import { ObsUserComponent } from './obs-user/obs-user.component';
import { ObsHomeComponent } from './obs-home/obs-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ObservablesComponent, ObsUserComponent, ObsHomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ObservablesModule { }
