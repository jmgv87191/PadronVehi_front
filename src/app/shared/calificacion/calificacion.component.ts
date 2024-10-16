import { Component, OnInit, AfterViewInit  } from '@angular/core';

declare var FaceRating: any; // Declara la clase para evitar errores de TypeScript

@Component({
  selector: 'app-calificacion',
  standalone: true,
  imports: [],
  templateUrl: './calificacion.component.html',
  styleUrl: './calificacion.component.css'
})



export class CalificacionComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    new FaceRating('.face-rating'); // Inicializa FaceRating al montar el DOM
  }

}
