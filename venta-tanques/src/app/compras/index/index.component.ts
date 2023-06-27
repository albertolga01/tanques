import { Component, OnInit } from '@angular/core';
import { CompraService } from '../compra.service';
import { Compra } from '../compra';
import swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentCompras implements OnInit {

  compras: Compra[] = [];
  
 
  constructor(public compraService: CompraService) { }

  ngOnInit(): void {
    this.compraService.getAll().subscribe((data: Compra[])=>{
      this.compras = data;
      console.log(this.compras);
    })

  }

  deleteCompra(id){
    this.compraService.delete(id).subscribe(res => {
         this.compras = this.compras.filter(item => item.id !== id);
         this.alerta('Compra eliminado correctamente');
    })
  }

  alerta(msg){  
    swal.fire(msg);  
  }  

}
