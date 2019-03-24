import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private articulosService: ArticulosService) { }

  articulos: any[] = [];

  ngOnInit() {
    this.articulos = this.articulosService.getArticulos();
    console.log(this.articulos);
    }

}
