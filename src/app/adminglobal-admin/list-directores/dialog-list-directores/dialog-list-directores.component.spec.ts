import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListDirectoresComponent } from './dialog-list-directores.component';

describe('DialogListDirectoresComponent', () => {
  let component: DialogListDirectoresComponent;
  let fixture: ComponentFixture<DialogListDirectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogListDirectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogListDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
