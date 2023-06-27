import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from '../../productos/producto.service';
import { CompraService } from '../../compras/compra.service';
import { Producto } from '../../productos/producto';
import { Compra } from '../../compras/compra';
import { Venta } from '../venta';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form: FormGroup;
  productos: Producto[] = [];
  ventas: Venta[] = [];
  compras: Compra[] = [];
  producto: string;
  idproducto: number;

  constructor(
    public ventaService: VentaService,
    public productoService: ProductoService,
    public compraService: CompraService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fecha:  new FormControl('', [ Validators.required, Validators.pattern('((0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4})|[0-9]{4}|(0[1-9]|1[012]).[0-9]{4}') ]),
      almacen: new FormControl('', [ Validators.required]),
      destino: new FormControl('', [ Validators.required]),
      //notaventa: new FormControl('', [ Validators.required]),
      producto: new FormControl('', [ Validators.required]),
      nombre: new FormControl('', [ Validators.required]),
      compra: new FormControl('', [ Validators.required]),
      cantidad: new FormControl('', [ Validators.required]),
      costounitario: new FormControl('', [ Validators.required]),
      tipo: new FormControl('', [ Validators.required]),
      factura: new FormControl('', [ Validators.required]),
      clientecolaborador: new FormControl('', [ Validators.required]),
      datosfacturacion: new FormControl('', [ Validators.required]),
      observaciones: new FormControl('', [ Validators.required]),
      departamento: new FormControl('', [ Validators.required]),
      //solicita: new FormControl('', [ Validators.required]),
      //autoriza: new FormControl('', [ Validators.required]),
      formapago: new FormControl('', [ Validators.required]),
      idproducto: new FormControl('', [ Validators.required]),
      plazo: new FormControl('')
    });

    this.productoService.getAll().subscribe((data: Producto[])=>{
     this.productos = data;
      console.log(this.productos);
    })

    //compras con stock disponible
    this.compraService.getAllStock().subscribe((data: Compra[])=>{
      console.log(data);
      const result = data.filter((compra: any) =>
      compra.disponible > 0);
      console.log(result);
      this.compras = result;
    })
  }

  
  get f(){
    return this.form.controls;
  }
 

  cantidadDisponible(value: string) { 
    let idcompra = value;
    this.compraService.getStockDisponible(value).subscribe((data: Compra)=>{
    console.log(data);
    this.alerta("Disponible " + data[0].disponible);
    document.getElementById("cantidad").setAttribute("max", String(data[0].disponible)); 
    document.getElementById("cantidad").setAttribute("min", "1"); 
      this.obtenerProducto(idcompra);
    //set maximo disponible
    }); 
  }

  obtenerProducto(idcompra){
   // alert(idcompra);
    //obtener producto de la compra 
    this.compraService.obtenerProducto(idcompra).subscribe((data: Compra)=>{
      console.log(data[0]);
      this.idproducto = data[0].id;
      this.producto = data[0].producto;
      //this.productos = data; 
      }); 
  }

  submit(){
    console.log(this.form.value);
    this.ventaService.create(this.form.value).subscribe(res => {
         this.alerta('Venta creada correctamente!');
         this.router.navigateByUrl('/dashboard/venta/index');
    })
  }

  alerta(msg){  
    swal.fire(msg);  
  }  

}
