import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(){
    console.log('IN INTERCPTOR')
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add custom header
    const customReq = request.clone({
      setHeaders: {
        'Auth': 'Bearer' + 'dsd',
        'Access-Control-Allow-Origin': '*'
      }
      //headers: request.headers.set('app-author', 'test-headers')
    });

    //console.log('processing request', customReq);


    return next.handle(customReq);
  }
}