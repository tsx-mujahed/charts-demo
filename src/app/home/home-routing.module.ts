import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent  } from './line-chart/line-chart.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopoutchartComponent } from './popoutchart/popoutchart.component';


const routes: Routes = [
    {
        path: 'charts', component: HomeComponent,
        children : [
            
            { path: 'line-charts', component: LineChartComponent  },
            { path: 'candlestick-charts', component: CandlestickChartComponent },
            { path: 'dashaboard', component: DashboardComponent},
            { path: '', redirectTo: 'dashaboard' }
        ]
    },
    //{ path: 'popout-charts', component: PopoutchartComponent},
   
    { path: '', redirectTo: 'charts' }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }