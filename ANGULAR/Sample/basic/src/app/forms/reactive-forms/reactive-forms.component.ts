import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit(): void {
    // setting up a basic form
    this.signupForm = new FormGroup({
      // Arguments taken by FormControl includes initial state, single validator or array of validator and Async validator
      // Validators.required is just a reference that is executed by angular when the form control value changes
      // the keys here should exactly match the ones defined in HTML
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    // logs all the changes per keystroke made on the signupForm
    this.signupForm.valueChanges.subscribe(
      value => console.log(value)
    );
    // logs all the status changes from INVALID --> PENDING --> VALID
    this.signupForm.statusChanges.subscribe(
      status => console.log(status)
    );

    // set values of the form controls on the form
    this.signupForm.setValue({
      userData: {
        username: 'Rich',
        email: 'test@gtc.com'
      },
      gender: 'male',
      hobbies: []
    });

    // patch specific values of one form control on the form
    this.signupForm.patchValue({
      userData: {
        username: 'Samurai',
      },
    });
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }
  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  // custom validator that gets executed by angular automatically when it checks the validity of the form control
  // it should check a form control and have a return type of JS object {nameIsForbidden: true}
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null; // if validation is successful you have to pass nothing or null
    // should not pass false;
    // passing null or nothing is how you tell that the form control is valid
  }

  // asynchronous validators
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve( {emailIsForbidden: true});
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}
