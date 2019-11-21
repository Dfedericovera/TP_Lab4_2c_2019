import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoParaServirComponent } from './listo-para-servir.component';

describe('ListoParaServirComponent', () => {
  let component: ListoParaServirComponent;
  let fixture: ComponentFixture<ListoParaServirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoParaServirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoParaServirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
