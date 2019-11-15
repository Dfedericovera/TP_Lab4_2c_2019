import { Component, OnInit ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MozoService } from '../../servicios/mozo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.scss']
})
export class CambiarEstadoComponent implements OnInit {
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
      fecha_de_estreno:[''],
      cantidadDePublico: 0,

    });
  }

  /*   onSubmit(f: NgForm) {
      console.log(f.value);  // { first: '', last: '' }
      console.log(f.valid);  // false
      this.subirPelicula(f);
    } */
  subirPelicula(obj: FormData) {
    let url = '/mesas/'+ this.estado +'/'+ obj.get('codigo').toString();
    console.log(url);
    this.miservicio.cambiarAEstadoEsperando(url);
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
