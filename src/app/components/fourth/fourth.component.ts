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

  // Esempio a scuola: CONTROLLARE POI L'HTML

  //isEven: boolean = true;

  //contructor(...){}

  //ngOnInit(): void{
    //this.dataService.counterValue.subscribe({
    //next: (value: number) => {
      //const square = value**2;
      //if(square % 2 === 0){
        //this.isEven = true;
      //} else{
        //this.isEven = false;
      //}
    //}
    //})
    //error: err => console.log('Errore: ', err);
  //}

}
