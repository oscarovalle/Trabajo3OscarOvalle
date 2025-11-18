import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-listaequipo',
  templateUrl: './listaequipo.page.html',
  styleUrls: ['./listaequipo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class ListaequipoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
