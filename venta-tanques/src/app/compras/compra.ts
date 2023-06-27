export interface Compra {
    id: number;
    idproducto: number;
    producto: string;
    descripcion: string;
    fecha: Date;
    lote: string;
    cantidad: number;
    costounitario: number;
    factura: number;
    disponible: number; 
}
