import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ServicioInfo {
  titulo: string;
  descripcion: string;
  video: string;
  beneficios: string[];
}

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css',
})
export class Servicio implements OnInit {
  servicios: Record<string, ServicioInfo> = {
    registro: {
      titulo: 'Registra tu propiedad',
      descripcion: 'Regularizar tu propiedad de manera rápida, segura y conforme a la ley.',
      video: './Servicios/video_3.mp4',
      beneficios: [
        'Certificado de búsqueda catastral.',
        'Tramites de copias literales.',
        'Inscripción de predio.',
        'Independizaciones',
        'Subdivisiones.',
        'Trámites municipales.',
      ],
    },
    construye: {
      titulo: 'Construye tu casa',
      descripcion: 'Construye tu proyecto que siempre soñaste con el respaldo de expertos.',
      video: './Servicios/video_1.mp4',
      beneficios: [
        'Asesoría técnica legal gratuita.',
        'Elaboración de anteproyecto.',
        'Elaboración de proyecto.',
        'Presupuesto de obra.',
        'Ejecución.',
        'Supervisión.',
      ],
    },
    invierte: {
      titulo: 'Invierte seguro',
      descripcion: 'Ofrecemos soluciones estratégicas para inversiones inmobiliarias.',
      video: './Servicios/video_2.mp4',
      beneficios: [
        'Formalización contractual.',
        'Ubicación estratégica.',
        'Facilidades de pago.',
        'Precios accesibles.',
        'Orientación en saneamiento físico legal del predio.',
        'Seriedad en el trato.',
      ],
    },
  };

  seleccionado: ServicioInfo = {
    titulo: '',
    descripcion: '',
    video: '',
    beneficios: [],
  } as ServicioInfo;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const labor = params['labor'] ?? 'registro';
      this.seleccionado = this.servicios[labor];
    });
  }
}
