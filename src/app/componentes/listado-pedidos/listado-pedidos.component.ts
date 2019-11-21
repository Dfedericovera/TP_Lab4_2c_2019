import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { EmpleadoService } from "../../servicios/empleado.service";
import { AutService } from "../../servicios/auth.service";
@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {
  @Input()
  listado: Array<any>;
  PerfilUsuario: any;

  constructor(private EmpleadoService: EmpleadoService, private Aut: AutService) {
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
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'todos').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;
    })
  }

  TraerPendientes() {
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'Pendiente').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerEnPreparacion() {
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'En Preparacion').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerListoParaServir() {
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'Listo para Servir').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerEntregados() {
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'Entregado').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerCancelados() {
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'Pedido cancelado').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerFinalizados() {
    this.EmpleadoService.traertodos('/pedido/listarActivos', 'Pedido finalizado').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

}
