import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonalComponent } from './listado-personal.component';

describe('ListadoPersonalComponent', () => {
  let component: ListadoPersonalComponent;
  let fixture: ComponentFixture<ListadoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
