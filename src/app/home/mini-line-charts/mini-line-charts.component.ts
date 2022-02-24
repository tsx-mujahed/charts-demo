import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexFill,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTooltip
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  colors: any;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-mini-line-charts',
  templateUrl: './mini-line-charts.component.html',
  styleUrls: ['./mini-line-charts.component.scss']
})
export class MiniLineChartsComponent implements OnInit {

  constructor() { }

  public chartOptions: ChartOptions;
  public oneChartOptions: ChartOptions;
  public twoChartOptions: ChartOptions;
  public treeChartOptions: ChartOptions;
  public fourChartOptions: ChartOptions;
  selectedColor: string = "#0bd2a0";
  selectedSeriesData: any = {
    name: "Desktops",
    data: [
      Math.floor(Math.random() * 100) + 1, 
      Math.floor(Math.random() * 100) + 1,
      20,80,20,40,50,10,
      35, 
      Math.floor(Math.random() * 100) + 1,
      70, 50, 99, 91,130]
  };
  @Input() chartType: number = 1;

  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;

  ngOnInit(): void {
    this.selectedColor = this.chartType == 1 ? "#0bd2a0" : '#f44336';
    if(this.chartType ==2){
      this.selectedSeriesData = {
        name: "Desktops",
        data: [
          Math.floor(Math.random() * 100) + 1, 
          Math.floor(Math.random() * 100) + 1,
          20,80,20,40,50,10,
          35, 
          Math.floor(Math.random() * 100) + 1,
          70,51 , 45, 39,30]
      };
    } 
    this.setChartInfo();
  }

  setChartInfo(){
    this.chartOptions = {
      series: [
        this.selectedSeriesData
      ],
      chart: {
        height: 80,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar:  {show: false},
      },
      colors: [this.selectedColor],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width: 2
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        axisTicks: { show: false},
        labels: { show: false}
      },
      yaxis: {
        labels: { show: false}
      },
      plotOptions: {
        area: {
            fillTo: 'origin',
        }
    }
    };
  }

}
