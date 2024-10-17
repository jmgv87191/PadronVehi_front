
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

export interface RespVehiculo {

    id_inv:number;
    
}



export interface Revision {
    subcategoria: string;
    funcionario:  string;
    fecha:        Date;
    estado:       number;
    observacion:  string;
}





/* 

vehiculo{
    id_inv: number;
    revision[
        {
            id_revision: number
            estado: number
            observacion: string;
        }
    ]
} 
    
*/