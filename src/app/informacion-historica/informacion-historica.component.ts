import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { DialogHistoricoComponent } from '../dialog-historico/dialog-historico.component';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-informacion-historica',
  templateUrl: './informacion-historica.component.html',
  styleUrls: ['./informacion-historica.component.css'],
  providers: [ EmpleadoService ]
})
export class InformacionHistoricaComponent implements OnInit {

  dialogResult;

  displayedColumns = ['position', 'name', 'legajo', 'tipoContrato'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private _empleadoService: EmpleadoService
  ) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectRow(value) {
    this.openDialog(value);
    console.log(value);
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(DialogHistoricoComponent, {
      width: '600px',
      data: value
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ` + result);
      this.dialogResult = result;
    });
  }
}





/////////////////////////////////////////////////////

export interface Element {
  name: string;
  position: number;
  legajo: number;
  tipoContrato: string;
  cantFaltasMensual: number;
  cantFaltasTotal: number;
  cantRestVacaciones: number;
}


const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Pablo', legajo: 51628, tipoContrato: 'Coordinado',
  cantFaltasMensual: 2, cantFaltasTotal: 2, cantRestVacaciones: 7},
  {position: 2, name: 'Luis', legajo: 51629, tipoContrato: 'Coordinado',
  cantFaltasMensual: 1, cantFaltasTotal: 8, cantRestVacaciones: 0},
  {position: 3, name: 'Oscar', legajo: 51635, tipoContrato: 'Coordinado',
  cantFaltasMensual: 0, cantFaltasTotal: 6, cantRestVacaciones: 14},
  {position: 4, name: 'Francisco', legajo: 81621, tipoContrato: 'Becado',
  cantFaltasMensual: 3, cantFaltasTotal: 10, cantRestVacaciones: 14},
  {position: 5, name: 'Juan', legajo: 50215, tipoContrato: 'Coordinado',
  cantFaltasMensual: 7, cantFaltasTotal: 7, cantRestVacaciones: 21},
  {position: 6, name: 'Estela', legajo: 50012, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 4, cantFaltasTotal: 4, cantRestVacaciones: 7},
  {position: 7, name: 'Braian', legajo: 80014, tipoContrato: 'Becado',
  cantFaltasMensual: 0, cantFaltasTotal: 0, cantRestVacaciones: 0},
  {position: 8, name: 'Alejandro', legajo: 52613, tipoContrato: 'Coordinado',
  cantFaltasMensual: 1, cantFaltasTotal: 10, cantRestVacaciones: 14},
  {position: 9, name: 'Damian', legajo: 54125, tipoContrato: 'Becado',
  cantFaltasMensual: 9, cantFaltasTotal: 20, cantRestVacaciones: 0},
  {position: 10, name: 'Gisela', legajo: 59125, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 8, cantFaltasTotal: 17, cantRestVacaciones: 21},
  {position: 11, name: 'Daniela', legajo: 84268, tipoContrato: 'Planta Permanente',
  cantFaltasMensual: 4, cantFaltasTotal: 9, cantRestVacaciones: 21},
  {position: 12, name: 'Carolina', legajo: 62147, tipoContrato: 'Becado',
  cantFaltasMensual: 0, cantFaltasTotal: 3, cantRestVacaciones: 28}];
