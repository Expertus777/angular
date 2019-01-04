import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export class User {
  name: string;
  email: string;
  phone: string;
  age: number;
}

@Component({
  selector: 'form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})

export class FormStatus {
   user: User = new User();

   /*public addUser() {
     console.log(this.user);
   }*/

   onSubmit(form: NgForm) {
     console.log(form);
     form.resetForm();
   }
}