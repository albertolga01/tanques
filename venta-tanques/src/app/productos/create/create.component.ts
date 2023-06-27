import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentProductos implements OnInit {

  form: FormGroup;

  constructor(
    public productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      producto:  new FormControl('', [ Validators.required ]),
      capacidad: new FormControl('', [ Validators.required ]),
      descripcion: new FormControl('', [ Validators.required ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.productoService.create(this.form.value).subscribe(res => {
      this.alerta('Producto agregado correctamente!');
         this.router.navigateByUrl('dashboard/productos/index');
    })
  }

  alerta(msg){  
    swal.fire(msg);  
  }  

}
