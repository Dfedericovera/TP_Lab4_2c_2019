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
import { MozoComponent } from './componentes/empleado/mozo.component';
import { ActualizarFotoComponent } from './componentes/actualizar-foto/actualizar-foto.component';
import { CambiarEstadoComponent } from './componentes/cambiar-estado/cambiar-estado.component';
import { ServirPedidoComponent } from './componentes/servir-pedido/servir-pedido.component';
import { RegistrarPedidoComponent } from './componentes/registrar-pedido/registrar-pedido.component';
import { CancelarPedidoComponent } from './componentes/cancelar-pedido/cancelar-pedido.component';
import { CocineroComponent } from './componentes/cocinero/cocinero.component';
import { ListadoPedidosComponent } from './componentes/listado-pedidos/listado-pedidos.component';
import { TomarPedidoComponent } from './componentes/tomar-pedido/tomar-pedido.component';
import { ListoParaServirComponent } from './componentes/listo-para-servir/listo-para-servir.component';
import { ServirComponent } from './componentes/servir/servir.component';
import { ListadoMesasComponent } from './componentes/listado-mesas/listado-mesas.component';
import { BotonCobrarComponent } from './componentes/boton-cobrar/boton-cobrar.component';
import { BotonCerrarMesaComponent } from './componentes/boton-cerrar-mesa/boton-cerrar-mesa.component';
import { TomarPedidoFormComponent } from './componentes/tomar-pedido-form/tomar-pedido-form.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { EmpleadoPipe } from './pipes/empleado.pipe';
import { ListadoEmpleadosComponent } from './componentes/listado-empleados/listado-empleados.component';
import { ResaltarDirective } from './directivas/resaltar.directive';

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
    RegistrarPedidoComponent,
    CancelarPedidoComponent,
    CocineroComponent,
    ListadoPedidosComponent,
    TomarPedidoComponent,
    ListoParaServirComponent,
    ServirComponent,
    ListadoMesasComponent,
    BotonCobrarComponent,
    BotonCerrarMesaComponent,
    TomarPedidoFormComponent,
    ClienteComponent,
    EmpleadoPipe,
    ListadoEmpleadosComponent,
    ResaltarDirective,
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
