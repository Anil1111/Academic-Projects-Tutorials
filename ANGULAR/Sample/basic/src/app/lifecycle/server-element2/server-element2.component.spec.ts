import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElement2Component } from './server-element2.component';

describe('ServerElement2Component', () => {
  let component: ServerElement2Component;
  let fixture: ComponentFixture<ServerElement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerElement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerElement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
