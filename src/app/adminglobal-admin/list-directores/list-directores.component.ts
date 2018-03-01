import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../servicios/usuarios-list.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { MatDialog } from '@angular/material';
import { DialogListDirectoresComponent } from './dialog-list-directores/dialog-list-directores.component';


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
    public dialog: MatDialog,
    private _UsuarioList: UsuarioListService
  ) { }

  ngOnInit() {
    this.usuarios = this._UsuarioList.getDirectores();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }

  selectRow(value) {
    this.openDialog(value);
    console.log(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogListDirectoresComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
}
