import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertasComponent } from './dialog-alertas.component';

describe('DialogAlertasComponent', () => {
  let component: DialogAlertasComponent;
  let fixture: ComponentFixture<DialogAlertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAlertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
