import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModificarFaltasComponent } from './dialog-modificar-faltas.component';

describe('DialogModificarFaltasComponent', () => {
  let component: DialogModificarFaltasComponent;
  let fixture: ComponentFixture<DialogModificarFaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModificarFaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModificarFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
