import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { caprice } from '../interfaces/caprice.interface';
import { baseUrl } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CapricesService {

  capricesUrl: string;

  constructor(private httpClient: HttpClient) {
    this.capricesUrl = `${baseUrl}/api/desires`;
  }

  getAllCaprices(): Promise<caprice[]> {
    return this.httpClient.get<caprice[]>(this.capricesUrl).toPromise();
    }

  getByCountry(country){
      return this.httpClient.get<caprice[]>(this.capricesUrl+"/"+country).toPromise();
  }
  
  create (formValues):Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders()
    }
    return this.httpClient.post( this.capricesUrl, formValues, httpOptions).toPromise();
   }


  byId(id){
    return this.httpClient.get<caprice>(this.capricesUrl+"/detail/"+id).toPromise();
  }
}
