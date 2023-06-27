import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  
  constructor(
    public loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user:  new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required])
    });
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    this.loginService.login(this.form.value).subscribe(res => { 
         if(res){
          this.router.navigateByUrl('dashboard/inventario');
         }else{
          this.alerta("Usuario y/o contraseña incorrecto ");
         }
    })
  }

  alerta(msg){  
    swal.fire(msg);  
  }  
}
