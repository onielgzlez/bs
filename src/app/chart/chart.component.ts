import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexYAxis,
  ApexXAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels?: any;
  colors?: any[];
  yaxis?: ApexYAxis;
  xaxis?: ApexXAxis;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class CustomChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() options: any;

  constructor() {
    this.chartOptions = {
      series: [3, 7, 3, 7, 30],
      chart: {
        width: 250,
        type: 'pie',
      },
      dataLabels: {
        enabled: false,
        offsetX: 50,
        offsetY: 50,
      },
      legend: {
        show: false,
        position: 'bottom',
      },
      colors: ['#fd996b', '#f7db4f', '#24bfa8', '#3f94bd', '#f67aaf'],
      labels: ['Muy Altos', 'Altos', 'Moderados', 'Bajos', 'Críticos'],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {
    this.chartOptions = { ...this.chartOptions, ...this.options };
  }
}
