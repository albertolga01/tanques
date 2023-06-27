import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.css']
})
export class CreateUsuariosComponent implements OnInit {

  form: FormGroup;
  
  private apiURL = "http://localhost:8000/api/usuarios/";
  
  @ViewChild('fileInput') fileInput;
  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(
    public usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
      firma: new FormControl('', [ Validators.required ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    /*console.log(this.form.value);
    this.usuariosService.create(this.form.value).subscribe(res => {
      this.alerta('Usuario agregado correctamente!');
         this.router.navigateByUrl('dashboard/usuarios/index');
    })*/
    
  const fileBrowser = this.fileInput.nativeElement;
  if (fileBrowser.files && fileBrowser.files[0]) {
    const formData = new FormData();
    formData.append('name', this.name.nativeElement.value);
    formData.append('email', this.email.nativeElement.value);
    formData.append('password', this.password.nativeElement.value);
    formData.append('firma', fileBrowser.files[0]);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.apiURL, true);
    xhr.onload =  ()  => {
      var resp = JSON.parse(xhr.response);
      //console.log(resp);
      if(resp.success == true){
        this.alerta('Usuario agregado correctamente!');
        this.router.navigateByUrl('dashboard/usuarios/index');
       
      }else{
        this.alerta('Error al guardar!');
      }
       
      
    };
    xhr.send(formData);
  }
  }
 

  alerta(msg){  
    swal.fire(msg);  
  }  


}
