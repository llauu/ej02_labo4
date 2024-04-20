import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: "full"},
    {path: 'home', component: LoginComponent},
    {path: 'welcome', component: BienvenidoComponent},
    {path: 'error', component: ErrorComponent},
];
