import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
<<<<<<< HEAD
  private categorias: any[] = [
    { nombre: 'Textil',
    descripcion: 'Camiseta de manta, con finos bordados hechos a mano',
    img: 'assets/img/manta.PNG',
    },
    { nombre: 'Bisuteria',
    descripcion: 'Colgantes de jade, con incrustaciones de oro y plata en el borde',
    img: 'assets/img/aritojade.jpg',
    },
    { nombre: 'Madera',
    descripcion: 'Colgantes de jade, con incrustaciones de oro y plata en el borde',
    img: 'assets/img/aritojade.jpg',
    },
    
    { nombre: 'Barro',
    descripcion: 'Mariposasa de barro pintadas a mano. Ideales para decorar salas de star',
    img: 'assets/img/mariposas.jpg',
    },
    { nombre: 'Otro',
    descripcion: 'Colgantes de jade, con incrustaciones de oro y plata en el borde',
    img: 'assets/img/aritojade.jpg',
    }
      ];
      getCategorias() {
        return this.categorias;
        }
=======

  constructor() { }
>>>>>>> e5744fd3082ede5ce6ec1c8b610938032ea6e6d7
}
