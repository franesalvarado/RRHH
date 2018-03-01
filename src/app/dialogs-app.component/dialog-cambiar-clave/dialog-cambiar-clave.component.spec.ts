import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCambiarClaveComponent } from './dialog-cambiar-clave.component';

describe('DialogCambiarClaveComponent', () => {
  let component: DialogCambiarClaveComponent;
  let fixture: ComponentFixture<DialogCambiarClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCambiarClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCambiarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
