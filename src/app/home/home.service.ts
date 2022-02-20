import { Injectable , EventEmitter, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  @Output() showSideBarEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
