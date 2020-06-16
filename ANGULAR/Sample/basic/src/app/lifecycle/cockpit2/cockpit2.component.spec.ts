import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cockpit2Component } from './cockpit2.component';

describe('Cockpit2Component', () => {
  let component: Cockpit2Component;
  let fixture: ComponentFixture<Cockpit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cockpit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cockpit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
