import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs-service/rxjs.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor(private rxjsService: RxjsService){}

  ngOnInit(): void {

    // this.rxjsService.subjectVariable.subscribe({
    //   next: (value: string) => console.log('Subject', value),
    //   error: err => console.log('Errore: ', err)
    // });

    // this.rxjsService.behaviorVariable.subscribe({
    //   next: (value: string) => console.log('BehaviorSubject', value),
    //   error: err => console.log('Errore: ', err)
    // });

    // this.rxjsService.replayVariable.subscribe({
    //   next: (value: string) => console.log('ReplaySubject', value),
    //   error: err => console.log('Errore: ', err)
    // });

    setTimeout(() => {
    // this.rxjsService.subjectVariable.subscribe({
    //   next: (value: string) => console.log('Subject', value),
    //   error: err => console.log('Errore: ', err)
    // });
    // }, 6000);

    // this.rxjsService.behaviorVariable.subscribe({
    //   next: (value: string) => console.log('Subject', value),
    //   error: err => console.log('Errore: ', err)
    // });
    // }, 6000);

    this.rxjsService.replayVariable.subscribe({
      next: (value: string) => console.log('Subject', value),
      error: err => console.log('Errore: ', err)
    });
    }, 10000);

  }

}
