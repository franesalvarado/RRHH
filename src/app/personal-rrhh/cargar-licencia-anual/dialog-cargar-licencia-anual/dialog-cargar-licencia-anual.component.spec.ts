import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCargarLicenciaAnualComponent } from './dialog-cargar-licencia-anual.component';

describe('DialogCargarLicenciaAnualComponent', () => {
  let component: DialogCargarLicenciaAnualComponent;
  let fixture: ComponentFixture<DialogCargarLicenciaAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCargarLicenciaAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCargarLicenciaAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
