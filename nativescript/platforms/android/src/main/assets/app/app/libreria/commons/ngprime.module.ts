import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/datatable';

// NgPrime 


@NgModule({
  imports: [
    CommonModule,
    DataTableModule

  ],
  exports: [
    CommonModule,
    DataTableModule
  ]
})
export class NgPrimeModule { }
