import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarPedidoFormComponent } from './tomar-pedido-form.component';

describe('TomarPedidoFormComponent', () => {
  let component: TomarPedidoFormComponent;
  let fixture: ComponentFixture<TomarPedidoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomarPedidoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomarPedidoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
