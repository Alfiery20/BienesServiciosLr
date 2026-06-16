import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labores',
  imports: [CommonModule],
  templateUrl: './labores.html',
  styleUrl: './labores.css',
})
export class Labores {
  constructor(private router: Router) {

  }

  enviarServicio(labor: string) {
    this.router.navigate(['/servicio'], {
      queryParams: { labor: labor }
    });
  }
}
