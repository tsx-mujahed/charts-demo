import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpchannelService } from 'src/app/core/services/httpchannel.service';
import { AlertService } from '../snackbar/alert.service';

@Component({
  selector: 'app-inapp-signup-otp',
  templateUrl: './inapp-signup-otp.component.html',
  styleUrls: ['./inapp-signup-otp.component.scss']
})
export class InappSignupOtpComponent implements OnInit {

  constructor(private httpchannelService: HttpchannelService,private authService: AuthService,
    private alertService: AlertService,private router: Router,
    public dialogRef: MatDialogRef<InappSignupOtpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

    username: any;
    mobile_otp: any;
    email_otp: any;
    loadingSendOtp: any;

    displayResendButton = false;
    countDown: Subscription;
    counter = 10;
    tick = 1000;

  ngOnInit(): void {
    this.username = this.data.username;
  }
  submitOTP(){
    this.loadingSendOtp = true;
    let data = {
      one_time_secret: {mobile_otp: this.mobile_otp,email_otp: this.email_otp},
      event: 'SIGNUP',
      signin_via: 'INAPP',
    }
    this.httpchannelService.submitOTP(data,this.data.email).subscribe(
      (data: any) => {
        this.loadingSendOtp = false;
        console.log('Set token jwt');
        this.authService.saveSignUpInfo(this.username,this.data.email,'INAPP');
        this.authService.saveJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF');
        this.router.navigate(['']);
        this.dialogRef.close();
      },
      (error) => {
        this.loadingSendOtp = false;
        this.alertService.emitEvent('Invalid OTP')
      }
    );
  }

}
