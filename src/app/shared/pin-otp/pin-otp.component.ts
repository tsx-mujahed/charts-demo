import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pin-otp',
  templateUrl: './pin-otp.component.html',
  styleUrls: ['./pin-otp.component.scss']
})
export class PinOtpComponent implements OnInit {
  valueOTP: any

  constructor(
    public dialogRef: MatDialogRef<PinOtpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    
  }
  onCloseClick(){
    this.dialogRef.close();
  }
  submitOTP(){
    console.log('OTP enter',this.valueOTP)
  }
  onResendOTP(){
    console.log('resend otp')
  }

}
