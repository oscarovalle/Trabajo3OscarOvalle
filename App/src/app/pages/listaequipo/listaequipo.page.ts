import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo.model';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipoService: EquipoService) {}

  ngOnInit() {
    this.idFaena = Number(this.route.snapshot.paramMap.get('idFaena'));

    console.log('Faena seleccionada:', this.idFaena);
    this.equipos = this.equipoService.getEquiposPorFaena(this.idFaena);

    // Aquí después filtras los equipos por faena
  }

  volver() {
      this.router.navigate([
        '/faena'
      ]);
    }
    
 
}
