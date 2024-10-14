import { Component, ChangeDetectionStrategy, OnInit,signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PadronService } from '../../services/padron.service';
import { Vehiculo } from '../../interfaces/vehiculo';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, 
    FormsModule, CommonModule, ReactiveFormsModule, MatTableModule, MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  selected = 'option2';
  form: FormGroup;
  readonly panelOpenState = signal(false);

  public vehicle: Vehiculo[] = [];

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Delanteras', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Traseras', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Cuartos delanteros', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Cuartos traseros', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Direccional derecha (delantera)', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Direccional izquierda (delantera)', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Direccional izquierda (trasera)', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Direccional derecha (trasera)', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Preventivas', weight: 18.9984, symbol: 'F'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  constructor( private _padronService: PadronService,
                private fb: FormBuilder
  ){
    this.form = this.fb.group({
      id:[null,Validators.required],
      no_inventario:[null,Validators.required],
      nombre_resguardante:['', Validators.required],
      fecha:['', Validators.required],
      id_vidrios:['', Validators.required],

    })
  }
  
  ngOnInit(): void {

    this.getVehicle();

  }

  getVehicle(){

    this._padronService.getProducts().subscribe((data)=>{

      this.vehicle = data;

    })
  }

  onSelectionChange( selectedVehicle: Vehiculo ){

    console.log(selectedVehicle)

    this.form.setValue({
      id: selectedVehicle.id,
      nombre_resguardante: selectedVehicle.nombre_resguardante,
      no_inventario: selectedVehicle.no_inventario,
      fecha: selectedVehicle.fecha,
      id_vidrios: selectedVehicle.id_vidrios
    })

  }

  AddProduct( id:number, body: Vehiculo ){

    this._padronService.updateProduct(id, body).subscribe(()=>{
      console.log(id)
      console.log(body)
    })

  } 

}
