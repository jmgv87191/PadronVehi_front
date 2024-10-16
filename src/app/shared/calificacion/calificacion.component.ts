import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

// Declara FaceRating si es una biblioteca externa
declare var FaceRating: any;

@Component({
  selector: 'app-calificacion',
  standalone: true,
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css'] // Asegúrate de que sea 'styleUrls'
})
export class CalificacionComponent implements AfterViewInit {
  @ViewChild('faceRatingInput', { static: false }) faceRatingInput!: ElementRef;

  ngAfterViewInit(): void {
    if (this.faceRatingInput) {
      new FaceRating(this.faceRatingInput.nativeElement); // Usamos el input específico
    }
  }
}
