import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  counterValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  oddOrEven: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  increment(){
    this.counterValue.next(this.counterValue.value + 1);
  }

  decrement(){
    this.counterValue.next(this.counterValue.value - 1);
  }

}
