import { Component, OnInit, Input } from '@angular/core';
import { trip } from 'src/app/interfaces/trip.interface';
import { baseUrl } from 'src/app/services/baseUrl';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss']
})
export class ListTripsComponent implements OnInit {

  
  @Input() arrTrips: trip[];

  baseUrl: string = baseUrl;

  constructor(
    private tripService: TripService
    ) { 
    this.arrTrips = [];
  }

  ngOnInit(): void {
   
  }



}
