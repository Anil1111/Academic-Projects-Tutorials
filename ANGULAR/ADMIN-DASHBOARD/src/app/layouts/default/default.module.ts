import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// importing exported components from SharedModule
import { SharedModule } from 'src/app/shared/shared.module';

import { DefaultComponent } from './default.component';
// importing components from the modules
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';

// imports for Material support
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule, // explicitly added to support <router-outlet>
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [ // providers used to add services
    DashboardService
  ]
})
export class DefaultModule {}
