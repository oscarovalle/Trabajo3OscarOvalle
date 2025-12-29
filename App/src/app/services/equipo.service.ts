import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipos: Equipo[] = [
    {
      id: 1,
      faenaId: 1,
      nombre: 'Oscar Martin Ovalle Puelles',
      estado: 'operativo',
      imagen: 'assets/equipos/Camion1.jpg',
      km: 12345,
      fechaKm: '22/07/2025',
      documentos: {
        permiso: '22/07/2025',
        soap: '22/07/2025',
        revision: '22/07/2025',
        sernageomin: '22/07/2025'
      }
    },
    {
      id: 2,
      faenaId: 1,
      nombre: 'Equipo w',
      estado: 'operativo',
      imagen: 'assets/equipos/Camion2.jpg',
      km: 12345,
      fechaKm: '22/07/2025',
      documentos: {
        permiso: '22/07/2025',
        soap: '22/07/2025',
        revision: '22/07/2025',
        sernageomin: '22/07/2025'}
    },
    {id: 3,
      faenaId: 2,
      nombre: 'Oscar Martin Ovalle Puelles',
      estado: 'operativo',
      imagen: 'assets/equipos/Camion1.jpg',
      km: 12345,
      fechaKm: '22/07/2025',
      documentos: {
        permiso: '22/07/2025',
        soap: '22/07/2025',
        revision: '22/07/2025',
        sernageomin: '22/07/2025'
        }
      },
    {id: 4,
      faenaId: 2,
      nombre: 'Oscar Martin Ovalle Puelles',
      estado: 'operativo',
      imagen: 'assets/equipos/Camion1.jpg',
      km: 12345,
      fechaKm: '22/07/2025',
      documentos: {
        permiso: '22/07/2025',
        soap: '22/07/2025',
        revision: '22/07/2025',
        sernageomin: '22/07/2025'
        }
      },
    {id: 5,
      faenaId: 2,
      nombre: 'Oscar Martin Ovalle Puelles',
      estado: 'operativo',
      imagen: 'assets/equipos/Camion1.jpg',
      km: 12345,
      fechaKm: '22/07/2025',
      documentos: {
        permiso: '22/07/2025',
        soap: '22/07/2025',
        revision: '22/07/2025',
        sernageomin: '22/07/2025'
        }
      },
    {id: 6,
      faenaId: 3,
      nombre: 'Oscar Martin Ovalle Puelles',
      estado: 'operativo',
      imagen: 'assets/equipos/Camion1.jpg',
      km: 12345,
      fechaKm: '22/07/2025',
      documentos: {
        permiso: '22/07/2025',
        soap: '22/07/2025',
        revision: '22/07/2025',
        sernageomin: '22/07/2025'
        }
      }
  ];

  getEquiposPorFaena(faenaId: number): Equipo[] {
    return this.equipos.filter(e => e.faenaId === faenaId);
  }

  getEquipoById(id: number): Equipo | undefined {
    return this.equipos.find(e => e.id === id);
  }
}
