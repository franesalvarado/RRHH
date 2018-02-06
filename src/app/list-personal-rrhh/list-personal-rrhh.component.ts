import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../servicios/usuarios-list.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { MatDialog } from '@angular/material';
import { DialogListPersonalRrhhComponent } from './dialog-list-personal-rrhh/dialog-list-personal-rrhh.component';


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
    public dialog: MatDialog,
    private _UsuarioList: UsuarioListService) { }

  ngOnInit() {
    this.usuarios = this._UsuarioList.getPersonalRRHH();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }
selectRow(value) {
    this.openDialog(value);
    console.log(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogListPersonalRrhhComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  
}
}
