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
      imagen: "/CarruselInicio/img_1.webp",
      titulo: "Residencial Los Olivos",
      descripcion: "Proyecto residencial con excelente ubicación y alta proyección de valorización."
    },
    {
      imagen: "/CarruselInicio/img_2.webp",
      titulo: "Urbanización Santa María",
      descripcion: "Terrenos con acceso a vías principales y servicios urbanos completos."
    },
    {
      imagen: "/CarruselInicio/img_3.webp",
      titulo: "Condominio Vista Verde",
      descripcion: "Un espacio ideal para invertir y construir el hogar de tus sueños."
    },
    {
      imagen: "/CarruselInicio/img_4.webp",
      titulo: "Residencial Los Olivos",
      descripcion: "Proyecto residencial con excelente ubicación y alta proyección de valorización."
    },
    {
      imagen: "/CarruselInicio/img_5.webp",
      titulo: "Urbanización Santa María",
      descripcion: "Terrenos con acceso a vías principales y servicios urbanos completos."
    },
    {
      imagen: "/CarruselInicio/img_6.webp",
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
