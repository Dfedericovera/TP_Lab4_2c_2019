import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AutService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MozoService implements CanActivate {

  /* api = "http://localhost/APACHE/PHP/LaComandaAPI"; */
  api = "http://lacomandaapi.atwebpages.com";
  constructor(private miHttp: MiHttpService, private auth: AutService, private router: Router) { }

  cancelarPedido(url){
    this.miHttp.httpDelete(this.api + url).toPromise().then(t => console.log(t));
  
  }

  registrarPedido(url, obj){
    this.miHttp.postFormData(this.api + url, obj).toPromise().then(t => console.log(t));
  }

  servirPedido(url,obj){
    this.miHttp.postFormData(this.api + url, obj).toPromise().then(data => console.log(data));
  }

  cambiarEstado(ruta){
    this.miHttp.httpGetO(this.api + ruta).toPromise().then(data => console.log(data));
  }


  public actualizarFoto(ruta: string, objeto: any) {
    this.miHttp.postFormData(this.api + ruta, objeto)
      .toPromise()
      .then(data => {
        //console.log("Usuario");
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    //
    let url: string = state.url;
/*     console.log('url dentro de canActivate', url);
    console.log(route);
    console.log(state);
    console.log(this.auth.getPerfil()); */

    if (this.auth.isLogued()) {
      if (this.auth.getPerfil() == 'Mozo' || this.auth.getPerfil() == 'Socio') {
        /* this.router.navigate(['']); */
        return true;
      }
      this.router.navigate(['/Registro']);
      return !true;
    }
    else {
      this.router.navigate(['/Registro']);
      // this.router.navigate(['/pages/forms/inputs']);
      return !true;
    }
  }
}
