import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/usuarios/user';

const url = environment.wsUrl ;

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${url}users`);
  }

  obtenerUsuarioPorId(usuarioId: number): Observable<User> {
    return this.http.get<User[]>(`${url}users`).pipe(
      map((usuarios: User[]) => {
        const usuario = usuarios.find(usuario => usuario.id == usuarioId);
        if (!usuario) {
          throw new Error(`Usuario con ID ${usuarioId} no encontrado.`);
        }
        return usuario;
      })
    );
  }
  
}
