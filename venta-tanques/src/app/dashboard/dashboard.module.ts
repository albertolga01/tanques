import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component'; 



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule, 
  ]
})
export class DashboardModule { }
