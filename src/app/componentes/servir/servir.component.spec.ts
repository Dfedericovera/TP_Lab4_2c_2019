import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServirComponent } from './servir.component';

describe('ServirComponent', () => {
  let component: ServirComponent;
  let fixture: ComponentFixture<ServirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
