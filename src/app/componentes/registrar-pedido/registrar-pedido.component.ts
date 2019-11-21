import { Component, OnInit ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MozoService } from '../../servicios/mozo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.scss']
})
export class RegistrarPedidoComponent implements OnInit {
  @Input() estado: any;
  uploadForm: FormGroup;
  constructor(
    private miservicio: MozoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: [''],
      nombre: [''],
      genero: [''],
      fecha_de_estreno: [''],
      cantidadDePublico: 0,

    });
  }

  /*   onSubmit(f: NgForm) {
      console.log(f.value);  // { first: '', last: '' }
      console.log(f.valid);  // false
      this.subirPelicula(f);
    } */
  subirPelicula(obj: FormData) {
    let url = '/pedido/registrar';
    this.miservicio.registrarPedido(url, obj);
  }
/*   onFileSelect(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  } */
  onSubmit(form: NgForm) {
    console.log(form.value);
    const formData = new FormData();
    formData.append('id_mesa', form.value['id_mesa']);
    formData.append('id_menu', form.value['id_menu'] );
    formData.append('cliente', form.value['nombre'] );/*
    formData.append('fecha_de_estreno', form.value['fecha_de_estreno'] ); */
    this.subirPelicula(formData);
  }

}
