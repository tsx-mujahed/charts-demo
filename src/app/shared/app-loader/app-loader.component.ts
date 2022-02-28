import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  constructor() { }
  @Input() loading = false;
  ngOnInit(): void {
  }

}