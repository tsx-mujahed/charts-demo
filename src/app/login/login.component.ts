import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  MicrosoftLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
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
    let user = {
      firstName: 'admin',
      idToken: 'abc-123-token'
    }
    window.localStorage.setItem('name',user.firstName);
    window.localStorage.setItem('token',user.idToken);
    this.router.navigate(['']);
  }
  logOut(): void {
    this.socialAuthService.signOut();
    window.localStorage.clear();
  }

}
