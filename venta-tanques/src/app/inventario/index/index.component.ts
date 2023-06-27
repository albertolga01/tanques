import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { Inventario } from '../inventario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentInventario implements OnInit {

  
  inventario: Inventario[] = [];
 //servicio de compras
  constructor(public inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.inventarioService.inventario().subscribe((data: Inventario[])=>{
      this.inventario = data;
      console.log(this.inventario);
    })
  }

  deleteProducto(id){
    this.inventarioService.delete(id).subscribe(res => {
         this.inventario = this.inventario.filter(item => item.id !== id);
         this.alerta('Producto eliminado correctamente');
    })
  }
  alerta(msg){  
    swal.fire(msg);  
  }  
  

}
