import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpchannelService {

  constructor(private http: HttpClient) { }

  public userRegister(data: any, options?: any) {
    return this.http.post(environment.apiURL + '/users/register', data); 
    // return this.http.post('https://reqres.in/api/users', data);
  }

  public submitOTP(data: any, user_id: string,options?: any) {
    return this.http.post(environment.apiURL + '/users/'+ user_id + '/verify', data); 
    //return this.http.post('https://reqres.in/api/users', data);
  }

}
