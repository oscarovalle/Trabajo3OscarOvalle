import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listaequipo',
  templateUrl: './listaequipo.page.html',
  styleUrls: ['./listaequipo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ListaequipoPage implements OnInit {

   idFaena!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idFaena = Number(this.route.snapshot.paramMap.get('idFaena'));

    console.log('Faena seleccionada:', this.idFaena);

    // Aquí después filtras los equipos por faena
  }
  equipos = [
    {
      id: 1,
      nombre: 'Camion UBEX ONE',
      imagen: 'assets/equipos/Camion1.jpg',
      estado: 'operativo'
    },
    {
      id: 2,
      nombre: 'PMO 40',
      imagen: 'assets/equipos/Camion2.jpg',
      estado: 'fs'
    },
    {
      id: 3,
      nombre: 'Matrizero 7708hh',
      imagen: 'assets/equipos/Camion3.jpg',
      estado: 'operativo'
    }
  ];

}
