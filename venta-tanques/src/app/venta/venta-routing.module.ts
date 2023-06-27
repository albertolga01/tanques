import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'venta', redirectTo: 'venta/index', pathMatch: 'full'},
  { path: 'venta/index', component: IndexComponent },
  { path: 'venta/create', component: CreateComponent },
  { path: 'venta/edit/:idVenta', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
