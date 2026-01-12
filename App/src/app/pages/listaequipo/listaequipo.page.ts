import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo.model';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { PerfilPopoverComponent } from '../perfil-popover/perfil.popover';

@Component({
  selector: 'app-listaequipo',
  templateUrl: './listaequipo.page.html',
  styleUrls: ['./listaequipo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ListaequipoPage implements OnInit {

    idFaena!: number;
    equipos: Equipo[] = [];
    usuario: any;

  constructor(
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController,
    private router: Router,
    private authService: AuthService,
    private equipoService: EquipoService) {}

  ngOnInit() {
    this.idFaena = Number(this.route.snapshot.paramMap.get('idFaena'));
    this.authService.getUser().subscribe(user => {
      this.usuario = user;
      console.log('Usuario Google:', user);
      console.log('Foto URL:', user?.photoURL); 
    });

    console.log('Faena seleccionada:', this.idFaena);
    this.equipos = this.equipoService.getEquiposPorFaena(this.idFaena);

  }

  volver() {
      this.router.navigate([
        '/faena'
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

    
 
}
