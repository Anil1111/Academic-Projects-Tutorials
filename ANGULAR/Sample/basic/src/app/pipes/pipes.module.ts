import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [PipesComponent, ShortenPipe, FilterPipe, ReversePipe, SortPipe],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PipesModule { }
