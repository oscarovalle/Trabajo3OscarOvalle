import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../../services/reporte.service';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { PerfilPopoverComponent } from '../perfil-popover/perfil.popover';


@Component({
  selector: 'app-ingresoreporte',
  templateUrl: './ingresoreporte.page.html',
  styleUrls: ['./ingresoreporte.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class IngresoreportePage implements OnInit {

  mostrarCalendario = false;
  idEquipo!: number;
  equipoId!: number;
  usuario: any;

  reporte = {
    fecha: '',
    detalle: '',
    idEquipo: 0
  };

  fotos: any[] = [];

  constructor(
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private reporteService: ReporteService
  ) {}

  ngOnInit() {
    this.idEquipo = Number(this.route.snapshot.paramMap.get('idEquipo'));
    this.reporte.idEquipo = this.idEquipo;
    const hoy = new Date().toISOString();
    this.reporte.fecha = hoy;
    this.equipoId = Number(this.route.snapshot.paramMap.get('idEquipo'));
    this.authService.getUser().subscribe(user => {
      this.usuario = user;
      console.log('Usuario Google:', user);
      console.log('Foto URL:', user?.photoURL); 
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

  abrirCalendario() {
    this.mostrarCalendario = true;
  }

  cerrarCalendario() {
    this.mostrarCalendario = false;
  }

  seleccionarFecha(event: any) {
    this.reporte.fecha = event.detail.value;
    this.mostrarCalendario = false;
  }

  agregarFoto() {
    if (this.fotos.length < 5) {
      this.fotos.push({});
    }
  }

  eliminarFoto(index: number) {
    this.fotos.splice(index, 1);
  }

  async enviarReporte() {

    if (!this.reporte.fecha || !this.reporte.detalle.trim()) {
      const alert = await this.alertCtrl.create({
        header: 'Campos obligatorios',
        message: 'Debe ingresar fecha y detalle del reporte.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.fotos.length > 5) {
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Está seguro que desea enviar el reporte?',
      buttons: [
        {
          text: 'Lo revisaré',
          role: 'cancel'
        },
        {
          text: 'Sí',
          handler: () => this.guardarReporte()
        }
      ]
    });

    await alert.present();
  }


  async guardarReporte() {

    const nuevoReporte = {
      id: Date.now(),          // mock ID
      idEquipo: this.idEquipo,
      fecha: this.reporte.fecha,
      detalle: this.reporte.detalle,
      fotos: this.fotos
    };

    console.log('Reporte guardado:', nuevoReporte);

    //GUARDAR EN EL SERVICE
    this.reporteService.agregarReporte(nuevoReporte);

    const alert = await this.alertCtrl.create({
      header: 'Éxito',
      message: 'Reporte guardado correctamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/detalleequipo', this.idEquipo]);
          }
        }
      ]
    });

    await alert.present();
    }

    volver() {
      this.router.navigate([
        '/detalleequipo',
        this.equipoId
      ]);
    }

}
