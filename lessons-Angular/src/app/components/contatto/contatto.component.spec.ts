import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattoComponent } from './contatto.component';

describe('ContattoComponent', () => {
  let component: ContattoComponent;
  let fixture: ComponentFixture<ContattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContattoComponent]
    });
    fixture = TestBed.createComponent(ContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
