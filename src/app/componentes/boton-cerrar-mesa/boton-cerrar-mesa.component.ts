import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocioService } from '../../servicios/socio.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boton-cerrar-mesa',
  templateUrl: './boton-cerrar-mesa.component.html',
  styleUrls: ['./boton-cerrar-mesa.component.scss']
})
export class BotonCerrarMesaComponent implements OnInit {
  @Input() mesa:any;
  @Output() cerrar: EventEmitter<any>= new EventEmitter<any>();;
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
    let url = '/mesas/estadoCerrada/'+ this.mesa.codigo;
    this.miservicio.cobrar(url).toPromise()
    .then(
      data => console.log(data)
      )
    .then(y=>
      this.cerrar.emit()
    )
    
  }
  onFileSelect(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

}
