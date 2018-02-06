import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHistoricoComponent } from './dialog-historico.component';

describe('DialogHistoricoComponent', () => {
  let component: DialogHistoricoComponent;
  let fixture: ComponentFixture<DialogHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
