import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../servicios/usuarios-list.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-personal-rrhh',
  templateUrl: './list-personal-rrhh.component.html',
  styleUrls: ['./list-personal-rrhh.component.css'],
  providers: [ UsuarioListService ]
})
export class ListPersonalRrhhComponent implements OnInit {
  displayedColumns = ['nombre', 'usuario', 'legajo', 'tipoUsuario'];
  dataSource;
  usuarios;
  dialogResult;

  constructor(
    private _UsuarioList: UsuarioListService) { }

  ngOnInit() {
    this.usuarios = this._UsuarioList.getPersonalRRHH();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }

}
