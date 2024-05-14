import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasDetalleComponent } from './historias-detalle.component';

describe('HistoriasDetalleComponent', () => {
  let component: HistoriasDetalleComponent;
  let fixture: ComponentFixture<HistoriasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
