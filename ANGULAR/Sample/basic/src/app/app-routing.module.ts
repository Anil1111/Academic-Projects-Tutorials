import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { BasicComponent } from './basic/basic.component';
import { DatabindingComponent } from './databinding/databinding.component';


const routes: Routes = [
  {path: '', component: BasicComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
