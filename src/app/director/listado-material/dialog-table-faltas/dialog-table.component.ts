import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../../libreria/models/empleados';
import { TipoFalta, TipoPresente } from '../../../libreria/models/director/formulario-director';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-table',
  templateUrl: './dialog-table.component.html',
  styleUrls: ['./dialog-table.component.css']
})
export class DialogTableComponent implements OnInit {
  displayDate = new Date();
  myControl: FormControl = new FormControl();
  dataDialog;
  filteredOptions: Observable<string[]>;
  selected = "Ausencia sin aviso";
  selectedConfirm = "Presente";
  detalles = "";
  tipoFalta: TipoFalta;
  tipoPresente: TipoPresente;

  constructor(public thisDialogRef: MatDialogRef<DialogTableComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Empleado) 
  {}

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('confirm');
    if (this.selected == "Ausencia sin aviso" || this.selected == "Ausencia con aviso"){
      this.tipoFalta = {
        falta: this.selected,
        fecha: this.displayDate,
        detalles: this.detalles
      }
    console.log(this.tipoFalta);
    }else if (this.selected == "Presente" || this.selected == "Presente con llegada tarde"){
      this.tipoPresente = {
        falta: this.selected,
        fecha: this.displayDate
      }
    console.log(this.tipoPresente);
    }
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}