import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  subjectVariable = new Subject<string>();
  behaviorVariable = new BehaviorSubject<string>('Starting Value'); // il behavior ha bisogno per forza dell'inizializzazione
  replayVariable = new ReplaySubject<string>();

  counter: number = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
      const nextValue = 'Sono passati: ' + this.counter * 2 + ' secondi';
      this.subjectVariable.next(nextValue);
      this.behaviorVariable.next(nextValue);
      this.replayVariable.next(nextValue);
    }, 2000);
  }

}
