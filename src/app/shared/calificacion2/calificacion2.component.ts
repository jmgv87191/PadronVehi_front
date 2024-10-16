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


  public numero: number = 0

  sumar( numero:number ){
    return this.numero+=numero
  }
  
  restar( numero:number ){
    return this.numero-=numero
  }
  


}
