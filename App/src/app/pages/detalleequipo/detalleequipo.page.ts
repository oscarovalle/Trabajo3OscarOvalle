import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalleequipo',
  templateUrl: './detalleequipo.page.html',
  styleUrls: ['./detalleequipo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class DetalleequipoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
