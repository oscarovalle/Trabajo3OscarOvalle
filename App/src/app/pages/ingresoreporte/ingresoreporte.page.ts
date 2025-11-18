import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ingresoreporte',
  templateUrl: './ingresoreporte.page.html',
  styleUrls: ['./ingresoreporte.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class IngresoreportePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
