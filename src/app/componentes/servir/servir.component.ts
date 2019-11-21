import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MozoService } from '../../servicios/mozo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadoService } from "../../servicios/empleado.service";

@Component({
  selector: 'app-servir',
  templateUrl: './servir.component.html',
  styleUrls: ['./servir.component.scss']
})
export class ServirComponent implements OnInit {
  @Input() pedido: any;
  f:NgForm;
  constructor(
    private EmpleadoService: EmpleadoService,
    private mozoService: MozoService,
    private formBuilder: FormBuilder,
  ) { }

  uploadForm: FormGroup;

  ngOnInit() {/* 
    console.log(this.pedido); */
    this.uploadForm = this.formBuilder.group({
      nombre: [''],
    });
  }
  mostrarCodigo(f:NgForm){/* 
    console.log("this.pedido"); */
    let input= document.getElementById("codigoListo") as HTMLInputElement;
    input.value = this.pedido.codigo;
    
  }

  subirPelicula(obj: FormData) {
    let url = '/pedido/servir';    
    this.EmpleadoService.tomarPedido(url,obj);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('codigo', this.pedido.codigo);/*
    formData.append('minutosEstimados', form.value['minutosEstimados'] );
    formData.append('cantidadDePublico', form.value['cantidadDePublico'] );
    formData.append('fecha_de_estreno', form.value['fecha_de_estreno'] ); */
    this.subirPelicula(formData);
  }
}
