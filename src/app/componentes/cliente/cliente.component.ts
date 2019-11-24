import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  @Output()

  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  gano:Boolean;
  perdio:boolean;
  private subscription: Subscription;

  ngOnInit() {
  }
  constructor() {
    this.ocultarVerificar = true;    
    console.info("Inicio agilidad");
  }
  
  NuevoJuego() {
    this.ocultarVerificar = false;
    this.perdio=false;
    this.Tiempo = 10;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
     /*  console.log("llego", this.Tiempo); */
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
      }
    }, 900);
    this.gano=false;
  }


  verificar() {
    this.ocultarVerificar = true;
    this.perdio=!this.gano;
    //this.ocultarVerificar=false;
    clearInterval(this.repetidor);
    

  }

}
