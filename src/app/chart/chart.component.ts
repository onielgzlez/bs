import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any[];
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
      series: [7, 3, 30],
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
      colors: ['#55A6FF', '#FFCC00', '#F75454'],
      labels: ['Bajos', 'Medios', 'Críticos'],

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
