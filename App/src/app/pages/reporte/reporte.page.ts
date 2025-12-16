import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ReportePage implements OnInit {

    reporteId!: number;
    equipoId!: number;
    reporte: any;

    reportesMock = [
      {
        id: 1,
        fecha: '22/07/2025',
        detalle: 'Falla en sistema hidráulico.',
        imagenes: [
          'assets/reportes/reporte1.jpg',
          'assets/reportes/reporte2.jpg'
        ]
      },
      {
        id: 2,
        fecha: '18/07/2025',
        detalle: 'Cambio de filtros.',
        imagenes: [
          'assets/reportes/reporte2.jpg'
        ]
      }
    ];

    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit() {
      this.reporteId = Number(
        this.route.snapshot.paramMap.get('idReporte')
      );

      this.equipoId = Number(
        this.route.snapshot.paramMap.get('idEquipo')
      );

      this.reporte = this.reportesMock.find(
        r => r.id === this.reporteId
      );
    }

    volver() {
      this.router.navigate([
        '/detalleequipo',
        this.equipoId
      ]);
    }

}
