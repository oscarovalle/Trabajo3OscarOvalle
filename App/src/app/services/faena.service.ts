import { Injectable } from '@angular/core';
import { Faena } from '../models/faena.model';

@Injectable({
  providedIn: 'root'
})
export class FaenaService {

  private faenas: Faena[] = [
    {
      id: 1,
      nombre: 'Faena 11',
      imagen1: 'assets/faena/Camion1.jpg',
      imagen2: 'assets/faena/Camion2.jpg'
    },
    {
      id: 2,
      nombre: 'Faena 12',
      imagen1: 'assets/faena/Camion2.jpg',
      imagen2: 'assets/faena/Camion3.jpg'
    },
    {
      id: 3,
      nombre: 'Faena 13',
      imagen1: 'assets/faena/Camion3.jpg',
      imagen2: 'assets/faena/Camion1.jpg'
    }
  ];

    getFaenaById(id: number): Faena | undefined {
    return this.faenas.find(f => f.id === id);
    }
    getFaenas(): Faena[] {
  return this.faenas;
    }

 // agregarReporte(reporte: Reporte) {
 //   this.reportes.push(reporte);
//  }
}
