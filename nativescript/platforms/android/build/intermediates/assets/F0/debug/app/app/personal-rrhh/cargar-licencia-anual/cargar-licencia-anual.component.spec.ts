import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarLicenciaAnualComponent } from './cargar-licencia-anual.component';

describe('CargarLicenciaAnualComponent', () => {
  let component: CargarLicenciaAnualComponent;
  let fixture: ComponentFixture<CargarLicenciaAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarLicenciaAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarLicenciaAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
