import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCargarLicenciaMedicaComponent } from './dialog-cargar-licencia-medica.component';

describe('DialogCargarLicenciaMedicaComponent', () => {
  let component: DialogCargarLicenciaMedicaComponent;
  let fixture: ComponentFixture<DialogCargarLicenciaMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCargarLicenciaMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCargarLicenciaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
