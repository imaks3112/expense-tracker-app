import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  isEditUser:boolean = false;
  userForm: FormGroup;
  userInfo;
  userProfile;

  constructor(private fb: FormBuilder,
    private service: UserProfileService
  ) { }

  ngOnInit(): void {
    this.createUserForm();
    this.service.getUserInformation().subscribe(user => {
      this.userProfile = user;
    });
  }

  createUserForm() {
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }
  
  clickUser() {
    this.isEditUser = true;
    this.userForm.setValue(this.userProfile);
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
