import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calificacion2.component.html',
  styleUrls: ['./calificacion2.component.css']
})
export class Calificacion2Component {
  @Input() numero: number = 2; // Permitir que el valor inicial venga desde el padre
  @Output() numeroChange = new EventEmitter<number>(); 

  sumar(valor: number): void {
    if (this.numero < 3) {
      this.numero += valor;
      this.numeroChange.emit(this.numero); // Emitir el valor actualizado
    }
  }

  restar(valor: number): void {
    if (this.numero > 1) {
      this.numero -= valor;
      this.numeroChange.emit(this.numero); // Emitir el valor actualizado
    }
  }
}
