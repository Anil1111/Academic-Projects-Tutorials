import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdforms-assignment',
  templateUrl: './tdforms-assignment.component.html',
  styleUrls: ['./tdforms-assignment.component.css']
})
export class TDFormsAssignmentComponent implements AfterViewChecked{
  @ViewChild('form', {static: true}) subscriptionForm: NgForm;
  submitted = false;
  subscriptions = ['Basic','Advanced','Pro'];
  defaultSubscription = 'pro';
  subscriptionData = { // independent structute representing DB values
    email: '',
    password: '',
    subscription: '',
  };
  initialData = { // structute representing the DOM
    userDetails: {
      email: 'test@tcs.com',
      password: 'dummy',
    },
    subscription: 'advanced',
  }

  ngAfterViewChecked() {
    // this.subscriptionForm.setValue(this.initialData);
  }
  setInitialValue() {
    this.subscriptionForm.form.setValue(this.initialData);
  }
  setEmail() {
    this.subscriptionForm.form.patchValue({
      userDetails: {
        email: 'newtestmail@gmail.com'
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.subscriptionForm);

    this.subscriptionData.email = this.subscriptionForm.value.userDetails.email;
    this.subscriptionData.password = this.subscriptionForm.value.userDetails.password;
    this.subscriptionData.subscription = this.subscriptionForm.value.subscription;

    this.subscriptionForm.reset();

  }

}
