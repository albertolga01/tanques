import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../venta/venta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { OrdenService } from '../orden.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Usuario } from '../../usuarios/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-salida',
  templateUrl: './create-salida.component.html',
  styleUrls: ['./create-salida.component.css']
})
export class CreateSalidaComponent implements OnInit {
  
  id: number;
  form: FormGroup;
  usuarios: Usuario[] = [];



  constructor(//public ventaService: VentaService,
    private route: ActivatedRoute,
    public ordenService: OrdenService,
    public usuariosService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      idventa:  new FormControl('', [ Validators.required ]),
      fecha:  new FormControl('', [ Validators.required ]),
      solicita:  new FormControl('', [ Validators.required ]),
      autoriza:  new FormControl('', [ Validators.required ]),
      serie:  new FormControl('', [ Validators.required ])
    });

    this.id = this.route.snapshot.params['idVenta'];

    //obtener todos los usuarios
    this.usuariosService.getAll().subscribe((data: Usuario[])=>{
      this.usuarios = data;
    })

  }
  
  get f(){
    return this.form.controls;
  }
 
  submit(){
    console.log(this.form.value);
    this.ordenService.createOrdenSalida(this.form.value).subscribe(res => {
      this.alerta('Orden de salida generada correctamente!');
         this.router.navigateByUrl('dashboard/venta/index');
    })
  }

  alerta(msg){  
    swal.fire(msg);  
  }  
}
