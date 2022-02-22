import { Component, Input, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef,Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stock-cards',
  templateUrl: './stock-cards.component.html',
  styleUrls: ['./stock-cards.component.scss']
})
export class StockCardsComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }
  @ViewChild("card1") card1: ElementRef | any;
  @ViewChild("card2") card2: ElementRef | any;
  @ViewChild("card3") card3: ElementRef | any;
  @ViewChild("card4") card4: ElementRef | any;
  @ViewChild("card5") card5: ElementRef | any;
  @ViewChild("card6") card6: ElementRef | any;

   @Input() cardNumber: number = 1;

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    s.text = ` {
      "symbol": "BSE:MRF",
      "width": 300,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }`;

    this.card1.nativeElement.appendChild(s);
    let s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    s2.text = ` {
      "symbol": "BSE:RELIANCE",
      "width": 300,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }`;
    this.card2.nativeElement.appendChild(s2);

    let s3 = document.createElement("script");
    s3.type = "text/javascript";
    s3.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    s3.text = ` {
      "symbol": "BSE:ZOMATO",
      "width": 300,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }`;
    this.card3.nativeElement.appendChild(s3);

    let s4 = document.createElement("script");
    s4.type = "text/javascript";
    s4.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    s4.text = ` {
      "symbol": "BSE:HDFCBANK",
      "width": 300,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }`;
    this.card4.nativeElement.appendChild(s4);


    let s5 = document.createElement("script");
    s5.type = "text/javascript";
    s5.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    s5.text = ` {
      "symbol": "BSE:ICICIBANK",
      "width": 300,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }`;
    this.card5.nativeElement.appendChild(s5);

    let s6 = document.createElement("script");
    s6.type = "text/javascript";
    s6.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    s6.text = ` {
      "symbol": "BSE:SBIN",
      "width": 300,
      "colorTheme": "light",
      "isTransparent": false,
      "locale": "en"
    }`;
    this.card6.nativeElement.appendChild(s6);
   }

}
