import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { EmpleadoService } from "../../servicios/empleado.service";
import { FormGroup } from '@angular/forms';
// para poder hacer las validaciones
// import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  uploadForm: FormGroup;

  /* constructor( private miConstructor:FormBuilder) { }
   email=new FormControl('',[Validators.email]);
   formRegistro:FormGroup=this.miConstructor.group({
     usuario:this.email
   });*/

  confirmaClave;
  jugador: Usuario;
  EstadoRegistro;

  constructor(private router: Router, private EmpleadoService: EmpleadoService) {
    this.jugador = new Usuario('', '', '');
  }

  ngOnInit() {

  }

  registrar(){

    console.log(this.jugador);
    this.EmpleadoService.registrar('/usuario/registrar', this.jugador)
    .then(data => {

      if (data['Estado'] == 'OK') {
        console.log(data['Estado']);
        this.EstadoRegistro = 'OK';
      }
      if (this.EstadoRegistro == 'OK'){
      console.log(this.EstadoRegistro);
      this.EmpleadoService.login('/usuario/login', this.jugador).then(data => {
        this.router.navigate(['']);
      });
    }
    }, err => {
      console.log(err);
    });


  }
  onFileSelect(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }



}
