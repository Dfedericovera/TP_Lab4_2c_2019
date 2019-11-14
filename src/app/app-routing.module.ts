import { RegistroComponent } from './componentes/registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { VerificarJWTService } from './servicios/verificar-jwtservice.service';
import { EmpleadoService } from './servicios/empleado.service';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { MozoService } from './servicios/mozo.service';

const routes: Routes = [
  { path: '',canActivate: [VerificarJWTService],  component: PrincipalComponent},
  { path: 'Mozo',canActivate: [MozoService],  component: MozoComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
