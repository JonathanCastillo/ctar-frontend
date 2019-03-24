import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articulos: any[] = [
    { nombre: 'Camiseta de manta',
    descripcion: 'Camiseta de manta, con finos bordados hechos a mano',
    img: 'assets/img/manta.PNG',
    precio: '$44.50',
    marca: 'Calvin Klein'
    },
    { nombre: 'Colgantes de jade',
    descripcion: 'Colgantes de jade, con incrustaciones de oro y plata en el borde',
    img: 'assets/img/aritojade.jpg',
    precio: '$30.00',
    marca: 'Calvin Klein'
    },
    { nombre: 'Mariposas de barro',
    descripcion: 'Mariposasa de barro pintadas a mano. Ideales para decorar salas de star',
    img: 'assets/img/mariposas.jpg',
    precio: '$20.00',
    marca: 'Calvin Klein'
    }
    
      ];
      getArticulos() {
        return this.articulos;
        }
}
