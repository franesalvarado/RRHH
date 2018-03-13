import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmpleadoService } from '../../../libreria/servicios/empleado.service';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { EmpleadoFaltas, EmpleadoFaltasNoMock, tipoFaltaNoMock, TipoFalta } from '../../../libreria/models/empleados';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DatePipe } from '@angular/common';
import { DialogFechaModificarComponent } from './dialog-fecha-modificar/dialog-fecha-modificar.component';

@Component({
  selector: 'app-dialog-modificar-faltas',
  templateUrl: './dialog-modificar-faltas.component.html',
  styleUrls: ['./dialog-modificar-faltas.component.css'],
  providers: [ EmpleadoService, DatePipe ]
})
export class DialogModificarFaltasComponent implements OnInit {

  displayedColumns = ['fecha', 'tipoFalta'];
  dataSource;
  public agentesFaltas: EmpleadoFaltas[];
  public faltasAux;
  public agenteFaltas = [];
  public legajoData: number;
  dialogResult;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public thisDialogRef: MatDialogRef<DialogModificarFaltasComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _EmpleadoService: EmpleadoService,
    private _datePipe: DatePipe,
    public dialog: MatDialog) {
      this.legajoData = data.legajo;
      this.agentesFaltas = this._EmpleadoService.getEmpleadosFaltas();
      for (let i in this.agentesFaltas) {
      if (this.agentesFaltas[i].legajo == this.legajoData)
        this.faltasAux = this.agentesFaltas[i].tipoFalta;
      }
      for (let e in this.faltasAux){
        this.agenteFaltas.push({tipoFalta: this.faltasAux[e].tipoFalta, fecha: this._datePipe.transform(new Date(this.faltasAux[e].fecha))});
      }
      this.dataSource = new MatTableDataSource(this.agenteFaltas);
    }
  
  ngOnInit() {
  }

  // Ordenar de menor a menor (Fechas)
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // Cuando cancelas el dialogo
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  // Cuando clickeas una fila...
  selectRow(value) {
    this.openDialog(value);
    console.log(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogFechaModificarComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
}
