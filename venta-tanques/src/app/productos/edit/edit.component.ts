import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Producto } from '../producto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentProductos implements OnInit {

  id: number;
  producto: Producto;
  form: FormGroup;

  constructor(
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idProducto'];
    this.productoService.find(this.id).subscribe((data: Producto)=>{
      this.producto = data;
    });

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
    this.productoService.update(this.id, this.form.value).subscribe(res => {
         console.log('Producto actualizada correctamente!');
         this.router.navigateByUrl('dashboard/productos/index');
    })
  }

}
