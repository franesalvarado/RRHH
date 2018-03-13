import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-fecha-modificar',
  templateUrl: './dialog-fecha-modificar.component.html',
  styleUrls: ['./dialog-fecha-modificar.component.css']
})
export class DialogFechaModificarComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogFechaModificarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
