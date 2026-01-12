import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../../services/reporte.service';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { PerfilPopoverComponent } from '../perfil-popover/perfil.popover';

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
    usuario: any;

    constructor(
      private route: ActivatedRoute,
      private popoverCtrl: PopoverController,
      private router: Router,
      private authService: AuthService,
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
      this.authService.getUser().subscribe(user => {
      this.usuario = user;
    });
    
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
        '/detalleequipo',
        this.equipoId
      ]);
    }

}
