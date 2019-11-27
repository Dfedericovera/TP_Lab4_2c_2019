import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { SocioService } from "../../servicios/socio.service";
import { AutService } from "../../servicios/auth.service";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.scss']
})
export class ListadoEmpleadosComponent implements OnInit {
  @Input()
  listado: Array<any>;
  PerfilUsuario: any;

  constructor(private SocioService: SocioService, private Aut: AutService) {
    this.PerfilUsuario = Aut.getPerfil();
  }

  generarPDF() {
    var doc = new jsPDF('landscape');
    doc.setFontSize(2);
    doc.autoTable({
      head: [["id", "nombre", "tipo", "usuario", "fechaRegistro", "ultimoLogin", "estado", "cantidad_operaciones"]],
      html: '#empleadosTable'
    });
    doc.save('Empleados.pdf');
  }


  ngOnInit() {
  }

  TraerTodos() {
    this.SocioService.traertodosLosEmpleados('/empleados/listar', 'todos').then(data => {
      this.listado = data;
    })
  }

  TraerActivos() {
    this.SocioService.traertodosLosEmpleados('/empleados/listar', 'Activos').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerInactivos() {
    this.SocioService.traertodosLosEmpleados('/empleados/listar', 'Inactivos').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

  TraerSuspendidos() {
    this.SocioService.traertodosLosEmpleados('/empleados/listar', 'Suspendidos').then(data => {
      /* console.info("jugadores listado",(data)); */
      this.listado = data;

    })
  }

}
