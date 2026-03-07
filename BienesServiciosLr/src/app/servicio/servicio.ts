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
      descripcion: 'Accede a terrenos ubicados en zonas estratégicas con alto potencial de crecimiento urbano.',
      video: 'assets/video/registro.mp4',
      beneficios: ["Poda profesional", "Diseño paisajístico", "Mantenimiento mensual"]
    },
    construye: {
      titulo: 'Construye tu casa',
      descripcion: 'Desarrollamos proyectos inmobiliarios con planificación estratégica y visión de crecimiento.',
      video: 'assets/video/construye.mp4',
      beneficios: ["Acabados profesionales", "Materiales de calidad", "Trabajo garantizado"]
    },
    invierte: {
      titulo: 'Invierte seguro',
      descripcion: 'Te brindamos acompañamiento profesional para tomar decisiones seguras.',
      video: 'assets/video/invierte.mp4',
      beneficios: ["Instalaciones certificadas", "Reparaciones rápidas", "Diagnóstico profesional"]
    }
  };

  seleccionado: ServicioInfo = {
    titulo: '',
    descripcion: '',
    video: '',
    beneficios: []
  } as ServicioInfo;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const labor = params['labor'] ?? 'registro';
      this.seleccionado = this.servicios[labor];
    });
  }

}