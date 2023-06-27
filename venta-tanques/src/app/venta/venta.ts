export interface Venta {
    id: number; 
    producto: number;
    nombre: string;
    compra: number;
    cantidad: number;
    costounitario: number;
    fecha: Date;
    almacen: string;
    destino: string;
    notaventa: number; 
    tipo: string; 
    factura: string; 
    clientecolaborador: string;
    datosfacturacion: string;
    observaciones: string;
    departamento: string;
    solicita: string;
    autoriza: string;
    formapago: number;
    plazo: string;
 
}
