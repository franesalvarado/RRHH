import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Modelo de formulario
import { FormLicenciaAnual } from '../../../libreria/models/personal-rrhh/formularios-rrhh'; 

@Component({
  selector: 'app-dialog-cargar-licencia-anual',
  templateUrl: './dialog-cargar-licencia-anual.component.html',
  styleUrls: ['./dialog-cargar-licencia-anual.component.css']
})

export class DialogCargarLicenciaAnualComponent{

    formLicenciaAnual = new FormLicenciaAnual();

    constructor(public thisDialogRef: MatDialogRef<DialogCargarLicenciaAnualComponent>, 
    @Inject(MAT_DIALOG_DATA) public data,
    private adapter: DateAdapter<any>) {
      this.adapter.setLocale('es');
    }


    onCloseConfirm(){
      console.log(this.formLicenciaAnual);
      this.thisDialogRef.close('Confirm');
    }

    onCloseCancel() {
      this.thisDialogRef.close('Cancel');
    }

    // LAS VACACIONES SIEMPRE COMIENZAN UN LUNES Y TERMINAN UN DOMINGO
    // Filtro para que solamente pueda seleccionar lunes
    myFilterSalida = (d: Date): boolean => {
      const day = d.getDay();
      return day !== 0 && day !== 6 && day !== 2 && day !== 3 && day !== 4 && day !== 5;
    }
    // Filtro para que solamente pueda seleccionar domingo
    myFilterVuelta = (d: Date): boolean => {
      const day = d.getDay();
      return day !== 1 && day !== 6 && day !== 2 && day !== 3 && day !== 4 && day !== 5;
    }

}
