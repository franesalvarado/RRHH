import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../models/empleados';


@Component({
  selector: 'app-dialog-list-personal-rrhh',
  templateUrl: './dialog-list-personal-rrhh.component.html',
  styleUrls: ['./dialog-list-personal-rrhh.component.css']
})
export class DialogListPersonalRrhhComponent implements OnInit {
  dataDialog;
  
  constructor(public thisDialogRef: MatDialogRef<DialogListPersonalRrhhComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Empleado) { }

  ngOnInit() {
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
