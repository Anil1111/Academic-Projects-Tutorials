import { Component, OnInit } from '@angular/core';
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
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
    };

    HC_exporting(Highcharts); // for providing support to export the graphs

    setTimeout(() => { // setTimeout function to introduce delay/animation on loading of the chart
      window.dispatchEvent(
        new Event('resize')
      );
    }, 500);
  }
}

