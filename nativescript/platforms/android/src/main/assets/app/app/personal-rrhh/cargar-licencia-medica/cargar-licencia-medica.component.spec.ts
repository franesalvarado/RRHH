import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarLicenciaMedicaComponent } from './cargar-licencia-medica.component';

describe('CargarLicenciaMedicaComponent', () => {
  let component: CargarLicenciaMedicaComponent;
  let fixture: ComponentFixture<CargarLicenciaMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarLicenciaMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarLicenciaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
