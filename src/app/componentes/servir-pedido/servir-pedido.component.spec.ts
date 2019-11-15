import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServirPedidoComponent } from './servir-pedido.component';

describe('ServirPedidoComponent', () => {
  let component: ServirPedidoComponent;
  let fixture: ComponentFixture<ServirPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServirPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServirPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
