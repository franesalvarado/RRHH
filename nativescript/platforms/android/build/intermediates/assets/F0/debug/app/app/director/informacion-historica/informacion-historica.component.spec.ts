import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionHistoricaComponent } from './informacion-historica.component';

describe('InformacionHistoricaComponent', () => {
  let component: InformacionHistoricaComponent;
  let fixture: ComponentFixture<InformacionHistoricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionHistoricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionHistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
