import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdministradoresComponent } from './dialog-administradores.component';

describe('DialogAdministradoresComponent', () => {
  let component: DialogAdministradoresComponent;
  let fixture: ComponentFixture<DialogAdministradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAdministradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
