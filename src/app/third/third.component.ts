import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  numberSquared: number = 0;

  constructor(public dataService: DataServiceService){}

  ngOnInit(): void {
    this.dataService.counterValue.subscribe(counterValue => {
      this.numberSquared = counterValue**2;
      this.dataService.oddOrEven.next(this.checkOddOrEven(this.numberSquared));
    });
  }

  checkOddOrEven(number: number): string {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

}
