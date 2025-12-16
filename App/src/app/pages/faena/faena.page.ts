import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-faena',
  templateUrl: './faena.page.html',
  styleUrls: ['./faena.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class FaenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    faenas = [
    {
      id: 1,
      nombre: 'Faena 1',
      imagen1: 'assets/faena/Camion1.jpg',
      imagen2: 'assets/faena/Camion2.jpg'
    },
    {
      id: 2,
      nombre: 'Faena 2',
      imagen1: 'assets/faena/Camion2.jpg',
      imagen2: 'assets/faena/Camion3.jpg'
    }
  ];

}
