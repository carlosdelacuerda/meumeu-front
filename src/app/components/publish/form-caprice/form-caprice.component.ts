import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { caprice } from 'src/app/interfaces/caprice.interface';
import { CapricesService } from 'src/app/services/caprices.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-form-caprice',
  templateUrl: './form-caprice.component.html',
  styleUrls: ['./form-caprice.component.scss']
})
export class FormCapriceComponent implements OnInit {

  myCountry: string;
  newDesire: caprice;

  constructor(
    private capricesService: CapricesService,
    private router: Router
  ) { 
    this.newDesire = {
    };
  }

  ngOnInit(): void {
 
  }

  eventCountry(country){
    this.myCountry = country;
  }


  async onSubmit(pForm) {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    pForm.user_id = decode['id'];
    pForm.country = this.myCountry;
    await this.capricesService.create(pForm); 
    }

}
