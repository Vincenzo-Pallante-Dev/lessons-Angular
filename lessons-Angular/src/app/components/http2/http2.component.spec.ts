import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http2Component } from './http2.component';

describe('Http2Component', () => {
  let component: Http2Component;
  let fixture: ComponentFixture<Http2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Http2Component]
    });
    fixture = TestBed.createComponent(Http2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
