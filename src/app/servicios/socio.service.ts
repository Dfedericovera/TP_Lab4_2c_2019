import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AutService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  filtrado:any;

  api = "http://localhost/APACHE/PHP/LaComandaAPI";
  constructor(private miHttp: MiHttpService, private auth: AutService, private router: Router) { }

  traertodos(ruta: string, filtro?: string) {
    return this.miHttp.httpGetO(this.api + ruta).toPromise().then(data => {
      /* console.info("jugadores service", data); */

      this.filtrado = data;

      if (filtro == "Con clientes comiendo") {        
        this.filtrado = this.filtrado.filter(
          data => data.estado == "Con clientes comiendo");
          /* console.info("jugadores service ganadores", data); */
        return this.filtrado
      }
      else if (filtro == "Con cliente esperando pedido") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Con cliente esperando pedido");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      else if (filtro == "Listo para Servir") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Listo para Servir");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      else if (filtro == "Con clientes pagando") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Con clientes pagando");
          /* console.info("jugadores service perdedores", data); */
        return this.filtrado;
      }
      else if (filtro == "Cerrada") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "Cerrada");
          /* console.info("cancelados", data); */
        return this.filtrado;
      }
      console.info("jugadores service todos", data);
      return this.filtrado
    }    
    )
      .catch(error => {
        console.log("error", error,this.filtrado);
        return this.filtrado; 
      });
  }

/*   cancelarPedido(url){
    this.miHttp.httpDelete(this.api + url).toPromise().then(t => console.log(t));
  
  }

  registrarPedido(url, obj){
    this.miHttp.postFormData(this.api + url, obj).toPromise().then(t => console.log(t));
  }

  servirPedido(url,obj){
    this.miHttp.postFormData(this.api + url, obj).toPromise().then(data => console.log(data));
  } */

  cobrar(ruta){
    return this.miHttp.httpGetO(this.api + ruta);
  }


/*   public actualizarFoto(ruta: string, objeto: any) {
    this.miHttp.postFormData(this.api + ruta, objeto)
      .toPromise()
      .then(data => {
        //console.log("Usuario");
        console.log(data);
      }, err => {
        console.log(err);
      });
  } */
}
