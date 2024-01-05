import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaForServicesComponent } from './prova-for-services.component';

describe('ProvaForServicesComponent', () => {
  let component: ProvaForServicesComponent;
  let fixture: ComponentFixture<ProvaForServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvaForServicesComponent]
    });
    fixture = TestBed.createComponent(ProvaForServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
