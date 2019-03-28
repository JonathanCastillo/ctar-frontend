import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-vercategorias',
  templateUrl: './vercategorias.component.html',
  styleUrls: ['./vercategorias.component.css']
})
export class VercategoriasComponent implements OnInit {

  constructor(private categoriasService:CategoriasService) { }
  categorias: any[] = [];
  ngOnInit() {
    this.categorias = this.categoriasService.getCategorias();
    console.log(this.categorias);
  }

}
