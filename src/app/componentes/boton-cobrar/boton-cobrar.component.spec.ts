import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCobrarComponent } from './boton-cobrar.component';

describe('BotonCobrarComponent', () => {
  let component: BotonCobrarComponent;
  let fixture: ComponentFixture<BotonCobrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonCobrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
