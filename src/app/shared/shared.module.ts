import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.modules';
import { SpinnerComponent } from './spinner/spinner.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { AlertService } from './snackbar/alert.service';
import { PinOtpComponent } from './pin-otp/pin-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpinnerComponent,
    SnackbarComponent,
    PinOtpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers: [AlertService],
  exports: [SpinnerComponent,SnackbarComponent,PinOtpComponent]
})
export class SharedModule { }
