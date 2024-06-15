import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HowToGetComponent } from './components/how-to-get/how-to-get.component';

export const routes: Routes = [

    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'como-llegar',
        component: HowToGetComponent
    },
    {
        path:'hotel',component:HotelComponent
    },
    {path:'agencia',component:AgenciasComponent},
    {path:'estadistica',component:EstadisticasComponent},
    {
        path:'**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
