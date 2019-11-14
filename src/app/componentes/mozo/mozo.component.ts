import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.scss']
})
export class MozoComponent implements OnInit {

  anagrama: string = "";
  respuesta: boolean;
  palabraIngresada: string = null;
  gano: Boolean;
  perdio: boolean;
  null: boolean;

  ngOnInit(): void {
  }

  constructor() {
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
