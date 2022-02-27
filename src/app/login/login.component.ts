import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  MicrosoftLoginProvider,
} from 'angularx-social-login';
import { PinOtpComponent } from '../shared/pin-otp/pin-otp.component';
import { AlertService } from '../shared/snackbar/alert.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    public dialog: MatDialog,
    private alertService: AlertService
  ) { }

  value2: string;
  value1: string;

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = user != null;
      console.log(user,'user info');
      window.localStorage.setItem('name',user.firstName)
      window.localStorage.setItem('token',user.idToken)
      this.router.navigate(['']);
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithMicrosoft(): void {
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }
  loginWithSubmit(){
    if(!this.value1 || !this.value2){
      this.alertService.emitEvent('Enter Username & Password');
      return;
    }
    let user = {
      firstName: this.value1,
      idToken: this.value2
    }
    // window.localStorage.setItem('name',user.firstName);
    // window.localStorage.setItem('token',user.idToken);
    this.alertService.emitEvent('Login Successful');
    const dialogRef = this.dialog.open(PinOtpComponent,
      {
        width: '400px', height: '400px', data: { username: this.value1 }, panelClass: 'my-dialog',
        backdropClass: 'my-backdrop'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result of OTP: ${result}`);
    });
    //this.router.navigate(['']);
  }
  logOut(): void {
    this.socialAuthService.signOut();
    window.localStorage.clear();
  }
  signUp(){
    const dialogRef = this.dialog.open(SignUpComponent,{width: '500px',height: '450px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
