import { Component, OnInit, Inject, ViewChild } from '@angular/core';
// Datos de paginador con orden by
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
// Pipe de fecha
import { DatePipe } from '@angular/common';
// Modelo de formulario
import { FormModificarFaltas } from '../../../libreria/models/personal-rrhh/formularios-rrhh'; 
import { EmpleadoFaltas, EmpleadoFaltasNoMock, tipoFaltaNoMock, TipoFalta } from '../../../libreria/models/empleados';
import { EmpleadoService } from '../../../libreria/servicios/empleado.service';
// Dialog que se abre
import { DialogFechaModificarComponent } from './dialog-fecha-modificar/dialog-fecha-modificar.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-dialog-modificar-faltas',
  templateUrl: './dialog-modificar-faltas.component.html',
  styleUrls: ['./dialog-modificar-faltas.component.css'],
  providers: [ EmpleadoService, DatePipe ]
})
export class DialogModificarFaltasComponent implements OnInit {

  // Table
  displayedColumns = ['fecha', 'tipoFalta'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;


  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  // Variables de datos falsos (Para dataSource)
  agentesFaltas: EmpleadoFaltas[];
  faltasAux;
  agenteFaltas = [];
  legajoData: number;

  // Dialog send
  dialogResult;
  sendDataModificar: FormModificarFaltas;

  constructor(
    // Dialog (Es un component dialog)
    public thisDialogRef: MatDialogRef<DialogModificarFaltasComponent>,
    // Informacion que recibe del formulario anterior
    @Inject(MAT_DIALOG_DATA) public data,
    // Datos Falsos
    private _EmpleadoService: EmpleadoService,
    // Pipe de Fecha
    private _datePipe: DatePipe,
    // Este dialogo abre otro dialog
    public dialog: MatDialog) {
      // Se guarda el dato del legajo recibido del anterior component
      this.legajoData = data.legajo;
      // Se reiben los agentes falsos
      this.agentesFaltas = this._EmpleadoService.getEmpleadosFaltas();
      // Se empieza a revisar los legajos de los empleados falsos
      for (let i in this.agentesFaltas) {
      if (this.agentesFaltas[i].legajo == this.legajoData)
        this.faltasAux = this.agentesFaltas[i].tipoFalta;
      }
      // Se trasnforma el tipo de fecha recibido a otro
      for (let e in this.faltasAux){
        this.agenteFaltas.push({tipoFalta: this.faltasAux[e].tipoFalta, fecha: this._datePipe.transform(new Date(this.faltasAux[e].fecha))});
      }
      this.dataSource = new MatTableDataSource(this.agenteFaltas);
    }
  
  ngOnInit(){
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
    value.legajo = this.legajoData;
    this.openDialog(value);
  }
  // Abre dialog
  openDialog(value) {
    const dialogRef = this.dialog.open(DialogFechaModificarComponent, {
      width: '600px',
      data: value
    });
  // Despues de cerrar dialog, te dice si se cancelo o se confirmo
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
}
