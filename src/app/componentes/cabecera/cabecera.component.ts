import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { AutService } from "../../servicios/auth.service";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  PerfilUsuario: any;

  constructor(
    private router: Router,
    private Aut:AutService,

  ) {
    this.PerfilUsuario = Aut.getPerfil();
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/Login']);
  }

}
