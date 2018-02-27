import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../models/empleados';

@Component({
  selector: 'app-dialog-list-directores',
  templateUrl: './dialog-list-directores.component.html',
  styleUrls: ['./dialog-list-directores.component.css']
})
export class DialogListDirectoresComponent implements OnInit {
  dataDialog;
  selected:string;
  selectedPrivilegio:string;
  constructor(public thisDialogRef: MatDialogRef<DialogListDirectoresComponent>, 
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.selected = this.data.area;
    this.selectedPrivilegio = "Director/a";
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
