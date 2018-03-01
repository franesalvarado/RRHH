import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmpleadoService } from '../../../libreria/servicios/empleado.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { EmpleadoFaltas, EmpleadoFaltasNoMock, tipoFaltaNoMock, TipoFalta } from '../../../libreria/models/empleados';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dialog-historico',
  templateUrl: './dialog-historico.component.html',
  styleUrls: ['./dialog-historico.component.css'],
  providers: [ EmpleadoService, DatePipe ]
})
export class DialogHistoricoComponent implements OnInit {
  displayedColumns = ['fecha', 'tipoFalta'];
  dataSource;
  public agentesFaltas: EmpleadoFaltas[];
  public faltasAux;
  public agenteFaltas = [];
  public legajoData: number;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public thisDialogRef: MatDialogRef<DialogHistoricoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _EmpleadoService: EmpleadoService,
    private _datePipe: DatePipe){
    
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
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}


