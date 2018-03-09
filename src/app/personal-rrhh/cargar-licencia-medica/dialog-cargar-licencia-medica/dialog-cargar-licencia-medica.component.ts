import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-cargar-licencia-medica',
  templateUrl: './dialog-cargar-licencia-medica.component.html',
  styleUrls: ['./dialog-cargar-licencia-medica.component.css']
})
export class DialogCargarLicenciaMedicaComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogCargarLicenciaMedicaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
