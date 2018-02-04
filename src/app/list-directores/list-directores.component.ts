import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../servicios/usuarios-list.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-directores',
  templateUrl: './list-directores.component.html',
  styleUrls: ['./list-directores.component.css'],
  providers: [ UsuarioListService ]
})
export class ListDirectoresComponent implements OnInit {
  displayedColumns = ['nombre', 'usuario', 'legajo', 'area'];
  dataSource;
  usuarios;
  dialogResult;
  constructor(
    private _UsuarioList: UsuarioListService
  ) { }

  ngOnInit() {
    this.usuarios = this._UsuarioList.getDirectores();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }
}
