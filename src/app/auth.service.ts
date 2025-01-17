import { Injectable } from '@angular/core';
import { Cred } from './cred';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signIn(credData: Cred){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
