import { Component, OnInit } from '@angular/core';
import { AutService } from "../../servicios/auth.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  nombre:any;
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private aut:AutService) { 
    this.nombre = aut.getNombre();
   }

  ngOnInit() {
  }

 

}
