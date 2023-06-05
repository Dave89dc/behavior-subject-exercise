import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
//import { Subscription } from 'rxjs'; si fa l'import della subscription

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit { //, OnDestroy si aggiunge OnDestroy

  numberSquared: number = 0;

  //dataSubscription?: Subscription; con la subscription

  constructor(public dataService: DataServiceService){}

  // ngOnDestroy(): void {  // si fa la funzione dell'OnDestroy
  //   if(this.dataSubscription){
  //     this.dataSubscription.unsubscribe(); // si fa la unsubscribe
  //   }
  // }

  ngOnInit(): void {
    this.dataService.counterValue.subscribe(counterValue => {
      this.numberSquared = counterValue**2;
      this.dataService.oddOrEven.next(this.checkOddOrEven(this.numberSquared));
    });
  }

  // ngOnInit(): void { la ngOnInit la si fa così!
  //   this.dataSubscription = this.dataService.counterValue.subscribe(counterValue => {
  //     this.numberSquared = counterValue**2;
  //     this.dataService.oddOrEven.next(this.checkOddOrEven(this.numberSquared));
  //   });
  // }

  checkOddOrEven(number: number): string {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

}
