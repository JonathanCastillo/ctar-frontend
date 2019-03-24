import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articulos: any[] = [
    { nombre: 'Articulo 1',
    descripcion: 'Desceipcion',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wioAwiZFD7_hDLCQu_zhT4wghh_VGbJrW_1QbN4ZAhl9Bzhh',
    precio: '$44.50',
    marca: 'Calvin Klein'
    }
      ];
      getArticulos() {
        return this.articulos;
        }
}
