import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarFaltasComponent } from './modificar-faltas.component';

describe('ModificarFaltasComponent', () => {
  let component: ModificarFaltasComponent;
  let fixture: ComponentFixture<ModificarFaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarFaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
