import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-popoutchart',
  templateUrl: './popoutchart.component.html',
  styleUrls: ['./popoutchart.component.scss']
})
export class PopoutchartComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {   
    console.log('in view init') 
    
    new TradingView.widget(
      {
      "autosize": true,
      "symbol": "BSE:MRF",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "details": true,
      "studies": [
        "RSI@tv-basicstudies"
      ],
      "container_id": "technical-analysis"
    }
      );
  }

}
