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
  // Tipos de tablas
  dataSource;
  dataSourcePresente = [];
  dataSourceAusente = [];
  dataSourceART = [];
  dataSourceMedico = [];
  dataSourceAnual = [];
  // Recibe las faltas de TODOS los empleados
  public agentesFaltas: EmpleadoFaltas[];
  // Auxiliar que guarda las faltas
  public presenteAux;
  public ausenteAux;
  public licenciaMedicaAux;
  public licenciaARTAux;
  public licenciaAnualAux;
  // Se utiliza para licenciaMedica, LicenciaART y licencia anual, uso exclusivo para el ciclo for  
  public fechaAux;
  // Se utiliza para almacenar las faltas del empleado seleccionado en el cuadro anterior (Filtrado por legajo)
  public agenteFaltas = [];
  // Legajo del agente elegido en el componente anterior
  public legajoData: number;
  // Ordenar por fecha.
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }
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
      // Se separa por el distinto contenido de cada uno y distintas cantidades.
        this.presenteAux = this.agentesFaltas[i].presente;
        this.ausenteAux = this.agentesFaltas[i].ausente;
        this.licenciaAnualAux = this.agentesFaltas[i].licenciaAnual;
        this.licenciaARTAux = this.agentesFaltas[i].licenciaART;
        this.licenciaMedicaAux = this.agentesFaltas[i].licenciaMedica;
    }

    // Inicio de cargas de Presente
    for (let e in this.presenteAux){
      this.agenteFaltas.push({
          tipoFalta: this.presenteAux[e].falta, 
          fecha: this._datePipe.transform(new Date(this.presenteAux[e].fecha))
        });
      this.dataSourcePresente.push({
          tipoFalta: this.presenteAux[e].falta, 
          fecha: this._datePipe.transform(new Date(this.presenteAux[e].fecha))
        });
    };
    // Fin de cargas de presencias
    // Inicio de cargas de faltas
    for (let e in this.ausenteAux){
      this.agenteFaltas.push({
          tipoFalta: this.ausenteAux[e].falta, 
          fecha: this._datePipe.transform(new Date(this.ausenteAux[e].fecha))
        });
      this.dataSourceAusente.push({
          tipoFalta: this.ausenteAux[e].falta, 
          fecha: this._datePipe.transform(new Date(this.ausenteAux[e].fecha)),
          detalles: this.ausenteAux[e].detalles
        });
    };
    // Fin de carga de ausencias
    // Inicio de carga de LicenciaAnual
    for (let e in this.licenciaAnualAux){
      this.fechaAux = this.licenciaAnualAux[e].fecha;
      for (let i in this.fechaAux){
        this.agenteFaltas.push({
            tipoFalta: this.licenciaAnualAux[e].falta, 
            fecha: this._datePipe.transform(new Date(this.fechaAux[i]))
          });
      };
      this.dataSourceAnual.push({
          tipoFalta: this.licenciaAnualAux[e].falta,
          fecha: this.licenciaAnualAux[e].fecha,
          detalles: this.licenciaAnualAux[e].detalles
        });
    };
    //Fin de cargas de licencias anuales
    //Inicio de carga de Licencia por ART
    for (let e in this.licenciaARTAux){
      this.fechaAux = this.licenciaARTAux[e].fecha
      for (let i in this.fechaAux){
        this.agenteFaltas.push({
            tipoFalta: this.licenciaARTAux[e].falta, 
            fecha: this._datePipe.transform(new Date(this.fechaAux[i]))
          });
      };
      this.dataSourceART.push({
        falta: this.licenciaARTAux[e].falta,
        fecha: this.licenciaARTAux[e].fecha,
        fechaControl: this.licenciaARTAux[e].fechaControl,
        nroSiniestro: this.licenciaARTAux[e].nroSiniestro,
        detalles: this.licenciaARTAux[e].detalles
      });
    };
    // Fin de carga de licencia por ART
    for (let e in this.licenciaMedicaAux){
      this.fechaAux = this.licenciaMedicaAux[e].fecha;
      for (let i in this.fechaAux){
        this.agenteFaltas.push(
          {
            tipoFalta: this.licenciaMedicaAux[e].falta, 
            fecha: this._datePipe.transform(new Date(this.fechaAux[i]))
          });
      }
      this.dataSourceMedico.push({
          falta: this.licenciaMedicaAux[e].falta,
          tipoLicencia: this.licenciaMedicaAux[e].tipoLicencia,
          diagnostico: this.licenciaMedicaAux[e].diagnostico,
          fecha: this.licenciaMedicaAux[e].fecha,
          detalles: this.licenciaMedicaAux[e].detalles
        });
    };
    // Fin de carga de licencia medica

    // Se visualiza en la tablas
    this.dataSource = new MatTableDataSource(this.agenteFaltas);
  }

  /*
  DESHABILITADO POR TABS
  // El evento es llamado cuando se cambia de tab
  onLinkClick(event){
    // Si esta en el tab 0 (Todo), llama a la funcion para que filtre NADA
    if (event.index == 0){
      this.applyFilter("");
    }
    // Si esta en el tab 1 (Presente), llama a la funcion para que filtre Presente
    if (event.index == 1){
      // Primero filtra nada para eliminar filtros anteriores.
      this.applyFilter("");
      this.applyFilter("Presente");
    }
    // Si esta en el tab 2 (Ausente), llama a la funcion para que filtre Ausente
    if (event.index == 2){
      // Primero filtra nada para eliminar filtros anteriores.
      this.applyFilter("");
      this.applyFilter("Ausente");
    }
    // Si esta en el tab 3 (Licencia Medica), llama a la funcion para que filtre Licencia Medica
    if (event.index == 3){
      // Primero filtra nada para eliminar filtros anteriores.
      this.applyFilter("");
      this.applyFilter("Licencia Medica");
    }
    // Si esta en el tab 4 (Licencia Anual Extraordinaria), llama a la funcion para que filtre Licencia Anual Extraordinaria
    if (event.index == 4){
      // Primero filtra nada para eliminar filtros anteriores.
      this.applyFilter("");
      this.applyFilter("Licencia Anual Extraordinaria");
    }
    // Si esta en el tab 5 (Licencia por ART), llama a la funcion para que filtre Licencia por ART
    if (event.index == 5){
      // Primero filtra nada para eliminar filtros anteriores.
      this.applyFilter("");
      this.applyFilter("Licencia por ART");
    }
  }
  // Funcion que se encarga del filtrado de la tabla.
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 */

  // Cerrar dialogo
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  // Orden de fechas
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}


