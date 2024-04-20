import { Component } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from '../error/error.component';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { RouterOutlet, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ErrorComponent, BienvenidoComponent, RouterOutlet,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  nombre!: string;
  clave!: string;
  
  constructor(private router: Router) {}
  
  goTo(path: string) {
    this.router.navigate([path]);
  }

  login() {
    const usuario = localStorage.getItem('usuario');
    const clave = localStorage.getItem('clave');

    if(this.nombre == usuario && this.clave == clave) {
      this.goTo('welcome');
    }
    else {
      this.goTo('error');
    }
  }
}
