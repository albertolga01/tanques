import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-index-usuarios',
  templateUrl: './index-usuarios.component.html',
  styleUrls: ['./index-usuarios.component.css']
})
export class IndexUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
 
  constructor(public usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((data: Usuario[])=>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }

}
