import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from "../../servicios/empleado.service";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-actualizar-foto',
  templateUrl: './actualizar-foto.component.html',
  styleUrls: ['./actualizar-foto.component.scss']
})
export class ActualizarFotoComponent implements OnInit {
  uploadForm: FormGroup;
  constructor(
    private miservicio: EmpleadoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: [''],
      nombre: [''],
      genero: [''],
      fecha_de_estreno:[''],
      cantidadDePublico: 0,

    });
  }

  /*   onSubmit(f: NgForm) {
      console.log(f.value);  // { first: '', last: '' }
      console.log(f.valid);  // false
      this.subirPelicula(f);
    } */
  subirPelicula(obj) {
    let url = "/mesas/foto";
    this.miservicio.actualizarFoto(url, obj);
  }
  onFileSelect(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    formData.append('codigo', form.value['nombre'] );/* 
    formData.append('genero', form.value['genero'] );
    formData.append('cantidadDePublico', form.value['cantidadDePublico'] );
    formData.append('fecha_de_estreno', form.value['fecha_de_estreno'] ); */
    this.subirPelicula(formData);
  }

}
