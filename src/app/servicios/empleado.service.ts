import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AutService } from '../servicios/auth.service';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService implements CanActivate {
  

  /* api = "http://localhost/APACHE/PHP/LaComandaAPI"; */
  api = "http://lacomandaapi.atwebpages.com";
  constructor(private miHttp:MiHttpService,private auth: AutService, private router: Router) { }

  filtrado:any;

  tiempoRestante(url){
    return this.miHttp.httpGetO(this.api + url);
  }
  registrarEncuesta(url, obj){
    return this.miHttp.postFormData(this.api + url,obj);
  }

  tomarPedido(ruta, objeto){
    /* console.log(this.api + ruta); */
    return this.miHttp.postFormData(this.api + ruta, objeto)
    .toPromise()
    .then(data => {
      return data ;
    }, err => {
      console.log(err);
    });
  }

  traertodos(ruta: string, filtro?: string) {
    return this.miHttp.httpGetO(this.api + ruta).toPromise().then(data => {
      /* console.info("jugadores service", data); */

      this.filtrado = data;

      if (filtro == "En Preparacion") {        
        this.filtrado = this.filtrado.filter(
          data => data.estado == "En Preparacion");
          /* console.info("jugadores service ganadores", data); */
        return this.filtrado
      }
      else if (filtro == "Pendiente") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Pendiente");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      else if (filtro == "Listo para Servir") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Listo para Servir");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      else if (filtro == "Entregado") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Entregado");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      else if (filtro == "Pedido cancelado") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Pedido cancelado");
          /* console.info("cancelados", data); */
        return this.filtrado;
      }
      else if (filtro == "Pedido finalizado") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Pedido finalizado");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      console.info("Pedidos", data);
      return this.filtrado
    }    
    )
      .catch(error => {
        console.log("error", error);
        return this.filtrado; 
      });
  }


  public actualizarFoto(ruta: string, objeto:any){
    this.miHttp.postFormData(this.api + ruta, objeto)
    .toPromise()
    .then(data => {
      //console.log("Usuario");
      console.log( data );
    }, err => {
      console.log(err);
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    // 
      let url: string = state.url;
      console.log('url dentro de canActivate', url);
      console.log(route);
      console.log(state);
      console.log( this.auth.getPerfil());

      if ( this.auth.isLogued())
      {
        if(this.auth.getPerfil() == 'Mozo' || this.auth.getPerfil() == 'Socio'){
          /* this.router.navigate(['']); */
          return true;
        }
        this.router.navigate(['/Registro']);
        return !true;          
      }
      else
      {
        this.router.navigate(['/Registro']);
        // this.router.navigate(['/pages/forms/inputs']);
        return !true;
      }
}

public registrar(ruta: string, objeto:any){

  return this.miHttp.httpPostP(this.api + ruta , objeto)
  .toPromise()
  .then(data => {
    //console.log("Usuario");
    console.log( data );
    if (data["Token"]) {
      localStorage.setItem('token',data["Token"]);
    }
    return data;
  }, err => {
    console.log(err);
  });

}


public login(ruta: string, objeto: any) {
  return this.miHttp.httpPostP(this.api + ruta, objeto)
  .toPromise()
  .then(data => {
    //console.log("Usuario");
    console.log( data );
    if (data["Token"]) {
      localStorage.setItem('token',data["Token"]);
    }
    return data;
  }, err => {
    console.log(err);
  })
}


}
