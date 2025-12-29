import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../../services/reporte.service';

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

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private reporteService: ReporteService
    ) {}

    ngOnInit() {
      this.reporteId = Number(
        this.route.snapshot.paramMap.get('idReporte')
      );

      this.equipoId = Number(
        this.route.snapshot.paramMap.get('idEquipo')
      );

      this.reporte = this.reporteService.getReporteById(this.reporteId );
      if (!this.reporte) {
        console.error('Reporte no encontrado');
      }
    }

    volver() {
      this.router.navigate([
        '/detalleequipo',
        this.equipoId
      ]);
    }

}
