import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { VentaService } from '../../venta/venta.service';
import { OrdenService } from '../orden.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Venta } from '../../venta/venta';
import domToImage from 'dom-to-image';
import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';
//import mom from 'moment';
import swal from 'sweetalert2';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  @ViewChild('dataToExport', { static: false }) 
public dataToExport: ElementRef;

  id: number;
  idOrdenVenta: number;
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
    this.ordenService.findOrdenVenta(this.id).subscribe((data: Venta)=>{
      this.venta = data[0];
      console.log(data);
      document.getElementById("folio-orden").innerHTML = String(data[0].id);
      this.idOrdenVenta = data[0].id;
      document.getElementById("fecha").innerHTML = String(data[0].fecha).split("-").reverse().join("/");;
      document.getElementById("nombre").innerHTML = data[0].nombre;
      document.getElementById("cliente-colaborador").innerHTML = data[0].clientecolaborador;
      
      //productos de la venta
      document.getElementById("cantidad").innerHTML = data[0].cantidad;
      document.getElementById("unidad").innerHTML = "PZA";
      document.getElementById("concepto").innerHTML = data[0].descripcion;
      document.getElementById("costounitario").innerHTML = data[0].costounitario;
      document.getElementById("total").innerHTML = String(data[0].costounitario * data[0].cantidad);
    
      //totales
      document.getElementById("subtotal").innerHTML = String(data[0].costounitario * data[0].cantidad);
      document.getElementById("iva").innerHTML = String((data[0].costounitario * data[0].cantidad) * 0.16);
      document.getElementById("total-final").innerHTML = String(((data[0].costounitario * data[0].cantidad) * 1.16).toFixed());
      
      //facturacion 
      let formapago;
      if(data[0].formapago == "1"){
        formapago = "CONTADO";
      }else{
        formapago = "CRÉDITO";
      }
      document.getElementById("datosfacturacion").innerHTML = data[0].datosfacturacion ;
      document.getElementById("formapago").innerHTML = formapago;
      document.getElementById("plazo").innerHTML = data[0].plazo;

      //observaciones
      document.getElementById("observaciones").innerHTML = data[0].observaciones;

      let departamento;
      if(data[0].departamento == "1"){
        departamento = "RRHH";
      }else{
        departamento = "VENTAS";
      }

      //firmas
      document.getElementById("solicita").innerHTML = data[0].solicita + " (" + departamento + ") "  + "<br> SOLICITA" ;
      if(data[0].firmasolicita == "1"){
        document.getElementById("firmasolicita").setAttribute('src', "http://localhost:8000/"+data[0].firmausuariosolicita);
        document.getElementById("bttnFirmaSolicita").setAttribute('hidden', 'hidden');
      }
      
      document.getElementById("autoriza").innerHTML = data[0].autoriza + "<br> AUTORIZA" ;
      document.getElementById("firma-cliente").innerHTML = data[0].nombre + "<br> RECIBE" ;
      
      if(data[0].firmaautoriza == "1"){
        document.getElementById("firmaautoriza").setAttribute('src', "http://localhost:8000/"+data[0].firmausuarioautoriza);
        document.getElementById("bttnFirmaAutoriza").setAttribute('hidden', 'hidden');
      }


    });
  }

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  downloadImage(){ 
    html2canvas(this.screen.nativeElement).then(canvas => {
    //  this.downloadLink.nativeElement.click();
      let imgWidth = 175;
      let imgHeight = 250;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 17, 10, imgWidth, imgHeight);
      window.open(pdf.output(), '_blank');
      
    });
   
  }

  firmarSolicitaOrdenVenta(id) {
    console.log(id);
    this.ordenService.firmarSolicitaOrdenVenta(this.id).subscribe((data: Venta)=>{
      console.log(data);
      this.alerta("Firmado correctamente");
      this.getData();
    });
  }

  firmarAutorizaOrdenVenta(id) {
    console.log(id);
    this.ordenService.firmarAutorizaOrdenVenta(this.id).subscribe((data: Venta)=>{
      this.alerta("Firmado correctamente");
      this.getData();
    });
  }

  alerta(msg){  
    swal.fire(msg);  
  }  


  
}
