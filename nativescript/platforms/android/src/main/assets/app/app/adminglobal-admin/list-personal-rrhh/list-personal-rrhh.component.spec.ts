import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonalRrhhComponent } from './list-personal-rrhh.component';

describe('ListPersonalRrhhComponent', () => {
  let component: ListPersonalRrhhComponent;
  let fixture: ComponentFixture<ListPersonalRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonalRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonalRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
