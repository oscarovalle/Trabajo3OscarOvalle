import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FaenaService } from '../../services/faena.service';
import { Faena } from '../../models/faena.model';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private faenaService: FaenaService
  ) {}

  ngOnInit() {
    this.faenas = this.faenaService.getFaenas();
  }
}
