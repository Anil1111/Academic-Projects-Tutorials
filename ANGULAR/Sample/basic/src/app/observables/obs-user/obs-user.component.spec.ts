import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsUserComponent } from './obs-user.component';

describe('ObsUserComponent', () => {
  let component: ObsUserComponent;
  let fixture: ComponentFixture<ObsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
