import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  @ViewChild('form') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = { // the keys need not match to those on the form
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  setInitialValues() {
    const suggestedName = 'Superuser';
    // setValue method allows to set values of the whole form; it requires JS object representing the form
    // setValue overwrites all the values of controls entered in the DOM
    // this.signupForm.setValue()
    // the JS object keys should match with the `name` attribute of the elements
    this.signupForm.form.setValue({
      userData: {
        username: suggestedName,
        email: 'test@tcs.com'
      },
      secret: 'pet',
      qa: 'sample qa',
      gender: 'female'
    });
  }

  setSelectValues() {
    const suggestedName = 'Superuser';
    // overwrite parts of the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.qa;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form); // we will get an ngForm(JS object) created by angular
  //   // will contain a number of key value pairs providing the details of the controls submitted by the form with the name attribute
  // }
}
