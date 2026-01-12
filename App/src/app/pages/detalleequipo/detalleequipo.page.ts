import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { ReporteService } from '../../services/reporte.service';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { PerfilPopoverComponent } from '../perfil-popover/perfil.popover';

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
  usuario: any;

 
  constructor(
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController,
    private router: Router,
    private authService: AuthService,
    private equipoService: EquipoService,
    private reporteService: ReporteService,
  ) {}

  ngOnInit() {
    this.idEquipo = Number(this.route.snapshot.paramMap.get('idEquipo'));
    this.equipo = this.equipoService.getEquipoById(this.idEquipo);
    this.reportes = this.reporteService.getReportesPorEquipo(this.idEquipo);
    this.faenaId = Number(this.route.snapshot.paramMap.get('idFaena'));
    this.authService.getUser().subscribe(user => {
    this.usuario = user;
  });
  }

  ionViewWillEnter() {
    this.cargarReportes();
    console.log("Punto3")
  }

  cargarReportes() {
    this.reportes = this.reporteService.getReportesPorEquipo(this.idEquipo);
  }

  // 👉 Navegar al detalle del reporte
  irAReporte(idReporte: number) {
    this.router.navigate([
      '/reporte',
      idReporte,
      this.idEquipo,
      
    ]);
  }
  async mostrarPerfil(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PerfilPopoverComponent,
      event: ev,
      componentProps: {
        usuario: this.usuario,
        onLogout: () => this.logout()
      }
    });
  
    await popover.present();
  }
  
  
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/inicio']);
    });
  }
  
  volver() {
      this.router.navigate([
        '/listaequipo',
        this.faenaId
      ]);
    }
}
