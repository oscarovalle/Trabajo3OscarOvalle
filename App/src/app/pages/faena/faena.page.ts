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

}
