import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { user } from '../interfaces/user.interface';
import { baseUrl } from './baseUrl';
import jwt_decode from 'jwt-decode';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})



export class UsersService {

  userTrip: string;
  usersUrl: string;
  userLoged: string;
  users;

  private users$ = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    ) {
    this.usersUrl = `${baseUrl}/api/users`;
 }


  getAllUsers(): Promise<user[]> {
    return this.httpClient.get<user[]>(this.usersUrl).toPromise();
    };

  create (formValues):Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders()
    }
    return this.httpClient.post( this.usersUrl, formValues, httpOptions).toPromise();
   }

   login(user: any):Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }
     return this.httpClient.post(this.usersUrl+'/login',user, httpOptions).toPromise();
   }

   getToken(): any {
      const tokenActive = localStorage.token;
      if (tokenActive) {
        return true;
      }
      return false;
   }

   getById(userId){
    return this.httpClient.get<user>(this.usersUrl+"/"+userId).toPromise();
  }

  tokenId (){
    const token = localStorage.getItem("token");
    // const decode = jwt_decode(token);
    // console.log('test',  decode['id'])
    this.userLoged = token;
   }  

   loginComplete(){
    this.users$.next(true);
   }



  getLogged$(): Observable<boolean> {
    return this.users$.asObservable();
  }


}



