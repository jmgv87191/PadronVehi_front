
export interface Inventario{
    id?: number;
    no_inventario: number;
}

export interface Vehiculo {
    id?:number;
    noeconomico:   number;
    noinventario:  number;
    area:          string;
    bien:          string;
    descripcion:   string;
    marca:         string;
    serie:         string;
    estado:        string;
    ubicacion:     string;
    factura:       string;
    observaciones: null;
    asignado:      string;
    modelo:        number;
    nota:          null;
    color:         string;
    revision:      Revision[];
}

export interface Revision {
    subcategoria: string;
    subcategoriaId: number;
    vehiculos: vehiculoRevision;
}

export interface vehiculoRevision{
    estado: number;
    fecha: string;
    funcionario: string;
    observacion: string;
}

export interface RespVehiculo {

    id_inv?:number;
    id_funcionario: string;
    id_vehiculo?: number;
    fecha: string;
    usuario: string;
    revision: respRevision[];

}

export interface respRevision {

    id_subcategoria?: number;
    estado:number;
    observacion:string;

}

export interface tablaLuces{

    subcategoria: string;
    subcategoriaId: number;
    estado: number;
}

/* 

vehiculo{
    id_inv: number;
    id_funcionario:
    id_vehiculo:
    fecha:
    usuario:
    revision[
        {
            id_subcategoria: number
            estado: number
            observacion: string;
        }
    ]
} 
    
*/