import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsHomeComponent } from './obs-home.component';

describe('ObsHomeComponent', () => {
  let component: ObsHomeComponent;
  let fixture: ComponentFixture<ObsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
