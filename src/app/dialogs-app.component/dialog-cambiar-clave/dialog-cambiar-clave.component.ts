import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-cambiar-clave',
  templateUrl: './dialog-cambiar-clave.component.html',
  styleUrls: ['./dialog-cambiar-clave.component.css']
})
export class DialogCambiarClaveComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogCambiarClaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  onCloseConfirm(){
    alert("Puto el que lee");
  }

}
