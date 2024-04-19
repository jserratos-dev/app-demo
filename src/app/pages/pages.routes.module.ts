import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AppComponent } from '../app.component';

const paginasRutas: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
            { path: '**', redirectTo: '/usuarios', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(paginasRutas)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
