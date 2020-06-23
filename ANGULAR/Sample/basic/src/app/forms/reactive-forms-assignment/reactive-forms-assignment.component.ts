import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-assignment',
  templateUrl: './reactive-forms-assignment.component.html',
  styleUrls: ['./reactive-forms-assignment.component.css'],
})
export class ReactiveFormsAssignmentComponent implements OnInit {
  projectStatusForm: FormGroup;
  submitted = false;
  statusList = ['Stable', 'Critical', 'Finished'];

  constructor() {}

  ngOnInit(): void {
    this.projectStatusForm = new FormGroup({
      projectDetails: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          this.forbiddenProjectNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmail.bind(this)
        ),
      }),
      status: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.projectStatusForm);
    this.submitted = true;
    this.projectStatusForm.reset();
  }
  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { forbiddenProjectNames: true };
    }
    return null;
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ forbiddenEmail: true });
        }
        resolve(null);
      }, 1000);
    });
  }
  onAddDummyData() {
    this.projectStatusForm.setValue({
      projectDetails: {
        name: 'Rich',
        email: 'test@test.com',
      },
      status: 'Critical',
    });
  }
  onAddName() {
    this.projectStatusForm.patchValue({
      projectDetails: {
        name: 'Batman',
      },
    });
  }
}
