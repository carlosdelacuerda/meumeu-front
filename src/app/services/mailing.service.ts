import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mail } from '../interfaces/mail.interface';
import { baseUrl } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  mailsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.mailsUrl = baseUrl+'/api/mailing'
   }

    getAll(): Promise<mail[]> {
      return this.httpClient.get<mail[]>(this.mailsUrl).toPromise();
    }

    getRecibed(user_r){
        return this.httpClient.get<mail[]>(this.mailsUrl+"/inbox/"+user_r).toPromise();
    }

    getSend(user_s){
      return this.httpClient.get<mail[]>(this.mailsUrl+"/send/"+user_s).toPromise();
    }

    create (formValues):Promise<any>{
      const httpOptions = {
        headers: new HttpHeaders()
      }
      return this.httpClient.post( this.mailsUrl, formValues, httpOptions).toPromise();
     }

     byId(id){
      return this.httpClient.get<mail>(this.mailsUrl+"/inbox/detail/"+id).toPromise();
    }

    byMail(id){
      return this.httpClient.get<mail[]>(this.mailsUrl+"/inbox/arrRecibed/"+id).toPromise();
    }

}
