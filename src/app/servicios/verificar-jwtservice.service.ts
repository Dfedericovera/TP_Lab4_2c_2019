import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AutService } from '../servicios/auth.service';

@Injectable()
export class VerificarJWTService implements CanActivate {

  constructor(private router: Router, private auth: AutService) {
    /* console.log('isLogued()', auth.isLogued()); */
    auth.isLogued()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    //
    let url: string = state.url;
/*     console.log('url dentro de canActivate', url);
    console.log(route);
    console.log(state);
    console.log(this.auth.getPerfil()); */

    if (this.auth.isLogued()) {
      if (this.auth.getPerfil() == 'Socio') {
        return true;
      }
      else if (this.auth.getPerfil() == 'Mozo') {
        this.router.navigate(['/Mozo']);
        return !true;
      }
      else if (this.auth.getPerfil() == 'Cocinero' || this.auth.getPerfil() == 'Bartender' || this.auth.getPerfil() == 'Cervecero' || this.auth.getPerfil() == 'CandyBar') {
        this.router.navigate(['/Cocinero']);
        return !true;
      }

    }
    else {
      /* ERROR */
      this.router.navigate(['/Registro']);
      return !true;
    }
  }
}
