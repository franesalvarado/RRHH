import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Modelo de formulario
import { FormLicenciaMedica } from '../../../libreria/models/personal-rrhh/formularios-rrhh'; 

@Component({
  selector: 'app-dialog-cargar-licencia-medica',
  templateUrl: './dialog-cargar-licencia-medica.component.html',
  styleUrls: ['./dialog-cargar-licencia-medica.component.css']
})

export class DialogCargarLicenciaMedicaComponent {

  formLicenciaMedica = new FormLicenciaMedica();

  constructor(public thisDialogRef: MatDialogRef<DialogCargarLicenciaMedicaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data,
    private adapter: DateAdapter<any>) {
      this.adapter.setLocale('es');
    }

  onCloseConfirm(){
    console.log(this.formLicenciaMedica);
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
