import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-fecha-modificar',
  templateUrl: './dialog-fecha-modificar.component.html',
  styleUrls: ['./dialog-fecha-modificar.component.css']
})
export class DialogFechaModificarComponent implements OnInit {

  selectedConfirm:string;

  constructor(public thisDialogRef: MatDialogRef<DialogFechaModificarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.selectedConfirm = this.data.tipoFalta;
      console.log(this.data.tipoFalta);
    }

  ngOnInit() {
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
