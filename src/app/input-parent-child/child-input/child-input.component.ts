import {Component, OnInit, Output, EventEmitter} from '@angular/core';


import { Position} from '../models/position';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {
  position: Position;
  form: FormGroup;

  @Output() formEvent = new EventEmitter<Position>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.position = {lat: 5, lon: 6};
    this.form = this.fb.group({
      lat: [this.position.lat, Validators.required],
      lon: [this.position.lon, Validators.required],
    });
  }

  submit(): void{
    if (this.form.invalid){return;}
    this.formEvent.emit(this.form.value);
  }



}
