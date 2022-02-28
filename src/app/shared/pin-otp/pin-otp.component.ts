import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpchannelService } from 'src/app/core/services/httpchannel.service';
import { AlertService } from '../snackbar/alert.service';
import { timer, Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-pin-otp',
  templateUrl: './pin-otp.component.html',
  styleUrls: ['./pin-otp.component.scss']
})
export class PinOtpComponent implements OnInit {
  valueOTP: any
  loadingSubmitOTP = false;

  countDown: Subscription;
  counter = 10;
  tick = 1000;
  displayResendButton = false;

  constructor(
    public dialogRef: MatDialogRef<PinOtpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpchannelService: HttpchannelService,private authService: AuthService,
    private alertService: AlertService,private router: Router,
  ) { }

  ngOnInit(): void {
    this.startTimer();
  }
  startTimer() {
    this.countDown = timer(0, this.tick).subscribe((observer) => {
      if (this.counter == 1) {
        this.unusubscribeTimer();
      }
      --this.counter;
    });
  }
  unusubscribeTimer(){
    this.displayResendButton = true;
    this.countDown.unsubscribe();
  }
  onCloseClick(){
    this.dialogRef.close();
  }
  submitOTP(){
    this.loadingSubmitOTP = true;
    let email : any = this.data.email;
    let res_data = {
      one_time_secret: { email_otp: this.valueOTP ,mobile_otp: this.valueOTP },
      event: 'SIGNIN',
      signin_via: this.data.signin_via
    }
    this.httpchannelService.submitOTP( res_data, email).subscribe(
      (data: any) => {
        this.loadingSubmitOTP = false;
        this.authService.saveJWT('xyz-12');
        this.router.navigate(['']);
        this.dialogRef.close();
      },
      (error) => {
        this.loadingSubmitOTP = false;
        this.alertService.emitEvent(error.error.errors[0].msg)
      }
    );
  }
  onResendOTP(){
    console.log('resend otp')
  }

}

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
