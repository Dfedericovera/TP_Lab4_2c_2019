import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { JugadoresService } from '../../servicios/jugadores.service';
// para poder hacer las validaciones
// import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /* constructor( private miConstructor:FormBuilder) { }
   email=new FormControl('',[Validators.email]);
   formRegistro:FormGroup=this.miConstructor.group({
     usuario:this.email
   });*/

  confirmaClave;
  jugador: Usuario;
  EstadoRegistro;

  constructor(private router: Router, private jugadoresService: JugadoresService) {
    this.jugador = new Usuario('', '', '');
  }

  ngOnInit() {

  }

  registrar(){

    console.log(this.jugador);
    this.jugadoresService.registrar('/usuario/registrar', this.jugador)
    .then(data => {

      if (data['Estado'] == 'OK') {
        console.log(data['Estado']);
        this.EstadoRegistro = 'OK';
      }
      if (this.EstadoRegistro == 'OK'){
      console.log(this.EstadoRegistro);
      this.jugadoresService.login('/usuario/login', this.jugador).then(data => {
        this.router.navigate(['']);
      });
    }
    }, err => {
      console.log(err);
    });


  }



}
