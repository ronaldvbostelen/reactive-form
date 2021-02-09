import { Component, OnInit } from '@angular/core';
import {Position} from '../models/position';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.css']
})
export class ParentInputComponent implements OnInit {
  inputs: Position[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addInput(pos: Position): void{
    this.inputs.push(pos);
  }
}
