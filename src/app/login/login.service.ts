import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  public login(options?: any) {
    return this.http.get(environment.apiURL + '/27cb1f1e-b9d8-41e2-9ee2-088c4321044d', options);
  }
  public postlogin(data: any, options?: any) {
    return this.http.post(environment.apiURL + '/login', data);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}
