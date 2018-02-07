import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../models/empleados';

@Component({
  selector: 'app-dialog-administradores',
  templateUrl: './dialog-administradores.component.html',
  styleUrls: ['./dialog-administradores.component.css']
})
export class DialogAdministradoresComponent implements OnInit {
  dataDialog;

  constructor(public thisDialogRef: MatDialogRef<DialogAdministradoresComponent>, 
              @Inject(MAT_DIALOG_DATA) public data) { }
  ngOnInit() {
    console.log(this.data);
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
