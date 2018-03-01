import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirectoresComponent } from './list-directores.component';

describe('ListDirectoresComponent', () => {
  let component: ListDirectoresComponent;
  let fixture: ComponentFixture<ListDirectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDirectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
