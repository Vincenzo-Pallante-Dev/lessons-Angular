import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova3Component } from './prova3.component';

describe('Prova3Component', () => {
  let component: Prova3Component;
  let fixture: ComponentFixture<Prova3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Prova3Component]
    });
    fixture = TestBed.createComponent(Prova3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
