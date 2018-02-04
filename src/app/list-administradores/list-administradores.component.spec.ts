import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministradoresComponent } from './list-administradores.component';

describe('ListAdministradoresComponent', () => {
  let component: ListAdministradoresComponent;
  let fixture: ComponentFixture<ListAdministradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdministradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
