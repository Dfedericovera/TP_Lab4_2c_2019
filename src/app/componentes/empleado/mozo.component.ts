import { Component, OnInit } from '@angular/core';
import { AutService } from "../../servicios/auth.service";

@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.scss']
})
export class MozoComponent implements OnInit {
  nombre:any;
  anagrama: string = "";
  respuesta: boolean;
  palabraIngresada: string = null;
  gano: Boolean;
  perdio: boolean;
  null: boolean;

  ngOnInit(): void {
  }

  constructor(private aut: AutService) {
    this.nombre = aut.getNombre();
  }

  nuevo() {
    this.gano = null;
  }
  verificar() {/* 
    if (this.palabraIngresada == null || this.palabraIngresada == "") {
      this.null = true;
      this.gano = undefined;
      this.perdio = undefined;
    } else if (this.juego.respuesta != null) {
      this.null = false;
      this.juego.palabraIngresada = this.palabraIngresada;
      this.juego.verificar();
    }

    if (this.juego.gano != null && this.juego.respuesta != null) {
      this.gano = this.juego.gano;
      this.perdio = !this.gano;
      this.juegoService.registrarJuego("/juegos/registrar", this.juego.nombreJuego, this.juego.gano);
      this.juego.gano = null;
    } */
  }
  ayuda() {

  }

}
