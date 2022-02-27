import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  
  constructor(private alertService: AlertService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.alertService.getMessage().subscribe(res=>{
      this.showSnackbar(res);
    });
  }
  showSnackbar(data: any){
    // this._snackBar.openFromComponent(SnackbarComponent, {
    //   duration: duration * 1000,
    // });
    this._snackBar.open(data.message,'Close',{duration: 3000});
  }

}
