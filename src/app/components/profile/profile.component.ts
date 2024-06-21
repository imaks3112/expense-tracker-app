import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  isEditUser:boolean = false;
  userForm: FormGroup;

  userProfile = {
    name: 'Akshay Lankeshwar',
    email: 'lankeshwarakshay3112@gmail.com'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.fb.group({
      name: ['Akshay Lankeshwar'],
      email: ['lankeshwarakshay3112@gmail.com']
    })
  }
  
  clickUser() {
    this.isEditUser = true;
    this.userForm.setValue(this.userForm.value);
  }

  editUserRecord() {
    this.userProfile = {
      name: this.userForm.value.name,
      email: this.userForm.value.email
    }
    this.isEditUser = false;
  }

  cancel() {
    this.isEditUser = false;
  }
}
