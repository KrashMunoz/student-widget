import { Component } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Student Widget';
  studentForm = new FormGroup ({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
  });

  constructor(private _registrationService: RegistrationService){}
  // updateName($event) {
  //   this.studentForm.firstName.setValue($event);
  // }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.studentForm.value);

    this._registrationService.registerStudent(this.studentForm) 
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
  }
}
