import { Component, OnInit ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocioService } from '../../servicios/socio.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boton-cobrar',
  templateUrl: './boton-cobrar.component.html',
  styleUrls: ['./boton-cobrar.component.scss']
})
export class BotonCobrarComponent implements OnInit {
  @Input() mesa: any;
  uploadForm: FormGroup;
  constructor(
    private miservicio: SocioService,
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
    onSubmit(obj: FormData) {
    let url = '/mesas/cobrar/'+ this.mesa.codigo;
    this.miservicio.cobrar(url);
  }
  onFileSelect(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
/*   onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    formData.append('codigo', form.value['nombre'] );
    this.subirPelicula(formData);
  } */

}