import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/interfaces/trip.interface';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-filter-trips',
  templateUrl: './filter-trips.component.html',
  styleUrls: ['./filter-trips.component.scss']
})
export class FilterTripsComponent implements OnInit {

  countrySelected: string;

  arrTrips: trip[];

  constructor(
    private tripService: TripService
  ) { }

  ngOnInit(): void {
    this.tripService.getAllTrips()
    .then(response => {
      this.arrTrips = response;
    })
    .catch(error => {
      console.log(error)
    })
  }


  filterCountry(country) {
    if(country==='ALL') {
      this.tripService.getAllTrips()
      .then(response => {
        this.arrTrips = response;
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      this.tripService.getByCountry(country)
      .then(response => {
        this.arrTrips = response;
      })
      .catch(error => {
        console.log(error)
      })
    }
  }


}
