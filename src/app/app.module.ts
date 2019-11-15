import { RegistroComponent } from './componentes/registro/registro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpModule } from '@angular/http';
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { JugadoresService } from './servicios/jugadores.service';
import { ArchivosJugadoresService } from './servicios/archivos-jugadores.service';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings,RecaptchaLoaderService, RecaptchaComponent } from 'ng-recaptcha';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
const globalSettings: RecaptchaSettings = {siteKey:'6LedkbkUAAAAANj1mPFBIJr53_pOgUcbjbshQ5Sv'};
import { VerificarJWTService } from "./servicios/verificar-jwtservice.service";
import { AutService } from "./servicios/auth.service";
import { MozoComponent } from './componentes/mozo/mozo.component';
import { ActualizarFotoComponent } from './componentes/actualizar-foto/actualizar-foto.component';
import { CambiarEstadoComponent } from './componentes/cambiar-estado/cambiar-estado.component';
import { ServirPedidoComponent } from './componentes/servir-pedido/servir-pedido.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    CabeceraComponent,
    MozoComponent,
    ActualizarFotoComponent,
    CambiarEstadoComponent,
    ServirPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),

  ],
  providers: [
    MiHttpService,
    JugadoresService,
    ArchivosJugadoresService,
    RecaptchaComponent,
    VerificarJWTService,
    AutService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
