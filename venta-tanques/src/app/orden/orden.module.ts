import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenRoutingModule } from './orden-routing.module';
import { CreateVentaComponent } from './create-venta/create-venta.component';
import { CreateSalidaComponent } from './create-salida/create-salida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateVentaComponent, CreateSalidaComponent],
  imports: [
    CommonModule,
    OrdenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdenModule { }
