import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresoreporte',
  templateUrl: './ingresoreporte.page.html',
  styleUrls: ['./ingresoreporte.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class IngresoreportePage implements OnInit {

  mostrarCalendario = false;

  reporte = {
    fecha: '',
    detalle: ''
  };

  fotos: any[] = [];

  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  abrirCalendario() {
    this.mostrarCalendario = true;
  }

  seleccionarFecha(event: any) {
    this.reporte.fecha = event.detail.value;
    this.mostrarCalendario = false;
  }

  agregarFoto() {
    this.fotos.push({});
  }

  // 🔵 BOTÓN "ENVIAR REPORTE"
  confirmarEnvio() {
    this.mostrarConfirmacion();
  }

  // 🟡 ALERTA DE CONFIRMACIÓN
  async mostrarConfirmacion() {
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
          handler: () => {
            this.guardarReporte();
          }
        }
      ]
    });

    await alert.present();
  }

  // 🟢 GUARDAR + MENSAJE FINAL
  async guardarReporte() {

    const data = {
      ...this.reporte,
      fotos: this.fotos
    };

    console.log('Reporte guardado:', data);

    const alert = await this.alertCtrl.create({
      header: 'Éxito',
      message: 'Reporte guardado correctamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/detalleequipo/1']);
          }
        }
      ]
    });

    await alert.present();
  }

}
