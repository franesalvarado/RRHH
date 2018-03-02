import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarArtComponent } from './cargar-art.component';

describe('CargarArtComponent', () => {
  let component: CargarArtComponent;
  let fixture: ComponentFixture<CargarArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
