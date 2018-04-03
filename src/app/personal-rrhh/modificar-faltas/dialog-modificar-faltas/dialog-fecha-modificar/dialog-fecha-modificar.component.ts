import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// Modelo de formulario
import { FormModificarFaltas } from '../../../../libreria/models/personal-rrhh/formularios-rrhh'; 

@Component({
  selector: 'app-dialog-fecha-modificar',
  templateUrl: './dialog-fecha-modificar.component.html',
  styleUrls: ['./dialog-fecha-modificar.component.css']
})
export class DialogFechaModificarComponent implements OnInit {

  formModificarFaltas = new FormModificarFaltas();

  constructor(public thisDialogRef: MatDialogRef<DialogFechaModificarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.formModificarFaltas.oldTipoFalta = this.data.tipoFalta;
      this.formModificarFaltas.tipoFalta = this.data.tipoFalta;
      this.formModificarFaltas.legajo = this.data.legajo;
      this.formModificarFaltas.fecha = this.data.fecha;
      console.log(this.data.tipoFalta);
    }

  ngOnInit() {
  }

  onCloseConfirm() {
    console.log(this.formModificarFaltas);
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
