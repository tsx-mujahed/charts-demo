import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.modules';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MiniLineChartsComponent } from './mini-line-charts/mini-line-charts.component';
import { ChartDetailsComponent } from './chart-details/chart-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LineChartComponent,
    CandlestickChartComponent,
    DashboardComponent,
    MiniLineChartsComponent,
    ChartDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class HomeModule { }
