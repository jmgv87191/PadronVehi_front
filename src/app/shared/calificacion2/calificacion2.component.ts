import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calificacion2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calificacion2.component.html',
  styleUrl: './calificacion2.component.css'
})
export class Calificacion2Component {


  public numero: number = 2

  sumar(valor: number): void {
    if (this.numero < 3) {
      this.numero += valor;
    }
  }

  restar(valor: number): void {
    if (this.numero > 1) {
      this.numero -= valor;
    }
  }
  


}
