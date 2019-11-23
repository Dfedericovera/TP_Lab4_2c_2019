import { Component, OnInit, Input } from '@angular/core';
import { EmpleadoService } from "../../servicios/empleado.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tomar-pedido-form',
  templateUrl: './tomar-pedido-form.component.html',
  styleUrls: ['./tomar-pedido-form.component.scss']
})
export class TomarPedidoFormComponent implements OnInit {
  @Input() pedido: any;
  constructor(private EmpleadoService:EmpleadoService) { }

  ngOnInit() {
  }
  subirPelicula(obj: FormData) {
    let url = '/pedido/servir';
    this.EmpleadoService.tomarPedido('/pedido/tomarPedido',obj);
  }

  onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.append('codigo', this.pedido.codigo);
    formData.append('minutosEstimados', form.value['minutosEstimados'] );/*
    formData.append('cantidadDePublico', form.value['cantidadDePublico'] );
    formData.append('fecha_de_estreno', form.value['fecha_de_estreno'] ); */
    this.subirPelicula(formData);
  }

}
