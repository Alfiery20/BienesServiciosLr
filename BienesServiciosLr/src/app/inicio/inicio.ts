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
      titulo: "Lotizacion San Diego",
      descripcion: "Un espacio ideal para invertir y construir el hogar de tus sueños."
    },
    {
      imagen: "/CarruselInicio/img_2.webp",
      titulo: "Vivienda en el Fundo San Lorenzo",
      descripcion: "Proyecto unifamiliar con una construcción de calidad."
    },
    {
      imagen: "/CarruselInicio/img_3.webp",
      titulo: "Vivienda en distrito de Santa Rosa",
      descripcion: "Te asesoramos para construir el hogar que siempre soñaste."
    },
    {
      imagen: "/CarruselInicio/img_4.webp",
      titulo: "Asesoramiento Personalizado",
      descripcion: "Te asesoramos con profesionales de calidad para cada paso de tu inversión."
    },
    {
      imagen: "/CarruselInicio/img_5.webp",
      titulo: "Proyecto en el distrito de Santa Rosa",
      descripcion: "Entregamos más que una vivienda, entregamos un sueño cumplido."
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
