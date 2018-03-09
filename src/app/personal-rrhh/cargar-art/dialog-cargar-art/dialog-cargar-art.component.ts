import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-cargar-art',
  templateUrl: './dialog-cargar-art.component.html',
  styleUrls: ['./dialog-cargar-art.component.css']
})
export class DialogCargarArtComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogCargarArtComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
