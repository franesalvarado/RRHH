import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-cargar-licencia-anual',
  templateUrl: './dialog-cargar-licencia-anual.component.html',
  styleUrls: ['./dialog-cargar-licencia-anual.component.css']
})
export class DialogCargarLicenciaAnualComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogCargarLicenciaAnualComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
