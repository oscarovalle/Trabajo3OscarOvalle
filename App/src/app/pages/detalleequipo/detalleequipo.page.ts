import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { ReporteService } from '../../services/reporte.service';

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
  faenaId!: number;

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipoService: EquipoService,
    private reporteService: ReporteService,
  ) {}

  ngOnInit() {
    const idEquipo = Number(this.route.snapshot.paramMap.get('idEquipo'));
    this.equipo = this.equipoService.getEquipoById(idEquipo);
    this.reportes = this.reporteService.getReportesPorEquipo(idEquipo);
    this.faenaId = Number(this.route.snapshot.paramMap.get('idFaena'));
  }

  ionViewWillEnter() {
    this.cargarReportes();
  }

  cargarReportes() {
    this.reportes = this.reporteService.getReportesPorEquipo(this.idEquipo);
  }

  // 👉 Navegar al detalle del reporte
  irAReporte(idReporte: number) {
    this.router.navigate([
      '/reporte',
      idReporte,
      this.idEquipo
    ]);
  }
  volver() {
      this.router.navigate([
        '/listaequipo',
        this.faenaId
      ]);
    }
}
