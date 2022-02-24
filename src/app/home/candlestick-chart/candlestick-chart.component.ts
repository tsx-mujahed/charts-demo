import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  ApexStroke
} from "ng-apexcharts";
import { HomeService } from '../home.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  colors?: any;
};

declare const TradingView: any;
@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})
export class CandlestickChartComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  public chartOptions: ChartOptions;
  @ViewChild("linechart") linechart: ElementRef | any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.setGraph();
    this.homeService.showSideBarEvent.emit(false);
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.setGraph();
    },1)
 
    // let s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "https://s3.tradingview.com/tv.js";
    // s.text = `new TradingView.widget(
    //   {
    //   "width": 980,
    //   "height": 610,
    //   "symbol": "BSE:MRF",
    //   "interval": "D",
    //   "timezone": "Etc/UTC",
    //   "theme": "light",
    //   "style": "1",
    //   "locale": "in",
    //   "toolbar_bg": "#f1f3f6",
    //   "enable_publishing": false,
    //   "allow_symbol_change": true,
    //   "container_id": "tradingview_fe1ad"
    // });`;

    //this.linechart.nativeElement.appendChild(s);
    new TradingView.widget(
      {
      "width": 1080,
      "height": 475,
      "symbol": "BSE:MRF",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "hide_top_toolbar": true,
      "enable_publishing": false,
      "allow_symbol_change": false,
      "container_id": "technical-analysis"
    });
  }

  setGraph(){
    new TradingView.widget(
      {
      "width": 1080,
      "height": 475,
      "symbol": "BSE:MRF",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "hide_top_toolbar": true,
      "enable_publishing": false,
      "allow_symbol_change": false,
      "container_id": "technical-analysis"
    });

  }
  ngOnDestroy(): void {
      this.homeService.showSideBarEvent.emit(false)
  }

}
