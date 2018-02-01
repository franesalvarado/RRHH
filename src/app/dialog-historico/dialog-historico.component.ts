import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empleado } from '../models/empleados';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-dialog-historico',
  templateUrl: './dialog-historico.component.html',
  styleUrls: ['./dialog-historico.component.css']
})
export class DialogHistoricoComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogHistoricoComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}


