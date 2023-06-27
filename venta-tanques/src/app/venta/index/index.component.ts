import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { Venta } from '../venta';
import swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(public ventaService: VentaService) { }

  ngOnInit(): void {
    this.ventaService.getAll().subscribe((data: Venta[])=>{
      this.ventas = data;
      console.log(this.ventas);
    })
  }

  
  deleteVenta(id){
    this.ventaService.delete(id).subscribe(res => {
         this.ventas = this.ventas.filter(item => item.id !== id);
         this.alerta('Venta eliminada correctamente');
    })
  }

  formatTipo(tipo){
    if(tipo == "1"){
      return "venta";
    }else{
      return "comodato";
    }
  }

  alerta(msg){  
    swal.fire(msg);  
  }  

}
