import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trip } from '../interfaces/trip.interface';
import { baseUrl } from './baseUrl';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  tripsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.tripsUrl = baseUrl+'/api/trips'
   }

 getAllTrips(): Promise<trip[]> {
  return this.httpClient.get<trip[]>(this.tripsUrl).toPromise();
  }

  getByCountry(country){
    return this.httpClient.get<trip[]>(this.tripsUrl+"/"+country).toPromise();
  }

  byId(id){
    return this.httpClient.get<trip>(this.tripsUrl+"/detail/"+id).toPromise();
  }

  create (formValues):Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders()
    }
    return this.httpClient.post( this.tripsUrl, formValues, httpOptions).toPromise();
   }


}






