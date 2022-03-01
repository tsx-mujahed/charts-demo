import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  SocialAuthService,GoogleLoginProvider
} from 'angularx-social-login';
import { AuthService } from '../core/services/auth.service';
import { HttpchannelService } from '../core/services/httpchannel.service';
import { AlertService } from '../shared/snackbar/alert.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    public dialog: MatDialog,
    private httpchannelService: HttpchannelService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  userNameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  authSubscription: any;
  loadingCreateUser = false; // inapp create

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.authSubscription = this.socialAuthService.authState.subscribe((user) => {
      console.log(user,'in sigb up')
      if(window.localStorage.getItem('isSignUpOpen') == 'true' && user){
        this.authService.saveSignUpInfo(user.name,user.email,'GMAIL');
        this.openGmailUserOtpPopup();
     } else {
       console.log('do nothing in signup')
     }      
    });
  }

  registerUser(){
    this.loadingCreateUser = true;

    let email = this.emailFormControl.value;
    let name = this.userNameFormControl.value;
    let signin_via = 'INAPP';
    let phone = this.phoneFormControl.value;
    let password = this.passwordFormControl.value;

    this.httpchannelService.userRegister({email: email,user_name: name,password: password,signin_via: signin_via,mobile_number: phone})
    .subscribe(      
      (data: any) => {
        this.loadingCreateUser = false;
        this.alertService.emitEvent('OTP sent to Mobile number & Email');
        this.dialogRef.close({signin_via: 'INAPP',email: email,username: name})
      },
      (error) => {
        this.loadingCreateUser = false;
        console.log('in error',error)
        this.alertService.emitEvent(error.error.errors[0].msg)
      }
    )
  }
  signupWithGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  closepop(){
    this.dialogRef.close();
  }

  onCloseClick(){
    this.dialogRef.close();    
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }    
  }
  openGmailUserOtpPopup(){
    setTimeout(() => {    
      console.log('closing popup sign up')
      this.dialogRef.close({'signin_via': 'GMAIL'});
    }, 0);
    //this.dialogRef.close({'signin_via': 'GMAIL'});
  }
  openInappUserOtpPopup(){
    this.dialogRef.close({'signin_via': 'INAPP'}); // Done in line 72
  }
  

}
