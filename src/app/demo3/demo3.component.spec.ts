import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3Component } from './demo3.component';

describe('Demo3Component', () => {
  let component: Demo3Component;
  let fixture: ComponentFixture<Demo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Demo3Component]
    });
    fixture = TestBed.createComponent(Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
