import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  private elementRef: ElementRef;
  usuario: Usuario;
  progreso: number;
  progresoMensaje = 'esperando...';
  logeando = true;
  ProgresoDeAncho: string;
  clase = 'progress-bar progress-bar-info progress-bar-striped ';

  signin = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    clave: new FormControl('', Validators.required),

  });
  recaptchaStr: any = "";
  get correo(): any { return this.signin.get('correo'); }
  get clave(): any { return this.signin.get('clave'); }
  setValue(correo, clave) {
    this.signin.setValue({ correo: correo, clave: clave });
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mihttp: MiHttpService,
    private jugadoresService: JugadoresService
  ) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";
  }


  ngOnInit() {
    this.usuario = new Usuario("","","");
    RecaptchaComponent.prototype.ngOnDestroy = function () {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }

  // Confirma el capcha y procede con el login
  onSubmit(recapchaResponse) {
    /* console.log(recapchaResponse['success']); */
    console.log(this.correo.value);
    console.log(this.clave.value);
    this.usuario.usuario = this.correo.value;
    this.usuario.clave = this.clave.value;
    this.jugadoresService.login("/empleados/login", this.usuario)
      .then(data => {
        if (data != null && recapchaResponse['success'] == true) {
          this.router.navigate(['']);
        }
      }, err => {
        console.log(err);
      });
  }

  onLoginClick(captchaRef: any): void {
    if (this.recaptchaStr) {
      captchaRef.reset();
    }
    captchaRef.execute();
  }

  public resolved(captchaResponse: string): void {
    this.recaptchaStr = captchaResponse;
    /* console.log(this.recaptchaStr); */
    if (this.recaptchaStr) {
      var data = {
        response: this.recaptchaStr
      }
      this.mihttp.httpPostP("https://dfedericovera.000webhostapp.com/recapcha/", data)
        .toPromise()
        .then(data => {
          //console.log("Usuario");
          console.log(data);
          this.onSubmit(data);
          return data;
        }, err => {
          console.log(err);
        });

    }
  }
/*
  MoverBarraDeProgreso() {
    console.info(this.usuarios.listar());
    console.info(this.usuario.correo);
    console.info(this.usuario.clave);
    console.info(this.usuario.alias);
    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      switch (this.progreso) {
        case 15:
          this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
          this.progresoMensaje = "Verificando ADN...";
          break;
        case 30:
          this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje = "Adjustando encriptación..";
          break;
        case 60:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando Info del dispositivo..";
          break;
        case 75:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
          break;
        case 85:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          break;
      }
    });
  }*/

}


