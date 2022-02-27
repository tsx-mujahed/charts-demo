import { Injectable , EventEmitter, Output} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  @Output() snackbarEventobs = new Subject<any>();
  constructor() {
  }

  getMessage(): Observable<any>{
    return this.snackbarEventobs.asObservable();
  }
  emitEvent(message: any){
    this.snackbarEventobs.next({message: message});
  }
}
