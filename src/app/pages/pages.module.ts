import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {  RouterOutlet } from '@angular/router';
import { PagesRoutingModule } from './pages.routes.module';
import { SharedModule } from '../@shared/shared.module';







@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterOutlet
  ]
})
export class PagesModule { }
