import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-dialog-cargar-licencia-medica',
  templateUrl: './dialog-cargar-licencia-medica.component.html',
  styleUrls: ['./dialog-cargar-licencia-medica.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'}
  ],
})

export class DialogCargarLicenciaMedicaComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogCargarLicenciaMedicaComponent>, 
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
