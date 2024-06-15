import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

export const routes: Routes = [

    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'servicios',component:HotelComponent
    },
    {path:'agencia',component:AgenciasComponent},
    {path:'estadistica',component:EstadisticasComponent},
    {
        path:'**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
