import { Component, Input } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-perfil-popover',
  imports: [IonicModule, CommonModule],
  template: `
    <ion-content class="ion-padding perfil-popover">

      <ion-avatar class="avatar-grande">
        <img [src]="usuario.photoURL">
      </ion-avatar>

      <h3>{{ usuario.displayName }}</h3>
      <p>{{ usuario.email }}</p>

      <ion-button expand="block" color="danger" (click)="logout()">
        Cerrar sesión
      </ion-button>

    </ion-content>
  `,
  styles: [`
    .perfil-popover {
      text-align: center;
    }
    .avatar-grande {
      width: 80px;
      height: 80px;
      margin: 10px auto;
    }
  `]
})
export class PerfilPopoverComponent {

  @Input() usuario: any;
  @Input() onLogout!: () => void;

  constructor(private popoverCtrl: PopoverController) {}

  logout() {
    this.onLogout();
    this.popoverCtrl.dismiss();
  }
}
