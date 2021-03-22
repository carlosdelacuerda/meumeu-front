import { Component, OnInit } from '@angular/core';
import { CapricesService } from 'src/app/services/caprices.service';
import { caprice } from 'src/app/interfaces/caprice.interface';

@Component({
  selector: 'app-filter-caprices',
  templateUrl: './filter-caprices.component.html',
  styleUrls: ['./filter-caprices.component.scss']
})
export class FilterCapricesComponent implements OnInit {

  countrySelected: string;
  arrCaprices: caprice[];

  constructor(
    private capriceService: CapricesService
  ) { }

  ngOnInit(): void {
    this.capriceService.getAllCaprices()
    .then(response => {
      this.arrCaprices = response;
    }) 
    .catch(error => {
      console.log(error)
    })
  }

  filterCountry(country) {
    if(country==='ALL') {
      this.capriceService.getAllCaprices()
      .then(response => {
        this.arrCaprices = response;
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      this.capriceService.getByCountry(country)
    .then(response => {
      this.arrCaprices = response;
    })
    .catch(error => {
      console.log(error)
    })
    }
  }

}
