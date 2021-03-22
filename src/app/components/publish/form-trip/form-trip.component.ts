import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { trip } from '../../../interfaces/trip.interface';
import { user } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-form-trip',
  templateUrl: './form-trip.component.html',
  styleUrls: ['./form-trip.component.scss']
})
export class FormTripComponent implements OnInit {

  @Input() userData: user;
  allData: user;

  myCountry: string;

  newTrip: trip;

  constructor(
    private tripService: TripService,
    private router: Router,
    private userService: UsersService
  ) { 
    this.newTrip = {
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
    this.userData = decode['id'];
    this.allData = await this.userService.getById(this.userData);
    pForm.country = this.myCountry;
    pForm.user_id = this.allData.id;
    await this.tripService.create(pForm); 
    }

}
