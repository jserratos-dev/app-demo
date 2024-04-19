import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';



const usuariosRoutes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
        {  path: '', component: ListaUsuariosComponent },
        {  path: 'detalle/:id', component: DetalleUsuariosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutesModule { }