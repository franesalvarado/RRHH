import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-dialog-cargar-art',
  templateUrl: './dialog-cargar-art.component.html',
  styleUrls: ['./dialog-cargar-art.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'}
  ],
})
export class DialogCargarArtComponent implements OnInit {

  // SE UTILIZA PARA QUE EL USUARIO PUEDA ELEGIR UNA FECHA CONTROL ENTRE ESTAS FECHAS
  // Fecha de inicio de ART
  minDate = new Date();
  // Fecha de finalizacion de ART
  maxDate = new Date();

  constructor(public thisDialogRef: MatDialogRef<DialogCargarArtComponent>, 
    @Inject(MAT_DIALOG_DATA) public data,
    private adapter: DateAdapter<any>) {
      this.adapter.setLocale('es');
    }

  ngOnInit() {
  }


  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
