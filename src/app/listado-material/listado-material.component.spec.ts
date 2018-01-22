import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMaterialComponent } from './listado-material.component';

describe('ListadoMaterialComponent', () => {
  let component: ListadoMaterialComponent;
  let fixture: ComponentFixture<ListadoMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
