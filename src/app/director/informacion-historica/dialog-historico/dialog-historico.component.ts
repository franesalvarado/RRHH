import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmpleadoService } from '../../../libreria/servicios/empleado.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { EmpleadoFaltas } from '../../../libreria/models/empleados';
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
  // Variable de columnas
  displayedColumns = ['fecha', 'tipoFalta'];
  dataSource;
  // Recibe las faltas de TODOS los empleados
  public agentesFaltas: EmpleadoFaltas[];
  // Auxiliar que guarda las faltas
  public presenteAux;
  // Se utiliza para almacenar las faltas del empleado seleccionado en el cuadro anterior (Filtrado por legajo)
  public agenteFaltas = [];
  // Legajo del agente elegido en el componente anterior
  public legajoData: number;
  // Ordenar por fecha.
  @ViewChild(MatSort) sort: MatSort;

  constructor(public thisDialogRef: MatDialogRef<DialogHistoricoComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _EmpleadoService: EmpleadoService,
              private _datePipe: DatePipe) {
    // De data viene los datos del agente elegido, solo se elije el legajo            
    this.legajoData = data.legajo;
    // Se pide las faltas de TODOS los agentes.
    this.agentesFaltas = this._EmpleadoService.getEmpleadosFaltas();
    // Se busca el agente que se selecciono
    for (let i in this.agentesFaltas) {
      if (this.agentesFaltas[i].legajo == this.legajoData)
        this.presenteAux = this.agentesFaltas[i].presente;
    }
    // Se transforma las fechas de string a date.
    for (let e in this.presenteAux){
      this.agenteFaltas.push({tipoFalta: this.presenteAux[e].tipoFalta, fecha: this._datePipe.transform(new Date(this.presenteAux[e].fecha))});
    }
    // Se visualiza en la tabla
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


