import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  api = "http://localhost/APACHE/PHP/LaComandaAPI";
  constructor(private miHttp:MiHttpService) { }

  Header = "";

  public actualizarFoto(ruta: string, objeto:any){
    this.miHttp.postFormData(this.api + ruta, objeto)
    .toPromise()
    .then(data => {
      //console.log("Usuario");
      console.log( data );
    }, err => {
      console.log(err);
    });;

  /*   return this.miHttp.httpPostP(this.api + ruta , objeto)
    .toPromise()
    .then(data => {
      //console.log("Usuario");
      console.log( data );
    }, err => {
      console.log(err);
    }); */

  }


}
