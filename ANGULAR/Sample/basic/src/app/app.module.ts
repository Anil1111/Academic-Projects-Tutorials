import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorComponent } from './error/error.component';
import { BasicModule } from './basic/basic.module';
import { DatabindingModule } from './databinding/databinding.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    DatabindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
