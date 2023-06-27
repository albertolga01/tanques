import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VentaModule } from './venta/venta.module';
import { ProductosModule } from './productos/productos.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponentCompras } from './compras/index/index.component';
import { CreateComponentCompras } from './compras/create/create.component';
import { IndexComponentInventario } from './inventario/index/index.component';
import { VentaComponent } from './orden/venta/venta.component';
import { SalidaComponent } from './orden/salida/salida.component';
import { IndexUsuariosComponent } from './usuarios/index-usuarios/index-usuarios.component';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { EditUsuariosComponent } from './usuarios/edit-usuarios/edit-usuarios.component';

import { CreateVentaComponent } from './orden/create-venta/create-venta.component';
import { CreateSalidaComponent } from './orden/create-salida/create-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    IndexComponentCompras,
    CreateComponentCompras,
    IndexComponentInventario,
    VentaComponent,
    SalidaComponent,
    IndexUsuariosComponent,
    CreateUsuariosComponent,
    EditUsuariosComponent,
    CreateVentaComponent,
    CreateSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VentaModule,
    ProductosModule,
    HttpClientModule,
    NgbModule,   
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
