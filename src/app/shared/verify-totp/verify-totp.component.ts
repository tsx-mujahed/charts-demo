import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from '../snackbar/alert.service';
import { LoginService } from 'src/app/login/login.service';
import { HttpchannelService } from 'src/app/core/services/httpchannel.service';

@Component({
  selector: 'app-verify-totp',
  templateUrl: './verify-totp.component.html',
  styleUrls: ['./verify-totp.component.scss']
})
export class VerifyTotpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VerifyTotpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private alertService: AlertService,private router: Router,
    private httpchannelService: HttpchannelService
  ) { }

  valueOTP: any
  loadingSubmitOTP = false;

  ngOnInit(): void {
  }

  submitOTP(){
    this.loadingSubmitOTP = true;
    let email : any = this.data.email;
    let res_data = {
      token: this.valueOTP,
      event: 'SIGNIN',
      signin_via: this.data.signin_via
    }
    this.httpchannelService.submitTotpCode( res_data, email).subscribe(
      (data: any) => {
        this.loadingSubmitOTP = false;
        this.authService.saveSignUpInfo(this.data.name,email,this.data.signin_via); // save logged in info
        this.authService.saveJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
        this.router.navigate(['']);
        this.dialogRef.close();
      },
      (error) => {
        this.loadingSubmitOTP = false;
        this.alertService.emitEvent(error.error.errors[0].msg)
      }
    );
  }

}
