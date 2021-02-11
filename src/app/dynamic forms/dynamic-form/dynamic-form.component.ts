import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuestionBase} from '../models/question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  @Output() inputReceived: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  constructor() { }

  ngOnInit(): void {
  }

  get isValid(): boolean{
    return this.form.controls[this.question.key].valid;
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.inputReceived.emit(this.form);
    }, 1);
  }
}
