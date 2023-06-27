import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CreateComponent } from './venta/create/create.component';
import { IndexComponent } from './venta/index/index.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './venta/edit/edit.component';

import { CreateComponentProductos } from './productos/create/create.component';
import { IndexComponentProductos } from './productos/index/index.component';
import { EditComponentProductos } from './productos/edit/edit.component';

import { VentaComponent } from './orden/venta/venta.component';
import { CreateVentaComponent } from './orden/create-venta/create-venta.component';
import { SalidaComponent } from './orden/salida/salida.component';
import { CreateSalidaComponent } from './orden/create-salida/create-salida.component';


import { CreateComponentCompras } from './compras/create/create.component';
import { IndexComponentCompras } from './compras/index/index.component';


import { IndexComponentInventario} from './inventario/index/index.component';
import { IndexUsuariosComponent} from './usuarios/index-usuarios/index-usuarios.component';
import { CreateUsuariosComponent} from './usuarios/create-usuarios/create-usuarios.component';



const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      { path: 'nuevaVenta', component: CreateComponent },
      { path: 'nuevoProducto', component: CreateComponentProductos },
      { path: 'nuevaCompra', component: CreateComponentCompras },
      
      { path: 'historialVentas', component: IndexComponent},
      { path: 'venta/edit/:idVenta', component: EditComponent },
      { path: 'venta/create', component: CreateComponent },
      { path: 'venta/index', component: IndexComponent },
      { path: 'ordenVenta/venta/:idVenta', component: VentaComponent },
      { path: 'createOrdenVenta/venta/:idVenta', component: CreateVentaComponent },
      { path: 'ordenSalida/salida/:idVenta', component: SalidaComponent },
      { path: 'createOrdenSalida/salida/:idVenta', component: CreateSalidaComponent },

      { path: 'productos/edit/:idProducto', component: EditComponentProductos },
      { path: 'productos', component: IndexComponentProductos },
      { path: 'productos/create', component: CreateComponentProductos },
      { path: 'productos/index', component: IndexComponentProductos },

      { path: 'compras', component: IndexComponentCompras},
      { path: 'compras/create', component: CreateComponentCompras},
      { path: 'compras/index', component: IndexComponentCompras},

      { path: 'inventario', component: IndexComponentInventario},
      { path: 'inventario/index', component: IndexComponentInventario},

      { path: 'usuarios', component: IndexUsuariosComponent},
      { path: 'usuarios/index', component: IndexUsuariosComponent},
      { path: 'usuarios/create', component: CreateUsuariosComponent },
    ]
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: AppComponent
  }, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
