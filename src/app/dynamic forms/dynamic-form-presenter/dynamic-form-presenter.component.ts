import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {QuestionControlService} from '../services/question-control.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../models/question-base';

@Component({
  selector: 'app-dynamic-form-presenter',
  templateUrl: './dynamic-form-presenter.component.html',
  styleUrls: ['./dynamic-form-presenter.component.css']
})
export class DynamicFormPresenterComponent implements OnInit {
  form$: Observable<FormGroup>;
  questions: QuestionBase<string>[];
  payLoad = '';
  childForm: FormGroup;
  form: FormGroup;

  constructor(private questionService: QuestionService,
              private questionControlService: QuestionControlService) { }

  ngOnInit(): void {
    this.form$ = this.questionService.getQuestions().pipe(
      map(x => {
        this.questions = x;
        return this.questionControlService.toFormGroup(x);
      })
    );

    this.form$.subscribe(x => this.form = x);
  }
    onSubmit(): void{
      this.payLoad = JSON.stringify(this.form.getRawValue());
    }

    updatePayload(form: FormGroup): void{
      this.payLoad = JSON.stringify(form.getRawValue());
    }

}
