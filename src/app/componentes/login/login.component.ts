import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { JugadoresService } from "../../servicios/jugadores.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  private elementRef: ElementRef;
  jugador: Jugador;
  progreso: number;
  progresoMensaje = 'esperando...';
  logeando = true;
  ProgresoDeAncho: string;
  clase = 'progress-bar progress-bar-info progress-bar-striped ';

  signin = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email
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
    this.jugador.correo = this.correo.value;
    this.jugador.clave = this.clave.value;
    this.jugadoresService.login("/usuario/login", this.jugador)
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
    console.info(this.jugador.correo);
    console.info(this.jugador.clave);
    console.info(this.jugador.alias);
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

export class Jugador {
  public correo: string;
  public clave: string;
  public alias: string;

  constructor(correo?: string, clave?: string, AliasJugador?: string) {
      if (correo) {
          this.correo = correo;
      }
      if (clave) {
          this.clave = clave;
      }
      if (AliasJugador) {
          this.alias = AliasJugador;
      }



  }

  public ingresar() {

      return "NO hay Ayuda definida";
  }

  private static urlBase64Decode(str: string) {
      let output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
          case 0:
              break;
          case 2:
              output += '==';
              break;
          case 3:
              output += '=';
              break;
          default:
              // tslint:disable-next-line:no-string-throw
              throw 'Illegal base64url string!';
      }
      return decodeURIComponent((<any>window).escape(window.atob(output)));
  }

  public static decodeToken(token: string = '') {

      if (token === null || token === '') { return { 'upn': '' }; }
      const parts = token.split('.');
      if (parts.length !== 3) {

          throw new Error('JWT must have 3 parts');
      }
      const decoded = this.urlBase64Decode(parts[1]);
      if (!decoded) {
          throw new Error('Cannot decode the token');
      }
      return JSON.parse(decoded);
  }
}
