import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorComponent } from './error/error.component';
import { BasicModule } from './basic/basic.module';
import { DatabindingModule } from './databinding/databinding.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';
import { RoutingModule } from './routing/routing.module';
import { ObservablesModule } from './observables/observables.module';
import { CustomFormsModule } from './forms/custom-forms.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    DatabindingModule,
    LifecycleModule,
    DirectivesModule,
    ServicesModule,
    ObservablesModule,
    CustomFormsModule,
    PipesModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
