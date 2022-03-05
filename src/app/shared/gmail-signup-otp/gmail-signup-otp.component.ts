import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpchannelService } from 'src/app/core/services/httpchannel.service';
import { AlertService } from '../snackbar/alert.service';

@Component({
  selector: 'app-gmail-signup-otp',
  templateUrl: './gmail-signup-otp.component.html',
  styleUrls: ['./gmail-signup-otp.component.scss']
})
export class GmailSignupOtpComponent implements OnInit {

  constructor(private httpchannelService: HttpchannelService,private authService: AuthService,
    private alertService: AlertService,private router: Router,
    public dialogRef: MatDialogRef<GmailSignupOtpComponent>,
    ) { }
  mobile_otp: any;
  username: any;
  mobile_number: number;
  disabledPhoneInput = false;
  displayOtpInfo = false;
  loadingSendUserInfo: boolean = false;
  loadingSendOtp = false;

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }
  onCloseClick(){
    //this.dialogRef.close();
  }
  submitOTP(){
    this.loadingSendOtp = true;
    let data = {
      one_time_secret: {mobile_otp: this.mobile_otp, email_otp: this.mobile_otp},
      event: 'SIGNUP',
      signin_via: 'GMAIL',
    }
    let email: any = this.authService.getEmail();
    this.httpchannelService.submitOTP(data,email).subscribe(
      (data: any) => {
        this.loadingSendOtp = false;
        console.log('Set token jwt');
        this.authService.saveJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF');
        // this.router.navigate(['']);
        this.dialogRef.close({data: data});
      },
      (error) => {
        this.loadingSendOtp = false;
        this.alertService.emitEvent(error.error.errors[0].msg)
      }
    );
  }
  submitUserInfo(){    
    this.loadingSendUserInfo = true;

    let email = this.authService.getEmail();
    let name = this.authService.getUsername();
    let signin_via = this.authService.getSignin_via();

    this.httpchannelService.userRegister({email: email,user_name: this.username,signin_via: signin_via,mobile_number: this.mobile_number})
    .subscribe(      
      (data: any) => {
        this.loadingSendUserInfo = false;
        this.disabledPhoneInput = true; //hide continue for phone
        this.displayOtpInfo = true;
        this.alertService.emitEvent('OTP sent to mobile number');
      },
      (error) => {
        this.loadingSendUserInfo = false;
        this.alertService.emitEvent(error.error.errors[0].msg);
      }
    )
  }

}
