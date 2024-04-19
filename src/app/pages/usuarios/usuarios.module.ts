import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared.module';


import { UsuariosComponent } from './usuarios.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsuariosRoutesModule } from './usuarios.routes.modules';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';






@NgModule({
  declarations: [
    UsuariosComponent,
    ListaUsuariosComponent,
    DetalleUsuariosComponent,
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterOutlet,
    UsuariosRoutesModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule
    
  ]
})
export class UsuariosModule { }
