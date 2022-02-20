import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }


  displayedColumns = ['name', 'daychart', 'lastprice', 'change', 'volume', 'action', 'fav'];
  dataSource: any;
  ELEMENT_DATA: any;
  loadingDashbaord = true;

  ngOnInit(): void {
    this.setTableInfo();
    setTimeout(()=>{
      this.loadingDashbaord = false;
    },700)
  }

  setTableInfo(){
    this.ELEMENT_DATA = [
      { name: 'AMBUJACEM EQ', daychart: 'list', lastprice: '₹336.35', change: '21.45 (5.96%)', volume: '11.902M', label: 'NSE',},
      { name: 'DBL EQ', daychart: 'Helium', lastprice: '₹25.35', change: '10.5 (10.1%)', volume: '801.34K', label: 'BSE', },
      { name: 'GLAND EQ', daychart: 'Lithium', lastprice: '₹77.35', change: '1.8 (7.0%)' , volume: '389.70K', label: 'NSE',},
      { name: 'NASDAQ', daychart: 'Beryllium', lastprice: '₹993.35', change: '2.75 (6.0%)', volume: '950.28K', label: 'BSE' ,}
    ];
    this.dataSource = this.ELEMENT_DATA;
  }
  goToCharts(){
    this.router.navigate(['/charts/candlestick-charts']);
  }
  

}
