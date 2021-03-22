import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  country: string;

  @Output() exportCountry = new EventEmitter<string>();


  constructor() { 
   
  
  }

  ngOnInit(): void {
  }

  onChange(){
    this.exportCountry.emit(this.country);
  };


  
}
