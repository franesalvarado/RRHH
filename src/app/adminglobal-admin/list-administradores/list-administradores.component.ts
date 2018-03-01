import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../servicios/usuarios-list.service';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { MatDialog } from '@angular/material';
import { DialogAdministradoresComponent } from './dialog-administradores/dialog-administradores.component';

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
    public dialog: MatDialog,
    private _UsuarioList: UsuarioListService
  ) { }

  ngOnInit() {
    this.usuarios = this._UsuarioList.getUsuariosAdmin();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }
  
  selectRow(value) {
    this.openDialog(value);
    console.log(value);
  }


  openDialog(value) {
    const dialogRef = this.dialog.open(DialogAdministradoresComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });

}
}
