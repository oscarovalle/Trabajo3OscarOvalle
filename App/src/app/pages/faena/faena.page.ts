import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FaenaService } from '../../services/faena.service';
import { Faena } from '../../models/faena.model';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { PerfilPopoverComponent } from '../perfil-popover/perfil.popover';

@Component({
  selector: 'app-faena',
  templateUrl: './faena.page.html',
  styleUrls: ['./faena.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class FaenaPage implements OnInit {

  idFaena!: number;
  faenas: Faena[] = [];
  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController,
    private router: Router,
    private authService: AuthService,
    private faenaService: FaenaService
  ) {}

  ngOnInit() {
    this.faenas = this.faenaService.getFaenas();
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
}
