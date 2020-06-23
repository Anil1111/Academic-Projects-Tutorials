import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFormsAssignmentComponent } from './tdforms-assignment.component';

describe('TDFormsAssignmentComponent', () => {
  let component: TDFormsAssignmentComponent;
  let fixture: ComponentFixture<TDFormsAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDFormsAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDFormsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
