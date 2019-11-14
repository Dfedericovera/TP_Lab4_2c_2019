import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFotoComponent } from './actualizar-foto.component';

describe('ActualizarFotoComponent', () => {
  let component: ActualizarFotoComponent;
  let fixture: ComponentFixture<ActualizarFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
