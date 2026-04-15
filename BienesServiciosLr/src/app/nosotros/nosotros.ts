import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  proyectos = [
    {
      imagen: "/CarruselNosotros/NuestroEquipo.webp",
      titulo: "Nuestro equipo de trabajo",
      descripcion: "Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia en el servicio, dedicados a brindar soluciones inmobiliarias personalizadas y eficientes para nuestros clientes."
    },
    {
      imagen: "/CarruselNosotros/DiegoReyes.webp",
      titulo: "Diego Armando Reyes Acosta",
      descripcion: "Experto en gestión de proyectos inmobiliarios y asesoría personalizada para inversión."
    },
    {
      imagen: "/CarruselNosotros/GaviPanta.webp",
      titulo: "Gavi Liliana Panta Chero",
      descripcion: "Especialista en atención al cliente y gestión de relaciones para garantizar la satisfacción del cliente."
    },
    {
      imagen: "/CarruselNosotros/RosaSanchez.webp",
      titulo: "Rosa Sánchez Purizaca",
      descripcion: "Asesora inmobiliaria con amplia experiencia en la venta y promoción de propiedades."
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
