import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListPersonalRrhhComponent } from './dialog-list-personal-rrhh.component';

describe('DialogListPersonalRrhhComponent', () => {
  let component: DialogListPersonalRrhhComponent;
  let fixture: ComponentFixture<DialogListPersonalRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogListPersonalRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogListPersonalRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
