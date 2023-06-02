import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit{

  oddOrEven: string = '';

  constructor(public dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.oddOrEven.subscribe(oddOrEven => {
      this.oddOrEven = oddOrEven;
    });
  }

}
