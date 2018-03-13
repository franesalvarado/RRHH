import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFechaModificarComponent } from './dialog-fecha-modificar.component';

describe('DialogFechaModificarComponent', () => {
  let component: DialogFechaModificarComponent;
  let fixture: ComponentFixture<DialogFechaModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFechaModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFechaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
