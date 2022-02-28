import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  MicrosoftLoginProvider,
} from 'angularx-social-login';
import { AuthService } from '../core/services/auth.service';
import { GmailSignupOtpComponent } from '../shared/gmail-signup-otp/gmail-signup-otp.component';
import { InappSignupOtpComponent } from '../shared/inapp-signup-otp/inapp-signup-otp.component';
import { PinOtpComponent } from '../shared/pin-otp/pin-otp.component';
import { AlertService } from '../shared/snackbar/alert.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    public dialog: MatDialog,
    public dialog2: MatDialog,
    private alertService: AlertService,
    private loginService: LoginService,
    private authService: AuthService
  ) { }

  value2: string;
  value1: string;
  loginLoading: boolean = false;
  gmailLoginLoading = false;
  displayLoginCard = true;
  authSubscription: any;
  loadingInappLogin = false;

  ngOnInit(): void {
    //this.displayLoginCard = true;
    this.authSubscription = this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = user != null;
      if(window.localStorage.getItem('isSignUpOpen') == 'false' || window.localStorage.getItem('isSignUpOpen') == null){
         if(user){
          this.checkIsUserRegistred(user); //login proceess with gmail
         } else {
           // do nothing
         }
        
      } else {
        console.log('do nothing in login')
      }
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithSubmit() {
    if (!this.value1 || !this.value2) {
      this.alertService.emitEvent('Enter Username & Password');
      return;
    }
    this.loadingInappLogin = true;
    let user = {
      email: this.value1,
      password: this.value2,
      signin_via: 'INAPP'
    }

    this.loginService.login(user).subscribe(
      (res: any) => {
        this.loadingInappLogin = false;
        this.openOTPComp(res.user_name,res.email,'INAPP');
      },
      error => {
        this.loadingInappLogin = false;
        this.alertService.emitEvent(error.error.errors[0].msg);
      }
    );
  }
  openOTPComp(name: any,email: any,signin_via: any) {
    this.alertService.emitEvent('Login Successful');
    this.displayLoginCard = false;
    const dialogRef = this.dialog.open(PinOtpComponent,
      {
        width: '445px', height: '410px', data: { name:  name,email: email,signin_via: signin_via}, panelClass: 'my-dialog',
        backdropClass: 'my-backdrop', hasBackdrop: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.displayLoginCard = true;
      console.log(`Dialog result of PIN OTP comp OTP: ${result}`);
    });
    //this.router.navigate(['']);
  }
  logOut(): void {
    this.socialAuthService.signOut();
    window.localStorage.clear();
  }
  signUp() {
    let dialogRef2: any;
    dialogRef2 = this.dialog2.open(SignUpComponent, { width: '520px', height: '535px',panelClass: 'my-dialog' });
    window.localStorage.setItem('isSignUpOpen','true');
  
    dialogRef2.afterClosed().subscribe((result: { signin_via: string; }) => {
      window.localStorage.setItem('isSignUpOpen','false')
      console.log(`Dialog result sigbup: ${result}`);
      if(result.signin_via == 'GMAIL'){
        this.openGmailUserOtpPopup(); // sign up using gmail
      } else if(result.signin_via == 'INAPP'){
        this.openInappUserOtpPopUp(result); // sign up using inapp
      }      
    });
  }

  /* open on sign up using gmail*/
  openGmailUserOtpPopup(){
    this.displayLoginCard = false;
    const dialogRef = this.dialog.open(GmailSignupOtpComponent,
      {
        width: '420px', height: '480px', data: { username: this.value1 }, panelClass: 'my-dialog',
        backdropClass: 'my-backdrop',hasBackdrop: false
      });

    dialogRef.afterClosed().subscribe(result => {
      this.displayLoginCard = true;
      console.log(`Dialog result of gmailpop: ${result}`);
    });
  }
  openInappUserOtpPopUp(data: any){
    this.displayLoginCard = false;
    const dialogRef = this.dialog.open(InappSignupOtpComponent,
      {
        width: '420px', height: '480px', data: data, panelClass: 'my-dialog',
        backdropClass: 'my-backdrop',hasBackdrop: false
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result of gmailpop: ${result}`);
    });
  }
  checkIsUserRegistred(user_data: any){
    this.gmailLoginLoading = true;
    this.loginService.login({email: user_data.email,signin_via: 'GMAIL'}).subscribe(
      (res: any) => {
        this.gmailLoginLoading = false;
        if(res.status == true){
          this.authService.saveSignUpInfo(user_data.name,user_data.email,'GMAIL'); // remove this if otp page is refreshed or closed
          this.openOTPComp(user_data.name,user_data.email,'GMAIL');
        }else{
          this.alertService.emitEvent('Email is not registered, Please sign up')
        }
        
      },
      error => {
        this.gmailLoginLoading = false;
        this.alertService.emitEvent(error.error.errors[0].msg)
      }
    );
  }
  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }

}

