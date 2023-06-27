import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { VentaService } from '../../venta/venta.service';
import { OrdenService } from '../orden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Venta } from '../../venta/venta';
import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';
import swal from 'sweetalert2';


@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  id: number;
  idOrdenSalida: number;
  venta: Venta;
  
  constructor(public ventaService: VentaService,
    public ordenService: OrdenService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
      //detalle de la venta
      this.getData();
      
  }

  public getData(){
    this.id = this.route.snapshot.params['idVenta'];
      this.ordenService.findOrdenSalida(this.id).subscribe((data: Venta)=>{
        this.venta = data[0];
        console.log(data);
        document.getElementById("folio-orden").innerHTML = String(data[0].id);
        this.idOrdenSalida = data[0].id;
        document.getElementById("fecha").innerHTML = String(data[0].fecha).split("-").reverse().join("/");
        document.getElementById("almacen").innerHTML = String(data[0].almacen);
        document.getElementById("destino").innerHTML = String(data[0].clientecolaborador);
        document.getElementById("notaventa").innerHTML = String(data[0].notaventa);
        //document.getElementById("nombre").innerHTML = data[0].nombre;
        //document.getElementById("cliente-colaborador").innerHTML = data[0].clientecolaborador;
        
        //productos de la venta
        document.getElementById("cantidad").innerHTML = data[0].cantidad;
        document.getElementById("unidad").innerHTML = "PZA";
        document.getElementById("concepto").innerHTML = data[0].descripcion;
        document.getElementById("lote").innerHTML = data[0].lote;
        document.getElementById("serie").innerHTML = data[0].serie;
        //document.getElementById("costounitario").innerHTML = data[0].costounitario;
        //document.getElementById("total").innerHTML = String(data[0].costounitario * data[0].cantidad);
      
        
        //facturacion 
        let formapago;
        if(data[0].formapago == "1"){
          formapago = "CONTADO";
        }else{
          formapago = "CRÉDITO";
        }
        
        //document.getElementById("datosfacturacion").innerHTML = data[0].datosfacturacion ;
        //document.getElementById("formapago").innerHTML = formapago;

        //observaciones
        document.getElementById("observaciones").innerHTML = data[0].observaciones;



        
          
        document.getElementById("clienteocolaborador").innerHTML = data[0].clientecolaborador;
        document.getElementById("cliente").innerHTML = data[0].nombre;


        let departamento;
        if(data[0].departamento == "1"){
          departamento = "RRHH";
        }else{
          departamento = "VENTAS";
        }
        //firmas
        document.getElementById("solicita").innerHTML = data[0].solicita + " (" + departamento + ") "  + "<br> SOLICITA" ;
        document.getElementById("autoriza").innerHTML = data[0].autoriza + "<br> AUTORIZA" ;
        document.getElementById("firma-cliente").innerHTML = data[0].nombre + "<br> RECIBE" ;

        if(data[0].firmasolicita == "1"){
          document.getElementById("firmasolicita").setAttribute('src', "http://localhost:8000/"+data[0].firmausuariosolicita);
          document.getElementById("bttnFirmaSolicita").setAttribute('hidden', 'hidden');

        }
        if(data[0].firmaautoriza == "1"){
          document.getElementById("firmaautoriza").setAttribute('src', "http://localhost:8000/"+data[0].firmausuarioautoriza);
          document.getElementById("bttnFirmaAutoriza").setAttribute('hidden', 'hidden');
        }

      });
  }

  firmarSolicitaOrdenSalida(id) {
    console.log(id);
    this.ordenService.firmarSolicitaOrdenSalida(this.id).subscribe((data: Venta)=>{
      console.log(data);
      this.alerta("Firmado correctamente");
      this.getData();
    });
  }

  firmarAutorizaOrdenSalida(id) {
    console.log(id);
    this.ordenService.firmarAutorizaOrdenSalida(this.id).subscribe((data: Venta)=>{
      this.alerta("Firmado correctamente");
      this.getData();
    });
  }
  
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      //this.downloadLink.nativeElement.click();
      let imgWidth = 175;
      let imgHeight = 190;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 17, 10, imgWidth, imgHeight);
      window.open(pdf.output(), '_blank')
    });
  }

  alerta(msg){  
    swal.fire(msg);  
  }  


}
