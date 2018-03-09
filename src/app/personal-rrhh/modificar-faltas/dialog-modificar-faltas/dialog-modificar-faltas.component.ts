import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-modificar-faltas',
  templateUrl: './dialog-modificar-faltas.component.html',
  styleUrls: ['./dialog-modificar-faltas.component.css']
})
export class DialogModificarFaltasComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogModificarFaltasComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
