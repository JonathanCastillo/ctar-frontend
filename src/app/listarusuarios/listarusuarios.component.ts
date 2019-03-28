import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {

  constructor(private usuariosServices: UsuariosService) { }

  
  usuarios: any[] = [];

  ngOnInit() {
    this.usuarios = this.usuariosServices.getUsuarios();
    console.log(this.usuarios);
    }


}
