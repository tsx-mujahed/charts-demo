import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  @ViewChild("card1") rightchart: ElementRef | any;


  displayedColumns = ['name', 'daychart', 'lastprice', 'change', 'volume', 'action', 'fav'];
  dataSource: any;
  dataSource2: any;
  ELEMENT_DATA: any;
  ELEMENT_DATA2: any;
  loadingDashbaord : boolean = true;

  ngOnInit(): void {
    this.setTableInfo();
    setTimeout(()=>{
      this.loadingDashbaord = false;
    },2500)
  }

  ngAfterViewInit() {
    
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    s.text = ` {
      "colorTheme": "light",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "width": "400",
      "height": "660",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(240, 243, 250, 0)",
      "scaleFontColor": "rgba(120, 123, 134, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Indices",
          "symbols": [
            {
              "s": "BSE:SENSEX",
              "d": "SENSEX"
            },
            {
              "s": "BSE:BANK",
              "d": "BSE: BANKS"
            },
            {
              "s": "BSE:SBIN",
              "d": "BSE SBIN"
            },
            {
              "s": "FOREXCOM:SPXUSD",
              "d": "S&P 500"
            },
            {
              "s": "INDEX:DEU40",
              "d": "DAX Index"
            }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Futures",
          "symbols": [
            {
              "s": "CME_MINI:ES1!",
              "d": "S&P 500"
            },
            {
              "s": "CME:6E1!",
              "d": "Euro"
            },
            {
              "s": "COMEX:GC1!",
              "d": "Gold"
            },
            {
              "s": "NYMEX:CL1!",
              "d": "Crude Oil"
            },
            {
              "s": "NYMEX:NG1!",
              "d": "Natural Gas"
            },
            {
              "s": "CBOT:ZC1!",
              "d": "Corn"
            }
          ],
          "originalTitle": "Futures"
        },
        {
          "title": "Bonds",
          "symbols": [
            {
              "s": "CME:GE1!",
              "d": "Eurodollar"
            },
            {
              "s": "CBOT:ZB1!",
              "d": "T-Bond"
            },
            {
              "s": "CBOT:UB1!",
              "d": "Ultra T-Bond"
            },
            {
              "s": "EUREX:FGBL1!",
              "d": "Euro Bund"
            },
            {
              "s": "EUREX:FBTP1!",
              "d": "Euro BTP"
            },
            {
              "s": "EUREX:FGBM1!",
              "d": "Euro BOBL"
            }
          ],
          "originalTitle": "Bonds"
        },
        {
          "title": "Forex",
          "symbols": [
            {
              "s": "FX:EURUSD"
            },
            {
              "s": "FX:GBPUSD"
            },
            {
              "s": "FX:USDJPY"
            },
            {
              "s": "FX:USDCHF"
            },
            {
              "s": "FX:AUDUSD"
            },
            {
              "s": "FX:USDCAD"
            }
          ],
          "originalTitle": "Forex"
        }
      ]
    }`;

    this.rightchart.nativeElement.appendChild(s);
  }
  setTableInfo(){
    this.ELEMENT_DATA = [
      { name: 'MRF', daychart: 'list', lastprice: '₹336.35', change: '21.45 (5.96%)', volume: '11.902M', label: 'BSE',},
      { name: 'DBL EQ', daychart: 'Helium', lastprice: '₹25.35', change: '10.5 (10.1%)', volume: '801.34K', label: 'BSE', },
      { name: 'GLAND EQ', daychart: 'Lithium', lastprice: '₹77.35', change: '1.8 (7.0%)' , volume: '389.70K', label: 'NSE',},
      { name: 'NASDAQ', daychart: 'Beryllium', lastprice: '₹993.35', change: '2.75 (6.0%)', volume: '950.28K', label: 'BSE' ,}
    ];
    this.dataSource = this.ELEMENT_DATA;

    this.ELEMENT_DATA2 = [
      { name: 'ADANI', daychart: 'list', lastprice: '₹336.35', change: '-21.45 (5.96%)', volume: '11.902M', label: 'BSE',},
      { name: 'ZOMATO', daychart: 'Helium', lastprice: '₹25.35', change: '-10.5 (10.1%)', volume: '801.34K', label: 'BSE', },
      { name: 'IRFC', daychart: 'Lithium', lastprice: '₹77.35', change: '-1.8 (7.0%)' , volume: '389.70K', label: 'NSE',},
      { name: 'NASDAQ', daychart: 'Beryllium', lastprice: '₹993.35', change: '-2.75 (6.0%)', volume: '950.28K', label: 'BSE' ,}
    ];
    this.dataSource2 = this.ELEMENT_DATA2;
  }
  goToCharts(){
    this.router.navigate(['/charts/candlestick-charts']);
  }
  

}
