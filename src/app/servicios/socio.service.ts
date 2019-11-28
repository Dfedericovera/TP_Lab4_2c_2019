import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';
import { AutService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  filtrado:any;

  /* api = "http://localhost/APACHE/PHP/LaComandaAPI"; */
  api = "http://lacomandaapi.atwebpages.com";
  constructor(private miHttp: MiHttpService, private auth: AutService, private router: Router) { }
  
  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }
  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
  }  

  agregarImagen64(listado:Array<any>){
    listado.forEach(mesa => {
      /* console.log(this.api+mesa.foto); */
        this.getBase64ImageFromURL(this.api+mesa.foto).subscribe(base64data => {
         /*  console.log(mesa.codigo,base64data); */
          // this is the image as dataUrl
          var imgbase64 = 'data:image/jpeg;base64,' + base64data;
          mesa.imgbase64 =imgbase64; 
      });
      
    });
  }

  traertodos(ruta: string, filtro?: string) {
    return this.miHttp.httpGetO(this.api + ruta).toPromise().then(data => {
      /* console.info("jugadores service", data); */
      this.filtrado = data;
      this.agregarImagen64(this.filtrado);


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
      console.info("Mesas", data);
      return this.filtrado
    }    
    )
      .catch(error => {
        console.log("error", error,this.filtrado);
        return this.filtrado; 
      });
  }
  traertodosLosEmpleados(ruta: string, filtro?: string) {
    return this.miHttp.httpGetO(this.api + ruta).toPromise().then(data => {
      /* console.info("jugadores service", data); */
      this.filtrado = data;

      if (filtro == "Activos") {        
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "A");
        return this.filtrado
      }
      else if (filtro == "Inactivos") {
        this.filtrado = this.filtrado.filter(          
          data => data.estado == "B");
        return this.filtrado;
      }
      else if (filtro == "Suspendidos") {
        this.filtrado = this.filtrado.filter(
          data => data.estado == "S");
        return this.filtrado;
      }
      console.info("Empleados", data);
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
