import { RegistroComponent } from './componentes/registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { VerificarJWTService } from './servicios/verificar-jwtservice.service';
import { EmpleadoService } from './servicios/empleado.service';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { MozoService } from './servicios/mozo.service';
import { CocineroComponent } from './componentes/cocinero/cocinero.component';
import { ListadoPedidosComponent } from './componentes/listado-pedidos/listado-pedidos.component';
import { ListadoMesasComponent } from './componentes/listado-mesas/listado-mesas.component';

const routes = [
  { path: 'TP_Lab4_2c_2019',canActivate: [VerificarJWTService],  component: PrincipalComponent},
  { path: '',canActivate: [VerificarJWTService],  component: PrincipalComponent},
  { path: 'Mozo',canActivate: [MozoService],  component: MozoComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'Cocinero', component: CocineroComponent },
  { path: 'Listado', component: ListadoPedidosComponent },
  { path: 'Mesas', component: ListadoMesasComponent },
  { path: 'Registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
