import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';


import { IndexComponentCompras } from './index/index.component';
import { CreateComponentCompras } from './create/create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponentCompras,
    CreateComponentCompras],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComprasModule { }
