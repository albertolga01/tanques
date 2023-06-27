import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentProductos implements OnInit {

  productos: Producto[] = [];
 
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe((data: Producto[])=>{
      this.productos = data;
      console.log(this.productos);
    })
  }

  deleteProducto(id){
    this.productoService.delete(id).subscribe(res => {
         this.productos = this.productos.filter(item => item.id !== id);
         console.log('Producto eliminado correctamente');
    })
  }

}
