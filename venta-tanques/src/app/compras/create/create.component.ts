import { Component, OnInit } from '@angular/core';
import { CompraService } from '../compra.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from '../../productos/producto.service';
import { Producto } from '../../productos/producto';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentCompras implements OnInit {

  form: FormGroup;
  productos: Producto[] = []; 

  constructor(
    public compraService: CompraService,
    public productoService: ProductoService,
    
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      producto:  new FormControl('', [ Validators.required ]),
      fecha: new FormControl('', [ Validators.required ]),
      lote: new FormControl('', [ Validators.required ]),
      cantidad: new FormControl('', [ Validators.required ]),
      costounitario: new FormControl('', [ Validators.required ]),
      factura: new FormControl('', [ Validators.required ])
    });
   
    this.productoService.getAll().subscribe((data: Producto[])=>{
      this.productos = data;
      console.log(this.productos);
    })

    
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.compraService.create(this.form.value).subscribe(res => {
      this.alerta('Compra registrada correctamente!');
         this.router.navigateByUrl('dashboard/compras/index');
    })
  }
  alerta(msg){  
    swal.fire(msg);  
  }  
}
