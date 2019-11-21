import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarPedidoComponent } from './tomar-pedido.component';

describe('TomarPedidoComponent', () => {
  let component: TomarPedidoComponent;
  let fixture: ComponentFixture<TomarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
