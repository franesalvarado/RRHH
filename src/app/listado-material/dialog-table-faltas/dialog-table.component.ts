import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado, TipoFalta, TipoPresente } from '../../models/empleados';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { timer } from 'rxjs/observable/timer';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-table',
  templateUrl: './dialog-table.component.html',
  styleUrls: ['./dialog-table.component.css']
})
export class DialogTableComponent implements OnInit {
  displayDate = new Date().toLocaleDateString();
  myControl: FormControl = new FormControl();
  dataDialog;
  filteredOptions: Observable<string[]>;
  selected = "Ausencia sin aviso";
  tipoFalta: TipoFalta;
  tipoPresente: TipoPresente;

  countDown;
  count = 60;


  constructor(public thisDialogRef: MatDialogRef<DialogTableComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Empleado) 
  { 
    this.countDown = timer(0,1000).pipe(
      take(this.count),
      map(()=> --this.count)
    );
  }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('confirm');
    if (this.selected == "Ausencia sin aviso" || this.selected == "Ausencia con aviso"){
      this.tipoFalta = {
        tipoFalta: this.selected,
        fecha: this.displayDate
      }
    console.log(this.tipoFalta);
    }else if (this.selected == "Presente" || this.selected == "Presente con llegada tarde"){
      this.tipoPresente = {
        tipoPresente: this.selected,
        fecha: this.displayDate
      }
    console.log(this.tipoPresente);
    }
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
