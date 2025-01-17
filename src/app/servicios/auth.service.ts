import { Injectable } from '@angular/core';
import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AutService {

  public name: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor( private router: Router ) {
  }

  public isLogued()
  {
    try {
      // console.log( 'is logued', tokenNotExpired());
      let rta = tokenNotExpired() || false;
      return rta;
    } catch (error) {
      return false;
    }
  }
  getNombre(){
    try {
      /* console.log('Token: ', this.jwtHelper.decodeToken(localStorage.getItem("token"))); */
      return this.jwtHelper.decodeToken(localStorage.getItem("token")).nombre;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public getToken ()
  {
    try {
      /* console.log('Token: ', this.jwtHelper.decodeToken(localStorage.getItem("token"))); */
      return this.jwtHelper.decodeToken(localStorage.getItem("token"));
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public getExpirationDate()
  {

    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(localStorage.getItem("token")))
      return this.jwtHelper.getTokenExpirationDate(localStorage.getItem("token"));
    } catch (error) {
      return null;
    }
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }

  public getNivel ()
  {
    // console.log(this.jwtHelper.decodeToken(this._token));
    if (this.jwtHelper.decodeToken(localStorage.getItem("token")).nivel || this.jwtHelper.decodeToken(localStorage.getItem("token")).nivel === 0)
      return this.jwtHelper.decodeToken(localStorage.getItem("token")).nivel;
    else
      return 1000;

  }
  public getPerfil (){
    return this.jwtHelper.decodeToken(localStorage.getItem("token")).tipo;

  }
}
