import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../models/empleados';

@Component({
  selector: 'app-dialog-alertas',
  templateUrl: './dialog-alertas.component.html',
  styleUrls: ['./dialog-alertas.component.css']
})
export class DialogAlertasComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogAlertasComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Empleado) { }

  ngOnInit() {
  }
  
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
