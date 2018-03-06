import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCargarArtComponent } from './dialog-cargar-art.component';

describe('DialogCargarArtComponent', () => {
  let component: DialogCargarArtComponent;
  let fixture: ComponentFixture<DialogCargarArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCargarArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCargarArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
