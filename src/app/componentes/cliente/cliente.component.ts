import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from "../../servicios/empleado.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  @Output()
  OK:any=true;
  ERROR:any=true;
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  verSubmit: boolean;
  Tiempo: number;
  repetidor: any;
  gano:Boolean;
  perdio:boolean;
  private subscription: Subscription;

  ngOnInit() {
  }
  constructor(private servicio:EmpleadoService) {
    this.verSubmit = true;
  }
  
  getTiempoRestante(f:NgForm) {
    console.log(f.value);
    this.ERROR=true;
    this.servicio.tiempoRestante('/pedido/tiempoRestante/'+ f.value['CodigoPedido'])
    .toPromise()
    .then(respuesta => this.mostrarVerificacion(respuesta) )
    .then(data => this.verSubmit = true)
    /*  */
    .catch(error => this.manejarError(error));
    this.verSubmit = false;
    this.Tiempo = 10;
    this.gano=false;/* 
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.verSubmit = true;
      }
    }, 900); */    
  }


  mostrarVerificacion(respuesta) {
    console.log(respuesta);
    let mensaje = document.getElementById('MensajeVerificado') as HTMLInputElement;
    if(respuesta.Estado == 'ERROR'){
      mensaje.value = respuesta.Mensaje;
    }
    else{
      mensaje.value = respuesta.Mensaje;
    }
  }

  registrarEncuesta(form:NgForm){
    this.ERROR=true;
    this.servicio.registrarEncuesta('/encuesta/registrar',form.value)
    .toPromise()
    .then(data => this.verificarRespuestaEncuesta(data))
    .catch(error => this.manejarError(error));
  }

  verificarRespuestaEncuesta(respuesta){
    
    console.log(respuesta);
    if(respuesta.Estado == 'OK'){
      this.OK = false;
    }
    if(respuesta.Estado == 'ERROR'){
      this.ERROR=false;
    }
  }
  manejarError(error){
    console.log(error);
    this.ERROR=false;
    this.verSubmit = true
  }

}
