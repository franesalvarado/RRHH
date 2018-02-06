import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../../models/empleados';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-dialog-table',
  templateUrl: './dialog-table.component.html',
  styleUrls: ['./dialog-table.component.css']
})
export class DialogTableComponent implements OnInit {

  myControl: FormControl = new FormControl();
  dataDialog;
  filteredOptions: Observable<string[]>;

  options = [
    'Ausencia sin aviso',
    'Ausencia con aviso',
    'Ausencia por enfermedad',
    'Presente',
    'Presente con llegada tarde'
   ];

  constructor(public thisDialogRef: MatDialogRef<DialogTableComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Empleado) 
  {
    // this.dataDialog.tipoFalta = '';
    // this.dataDialog.value = false;
    // this.myControl.valueChanges = 'Ausencia sin aviso';
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


  onCloseConfirm() {
    // this.dataDialog.value = true;
    // this.dataDialog.tipoFalta = this.myControl.value;
    this.thisDialogRef.close('confirm');
    console.log(this.dataDialog);
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
