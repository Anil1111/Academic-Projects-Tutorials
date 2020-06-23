import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsAssignmentComponent } from './reactive-forms-assignment.component';

describe('ReactiveFormsAssignmentComponent', () => {
  let component: ReactiveFormsAssignmentComponent;
  let fixture: ComponentFixture<ReactiveFormsAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
