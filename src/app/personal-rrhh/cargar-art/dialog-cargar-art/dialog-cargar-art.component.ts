import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-cargar-art',
  templateUrl: './dialog-cargar-art.component.html',
  styleUrls: ['./dialog-cargar-art.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'}
  ],
})
export class DialogCargarArtComponent implements OnInit {

  nroIncidente = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  // SE UTILIZAN PARA QUE EL USUARIO PUEDA ELEGIR UNA FECHA CONTROL ENTRE ESTAS FECHAS
  // Fecha de inicio de ART
  inicioART = new FormControl(new Date(), [Validators.required]);
  // Fecha de finalizacion de ART
  finART = new FormControl(new Date(), [Validators.required]);
  fechaControl = new FormControl(new Date(), [Validators.required]);
  detalles = new FormControl('', [Validators.required, Validators.maxLength(15)]);

  matcher = new MyErrorStateMatcher();

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
