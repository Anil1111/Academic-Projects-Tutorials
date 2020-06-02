import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts'; // for providing all the options to populate the Highcharts
import HC_exporting from 'highcharts/modules/exporting'; // for providing export capabilities



@Component({
  selector: 'app-widget-area', // altering the name to represent it is a widget
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions: {}; // providing initial values to populate respective options in the area.component.html
  Highcharts = Highcharts;

  @Input() data = [];

  constructor() {}

  ngOnInit(): void { // data copied form the Highchart site
    this.chartOptions = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Random DATA'
    },
    subtitle: {
        text: 'Demo'
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    credits: { // custom property added to disable credits appearing on the charts
      enabled: false
    },
    exporting: { // custom property added to add chart export capability
      enabled: true,
    },
    series: this.data
    };

    HC_exporting(Highcharts); // for providing support to export the graphs

    setTimeout(() => { // setTimeout function to introduce delay/animation on loading of the chart
      window.dispatchEvent(
        new Event('resize')
      );
    }, 500);
  }
}

