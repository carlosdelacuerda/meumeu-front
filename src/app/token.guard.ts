import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class tokenGuard implements CanActivate {

  canActivate() {
    let tokenGuard = localStorage.token;
    if (tokenGuard) {
      return true;
    }
    return false;
  }

 


}
