import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
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

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = user != null;
      console.log(user,'some error');
      window.localStorage.setItem('name',user.firstName)
      window.localStorage.setItem('token',user.idToken)
      this.router.navigate(['']);
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
    window.localStorage.clear();
  }

}
