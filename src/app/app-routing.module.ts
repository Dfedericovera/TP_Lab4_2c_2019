import { RegistroComponent } from './componentes/registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  { path: '',  component: PrincipalComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
