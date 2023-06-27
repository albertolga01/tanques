import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Venta } from '../venta';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  venta: Venta;
  form: FormGroup;

  constructor(
    public ventaService: VentaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['idVenta'];
    this.ventaService.find(this.id).subscribe((data: Venta)=>{
      this.venta = data;
    });

    this.form = new FormGroup({
      fecha:  new FormControl('', [ Validators.required, Validators.pattern('((0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4})|[0-9]{4}|(0[1-9]|1[012]).[0-9]{4}') ]),
      almacen: new FormControl('', [ Validators.required ]),
      destino: new FormControl('', [ Validators.required ]),
      notaventa: new FormControl('', [ Validators.required ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.ventaService.update(this.id, this.form.value).subscribe(res => {
        this.alerta('Venta actualizada correctamente!');
         this.router.navigateByUrl('dashboard/venta/index');
    })
  }

  alerta(msg){  
    swal.fire(msg);  
  }  
  

}
