import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
// Model de Forms
import { FormART } from '../../../libreria/models/personal-rrhh/formularios-rrhh'; 

@Component({
  selector: 'app-dialog-cargar-art',
  templateUrl: './dialog-cargar-art.component.html',
  styleUrls: ['./dialog-cargar-art.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'}
  ],
})
export class DialogCargarArtComponent implements OnInit {

  formART = new FormART;

  constructor(public thisDialogRef: MatDialogRef<DialogCargarArtComponent>, 
    @Inject(MAT_DIALOG_DATA) public data,
    private adapter: DateAdapter<any>) {
      this.adapter.setLocale('es');
    }

  ngOnInit() {
  }


  onCloseConfirm() {
    console.log(this.formART);
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
