import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
   }

   saveSignUpInfo(username: string,email: any,signin_via: any,){
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('signin_via', signin_via);
   }
   savePhoneNumber(phonenumber: any){
    window.localStorage.setItem('phonenumber', phonenumber);
   }
   saveJWT(token: any){
    window.localStorage.setItem('token', token);
   }

   getPhoneNumber(){
    return window.localStorage.getItem('phonenumber') || null;
   }

   getUsername(){
    return window.localStorage.getItem('username') || null;
   }

   getEmail(){
    return window.localStorage.getItem('email') || null;
   }

   getSignin_via(){
    return window.localStorage.getItem('signin_via') || null;
   }
}
