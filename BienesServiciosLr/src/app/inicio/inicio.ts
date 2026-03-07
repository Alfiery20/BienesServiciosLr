import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  proyectos = [
    {
      imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      titulo: "Residencial Los Olivos",
      descripcion: "Proyecto residencial con excelente ubicación y alta proyección de valorización."
    },
    {
      imagen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      titulo: "Urbanización Santa María",
      descripcion: "Terrenos con acceso a vías principales y servicios urbanos completos."
    },
    {
      imagen: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      titulo: "Condominio Vista Verde",
      descripcion: "Un espacio ideal para invertir y construir el hogar de tus sueños."
    }
  ];

  indiceActual = 0;

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.proyectos.length;
  }

  anterior() {
    this.indiceActual =
      (this.indiceActual - 1 + this.proyectos.length) % this.proyectos.length;
  }

  irA(index: number) {
    this.indiceActual = index;
  }

}
