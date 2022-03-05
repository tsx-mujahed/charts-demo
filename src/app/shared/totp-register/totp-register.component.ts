import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from '../snackbar/alert.service';

@Component({
  selector: 'app-totp-register',
  templateUrl: './totp-register.component.html',
  styleUrls: ['./totp-register.component.scss']
})
export class TotpRegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertService: AlertService,private router: Router,
    public dialogRef: MatDialogRef<TotpRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    email:  string;
    qrUrl:  string;
    secret:  string;
    displaySecret: any;

  ngOnInit(): void {
    this.email = this.data.email;
    this.qrUrl = this.data.secret.qr;
    this.secret = this.data.secret.secret;
    this.displaySecret = false;
  }

  viewSecret(){
    this.displaySecret = this.displaySecret ? false : true;
  }

  copySecret(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.data.secret;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  proceedLogin(){
    this.dialogRef.close(); 
    this.router.navigate(['']);
  }

  onCloseClick(){
    this.dialogRef.close();    
  }

}
