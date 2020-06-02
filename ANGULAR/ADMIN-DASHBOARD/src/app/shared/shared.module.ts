import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

// support for flex layout attributes in html
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './components/table/table.component';


// this module is exported and used from the default.module
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AreaComponent, CardComponent, PieComponent, TableComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    RouterModule, // for suporting routerLink
    HighchartsChartModule, // highchart support
  ],
  // exporting all the components to be used in the DefaultComponent
  exports: [HeaderComponent, FooterComponent, SidebarComponent, AreaComponent, CardComponent, PieComponent, TableComponent],
})
export class SharedModule {}
