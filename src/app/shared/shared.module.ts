import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.modules';
import { SpinnerComponent } from './spinner/spinner.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { AlertService } from './snackbar/alert.service';
import { FormatTimePipe, PinOtpComponent } from './pin-otp/pin-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GmailSignupOtpComponent } from './gmail-signup-otp/gmail-signup-otp.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { LoginOtpVerifyComponent } from './login-otp-verify/login-otp-verify.component';
import { InappSignupOtpComponent } from './inapp-signup-otp/inapp-signup-otp.component';
import { TotpRegisterComponent } from './totp-register/totp-register.component';
import { VerifyTotpComponent } from './verify-totp/verify-totp.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    SnackbarComponent,
    PinOtpComponent,
    GmailSignupOtpComponent,
    AppLoaderComponent,
    LoginOtpVerifyComponent,
    InappSignupOtpComponent,FormatTimePipe, TotpRegisterComponent, VerifyTotpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers: [AlertService],
  exports: [SpinnerComponent,SnackbarComponent,PinOtpComponent,
    GmailSignupOtpComponent,
    AppLoaderComponent,FormatTimePipe
  ]
})
export class SharedModule { }
