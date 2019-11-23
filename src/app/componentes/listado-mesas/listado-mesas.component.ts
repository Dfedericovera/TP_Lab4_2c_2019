import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { SocioService } from "../../servicios/socio.service";
import { AutService } from "../../servicios/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-mesas',
  templateUrl: './listado-mesas.component.html',
  styleUrls: ['./listado-mesas.component.scss']
})
export class ListadoMesasComponent implements OnInit {
  @Input()
  listado: Array<any>;
  PerfilUsuario: any;

  constructor(
    private SocioService: SocioService,
     private Aut: AutService,
     private router:Router
     ) {
    this.PerfilUsuario = Aut.getPerfil();
  }

  ngOnInit() {
    /* this.TraerEnPreparacion(); */
  }

  ver() {
    console.info(this.listado);
  }
  copiarCodigo() {
    var aux = document.createElement("input");    
    aux.setAttribute("value", document.getSelection().anchorNode.parentElement.textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    var tooltip = document.getElementById("MyTooltip");
    tooltip.title = "Copiado";
  }

  TraerTodos() {
    /* this.miJugadoresServicio.traertodos('/juegos/listar','todos').then(data=>{
      console.info("jugadores listado",(data));
      this.listado= data;
    }) */
    this.SocioService.traertodos('/mesas/listar', 'todos').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;
    })
  }

  TraerComiendo() {
    this.SocioService.traertodos('/mesas/listar', 'Con clientes comiendo').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerEsperando() {
    this.SocioService.traertodos('/mesas/listar', 'Con cliente esperando pedido').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerPagando() {
    this.SocioService.traertodos('/mesas/listar', 'Con clientes pagando').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerCerradas() {
    this.SocioService.traertodos('/mesas/listar', 'Cerrada').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }
  actualizarVista(){
    this.TraerTodos();
    /* 
    setInterval(() => {
      this.TraerTodos();
    },1000) */
    /* 
    this.router.navigate(['Error',{id:15}]); */
  }


}
