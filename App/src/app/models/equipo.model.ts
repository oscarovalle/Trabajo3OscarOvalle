export interface Equipo {
  id: number;
  faenaId: number;
  nombre: string;
  estado: 'operativo' | 'fs';
  imagen: string;
  km: number;
  fechaKm: string;
  documentos?: any;
}
