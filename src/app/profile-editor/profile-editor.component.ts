import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Profile} from '../models/profile';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;
  profile: Profile;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.profile = {firstName: '', lastName: '', address: {street: '', city: ''}, aliases: ['']};
    this.profileForm = this.fb.group({
      firstName: [this.profile.firstName, Validators.required],
      lastName: [this.profile.lastName, Validators.required],
      address: this.fb.group({
        street: [this.profile.address.street, Validators.required],
        city: [this.profile.address.city, Validators.required]
      }),
      aliases: this.fb.array([this.profile.aliases])
    });

    this.profileForm.valueChanges.subscribe(x => console.log(x));
  }

  setProfile(): void{
    // this.profileForm.setValue({firstName: 'yes', lastName: 'case sensitve', address: {street: 'wallstreet', city: 'NY'}});
    this.profileForm.patchValue({firstName: 'patchValue'});
  }

  submit(): void{
    console.log(this.profileForm.status);
    console.log('Submitted!');
  }

  get aliases(): FormArray{
    return  this.profileForm.get('aliases') as FormArray;
  }

  addAlias(): void{
    this.aliases.push(this.fb.control(''));
  }

}
