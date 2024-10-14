import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PadronService {

  private url: string;

  constructor( private http: HttpClient ) {

    this.url = "/api/padron"

  }

  getProducts():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(  environment.endpoint + this.url  )
  }

  getProduct(id:number):Observable<Vehiculo>{
    return this.http.get<Vehiculo>(  environment.endpoint + this.url + "/"+ id  )
  }

  updateProduct(id:number, body:Vehiculo):Observable<void>{
    return this.http.put<void> ( ( environment.endpoint + this.url + "/"+ id  ),body )
  }


}
