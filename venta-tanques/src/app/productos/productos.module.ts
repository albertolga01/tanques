import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';


import { IndexComponentProductos } from './index/index.component';
import { CreateComponentProductos } from './create/create.component';
import { EditComponentProductos } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    IndexComponentProductos,
    CreateComponentProductos,
    EditComponentProductos],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
