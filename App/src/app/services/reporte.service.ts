import { Injectable } from '@angular/core';
import { Reporte } from '../models/reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private reportes: Reporte[] = [
    {
      id: 1,
      idEquipo: 1,
      fecha: '2025-07-22',
      detalle: 'Falla en sistema hidráulico',
      fotos: ['assets/reportes/reporte1.jpg',
              'assets/reportes/reporte2.jpg'
      ]
    },
    {
      id: 2,
      idEquipo: 1,
      fecha: '2025-07-22',
      detalle: 'Falla neumáticos',
      fotos: ['assets/reportes/reporte2.jpg',
              'assets/reportes/reporte3.jpg'
      ]
    },
    {
      id: 3,
      idEquipo: 1,
      fecha: '2025-07-22',
      detalle: 'Falla de prueba',
      fotos: ['assets/reportes/reporte3.jpg']
    }
  ];

  getReportesPorEquipo(idEquipo: number): Reporte[] {
    return this.reportes.filter(r => r.idEquipo === idEquipo);
  }

  getReporteById(id: number): Reporte | undefined {
    return this.reportes.find(r => r.id === id);
  }

  agregarReporte(reporte: Reporte) {
    this.reportes.push(reporte);
  }
}
