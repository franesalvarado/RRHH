import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../../libreria/models/empleados';
import { TipoFalta, TipoPresente } from '../../../libreria/models/director/formulario-director';

@Component({
  selector: 'app-dialog-table',
  templateUrl: './dialog-table.component.html',
  styleUrls: ['./dialog-table.component.css']
})
export class DialogTableComponent implements OnInit {
  displayDate = new Date();
  dataDialog;
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
  // En caso de clickear aceptar
  onCloseConfirm() {
    this.thisDialogRef.close('confirm');
    // Si se almacena una falta, se guarda este tipo de formulario
    if (this.selected == "Ausencia sin aviso" || this.selected == "Ausencia con aviso"){
      this.tipoFalta = {
        falta: this.selected,
        fecha: this.displayDate,
        detalles: this.detalles
      }
    console.log(this.tipoFalta);
    // En caso de ser un presente, este tipo
    }else if (this.selected == "Presente" || this.selected == "Presente con llegada tarde"){
      this.tipoPresente = {
        falta: this.selected,
        fecha: this.displayDate
      }
    console.log(this.tipoPresente);
    }
  }
  // En caso de ser cancelado, este
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}