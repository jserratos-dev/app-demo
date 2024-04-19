import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../../../interfaces/usuarios/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'phone', 'username', 'email'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;



 
  constructor(private usuariosService: UsuariosService, private router: Router) {  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.usuariosService.obtenerUsuarios().subscribe((usuarios) => {
      console.log(usuarios);
      this.dataSource.data = usuarios; 

    });
  }
  
  verDetalle(id:number) {
    this.router.navigate(['/usuarios/detalle', id]);
  }
}
