import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Inicio } from './inicio/inicio';
import { Labores } from './labores/labores';
import { Nosotros } from './nosotros/nosotros';

export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'labores',
        component: Labores
    },
    {
        path: 'nosotros',
        component: Nosotros
    },
    {
        path: '**',
        redirectTo: '',
    },
];
