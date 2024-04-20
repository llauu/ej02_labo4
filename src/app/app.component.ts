import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {
  title: string = 'ej01';
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('hola desde on init');
    localStorage.setItem('usuario', 'llauu');
    localStorage.setItem('clave', '1234');
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar() {
    this.suma = 0;
    this.promedio = 0;
  }
}
