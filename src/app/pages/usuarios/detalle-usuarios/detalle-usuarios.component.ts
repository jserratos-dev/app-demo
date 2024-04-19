import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { User } from '../../../interfaces/usuarios/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css'
})
export class DetalleUsuariosComponent implements OnInit {

  usuario!: User;

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute) {  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
     this.obtenerUsuarioPorId(params['id'] ); 
    });
  }
  

  obtenerUsuarioPorId(usuarioId: number): void {
    this.usuariosService.obtenerUsuarioPorId(usuarioId).subscribe(usuario => {
      this.usuario = usuario;
    }
    );
  }

}
