import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../../libreria/models/empleados';


@Component({
  selector: 'app-dialog-list-personal-rrhh',
  templateUrl: './dialog-list-personal-rrhh.component.html',
  styleUrls: ['./dialog-list-personal-rrhh.component.css']
})
export class DialogListPersonalRrhhComponent implements OnInit {
  dataDialog;
  selectedDireccion:string;
  selectedPrivilegio:string;
  
  constructor(public thisDialogRef: MatDialogRef<DialogListPersonalRrhhComponent>, 
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.selectedDireccion = "Direccion General de Recursos Humanos";
    this.selectedPrivilegio = this.data.funcion;
  }

  onCloseConfirm() {
    // this.dataDialog.value = true;
    // this.dataDialog.tipoFalta = this.myControl.value;
    this.thisDialogRef.close('confirm');
    console.log(this.dataDialog);
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }


}
