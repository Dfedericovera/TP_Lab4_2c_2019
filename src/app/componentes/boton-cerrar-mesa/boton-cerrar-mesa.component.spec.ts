import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCerrarMesaComponent } from './boton-cerrar-mesa.component';

describe('BotonCerrarMesaComponent', () => {
  let component: BotonCerrarMesaComponent;
  let fixture: ComponentFixture<BotonCerrarMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCerrarMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCerrarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
