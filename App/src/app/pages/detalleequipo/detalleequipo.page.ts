import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleequipo',
  templateUrl: './detalleequipo.page.html',
  styleUrls: ['./detalleequipo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class DetalleequipoPage implements OnInit {

  idEquipo!: number;
  equipo: any;
  reportes: any[] = [];

  equiposMock = [
    {
      id: 1,
      nombre: 'Excavadora CAT 320',
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
      nombre: 'Cargador Frontal 950H',
      estado: 'fs',
      imagen: 'assets/equipos/Camion2.jpg',
      km: 8540,
      fechaKm: '10/07/2025',
      documentos: {
        permiso: '20/08/2025',
        soap: '20/08/2025',
        revision: '20/08/2025'
      }
    }
  ];

  reportesMock = [
    {
      id: 1,
      equipoId: 1,
      fecha: '22/07/2025',
      detalle: 'Falla en sistema hidráulico.',
      imagen: 'assets/reportes/reporte1.jpg'
    },
    {
      id: 2,
      equipoId: 1,
      fecha: '18/07/2025',
      detalle: 'Cambio de filtros.',
      imagen: 'assets/reportes/reporte2.jpg'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idEquipo = Number(
      this.route.snapshot.paramMap.get('idEquipo')
    );

    this.equipo = this.equiposMock.find(
      e => e.id === this.idEquipo
    );

    this.reportes = this.reportesMock.filter(
      r => r.equipoId === this.idEquipo
    );
  }

  // 👉 Navegar al detalle del reporte
  irAReporte(idReporte: number) {
    this.router.navigate([
      '/reporte',
      idReporte,
      this.idEquipo
    ]);
  }
}
