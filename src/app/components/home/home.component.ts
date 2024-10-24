import { Component, OnInit, AfterViewInit, Input  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PadronService } from '../../services/padron.service';
import { Inventario, RespVehiculo, tablaLuces, Vehiculo } from '../../interfaces/vehiculo';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CalificacionComponent } from '../../shared/calificacion/calificacion.component';
import { AppComponent } from "../../app.component";
import { Calificacion2Component } from '../../shared/calificacion2/calificacion2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, FormsModule, CommonModule, ReactiveFormsModule,
    MatTableModule, MatExpansionModule, MatAutocompleteModule, AsyncPipe, CalificacionComponent,
    AppComponent, Calificacion2Component,CommonModule
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  public vehicle!: Vehiculo;
  public padronVehiculos: Inventario[] = [];
  public respRevision?: RespVehiculo;
  myControl = new FormControl('');
  filteredOptions: Observable<Inventario[]> | undefined;
  form:FormGroup;
  numero: number | undefined = 123;
  public valorCalificacion: number = 2;
  

  detallesRevision: tablaLuces[] = [
    {
    subcategoria: "LUZ DELANTERA",
    subcategoriaId : 1,
    estado:2
  },
    {
    subcategoria: "LUZ TRASERA",
    subcategoriaId : 2,
    estado:2

  },
    {
    subcategoria: "LUZ DE CUARTOS DELANTERO",
    subcategoriaId : 3,
    estado:2


  },
    {
    subcategoria: "LUZ DE CUARTOS TRASERO",
    subcategoriaId : 4,
    estado:2

  },
    {
    subcategoria: "LUZ DIRECCIONAL DERECHA DELANTERA",
    subcategoriaId : 5,
    estado:2

  },
    {
    subcategoria: "LUZ DIRECCIONAL IZQUIERDA DELANTERA",
    subcategoriaId : 6,
    estado:2

  },
    {
    subcategoria: "LUZ DIRECCIONAL DERECHA TRASERA",
    subcategoriaId : 7,
    estado:2

  },
    {
    subcategoria: "LUZ DIRECCIONAL IZQUIERDA TRASERA",
    subcategoriaId : 8,
    estado:2

  },
    {
    subcategoria: "LUCES PREVENTIVAS",
    subcategoriaId : 9,
    estado:2

  }

]



  constructor(private _padronService: PadronService,
    private fb:FormBuilder

  ) {

    this.form = this.fb.group({
      color: ['', Validators.required],
      marca: ['', Validators.required],
      asignado: ['', Validators.required],
      
    })

  }

  ngOnInit(): void {
    this.getVehicle();
  
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  getVehicle(): void {
    this._padronService.getProducts().pipe(
      catchError(error => {
        console.error('Error al obtener los vehículos:', error);
        return of([]);
      })
    ).subscribe((data: Inventario[]) => {
      this.padronVehiculos = data;
      console.log('Vehículos obtenidos:', this.padronVehiculos); // Verifica aquí
    });
  }

  private _filter(value: any): Inventario[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
  
    // Filtrar vehículos basados en no_inventario
    return this.padronVehiculos
      .filter(option => option.no_inventario.toString().toLowerCase().includes(filterValue))
      .slice(0, 5);
  }
  

// Función que se ejecuta al seleccionar una opción
  onOptionSelected(selectedVehicle: Inventario, tabla:tablaLuces[]): void {
    // Establecer el valor del control al no_inventario del vehículo seleccionado
    this.myControl.setValue(String(selectedVehicle.no_inventario));
    
    // Obtén el ID y el número de inventario
    const selectedId = selectedVehicle.id; // Suponiendo que 'id' es el campo que deseas
    const selectedNoInventario = selectedVehicle.no_inventario;
    
    console.log('ID seleccionado:', selectedId);
    console.log('Número de inventario seleccionado:', selectedNoInventario);
    // Aquí puedes agregar más lógica según lo que necesites


    this._padronService.getProduct(selectedId!).subscribe((data)=>{


      this.vehicle = data;

      console.log(data)

      this.form.setValue({
        color: this.vehicle.color,
        marca: this.vehicle.marca,
        asignado: this.vehicle.asignado,
      })
      

      this.respRevision = {
        id_inv: data.id,
        id_funcionario: data.asignado,
        id_vehiculo: data.id,
        fecha: "12/12/12",
        usuario: data.asignado,
      
        revision: data.revision.map((rev: any) => ({
          id_subcategoria: rev.subcategoriaId,
          estado: 1,  
          observacion: "Observación por defecto" 
        }))
      };

      
    })

  }

  
  actualizarValor(nuevoValor: number): void {
    console.log('Nuevo valor recibido:', nuevoValor);
    this.valorCalificacion = nuevoValor;
  }
  
/*   valorEstado(item: tablaLuces, tabla:tablaLuces): void {
    
    
    item.estado += 1;
    tabla.estado =item.estado
    
    
    console.log(  item )
    console.log(  tabla ) 
  } */
  
  agregar(){
    console.log(this.respRevision)
  }



}
