import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {

  isTable: boolean = true;

  comparisonData: string[][] = [
    ["https://doi.org/10.31803/tg-20190712095507", "3", "97.44", "92.54", "91", "94.71"],
    ["https://www.mdpi.com/2076-3417/12/11/5645", "3", "96.07", "96.7", "97.3", "97.03"],
    ["https://doi.org/10.3390/diagnostics12102541", "4", "98.75", "99", "99", "98.75"],
    ["https://doi.org/10.3390/app12115645", "4", "98.28", "99.75", "98.91", "99"],
    ["#", "4", "99.68", "99.67", "99.66", "99.75"],
  ]

  displayTable() {
    this.isTable = true;
  }

  displayChart() {
    this.isTable = false;
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Model Accuracy',
    },
    xAxis: {
      categories: ['Test Split', 'Testing Dataset'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Accuracy',
      },
      max: 100
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: 'Accuracy: <b>{point.y:.2f}%</b>',
    },
    series: [
      {
        name: 'MobileNetV2',
        type: 'column',
        data: [99.17, 88.98],
        color: '#1b3f8c',
      },
      {
        name: 'ResNet50',
        type: 'column',
        data: [98.70, 93.64],
        color: '#1e3564',
      },
      {
        name: 'InceptionV3',
        type: 'column',
        data: [98.33, 94.60],
        color: '#3b5c9f',
      },
      {
        name: 'DenseNet121',
        type: 'column',
        data: [99.49, 94.96],
        color: '#4a5e87',
      },
      {
        name: 'EfficientNetB4',
        type: 'column',
        data: [99.66, 97.03],
        color: '#121e4d',
      },
    ],
  };
}
