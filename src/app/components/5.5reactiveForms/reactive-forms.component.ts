import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  styleUrls: ['./reactive-forms.component.scss'],
  templateUrl: 'reactive-forms.component.html'
})

export class ReactiveComponent {
  public reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'userName': new FormControl('Tom', [Validators.required, this.userNameValidator]),
      'userEmail': new FormControl('', [Validators.required,
        Validators.email]),
      'userPhones': new FormArray([
          new FormControl('+38', [Validators.required, Validators.pattern("[+][0-9]{12}")])
        ])
    });
  }

  public addPhone() {
    (<FormArray>this.reactiveForm.controls['userPhones']).push(new FormControl('+38', [Validators.required, Validators.pattern("[+][0-9]{12}")]));
  }

  public submit() {
    console.log(this.reactiveForm);
  }

  // Validators
  public userNameValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'no') {
      return {"userName": true};
    }
    return null;
  }

  public showError(control: FormControl) {
    return control.invalid && control.touched && control.dirty;
  }
}