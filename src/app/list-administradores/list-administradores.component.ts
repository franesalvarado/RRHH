import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../servicios/usuarios-list.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-administradores',
  templateUrl: './list-administradores.component.html',
  styleUrls: ['./list-administradores.component.css'],
  providers: [ UsuarioListService ]
})
export class ListAdministradoresComponent implements OnInit {
  displayedColumns = ['nombre', 'usuario', 'legajo', 'tipoUsuario'];
  dataSource;
  usuarios;
  dialogResult;
  constructor(
    private _UsuarioList: UsuarioListService
  ) { }

  ngOnInit() {
    this.usuarios = this._UsuarioList.getUsuariosAdmin();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }

}
