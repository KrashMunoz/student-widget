import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegistrationService } from './registration.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Student Widget';
  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(35)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(35)]),
  });
  matcher = new MyErrorStateMatcher();
  // get firstName() {
  //   return this.studentForm.get('firstName');
  // }

  // get lastName() {
  //   return this.studentForm.get('lastName');
  // }
  errorMsg = '';

  constructor(private _registrationService: RegistrationService) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.studentForm.value);

    this._registrationService.registerStudent(this.studentForm.value)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
  }
}
