import { Injectable } from '@angular/core';
import {QuestionBase} from '../models/question-base';
import {DropdownQuestion} from '../models/question-dropdown';
import {TextboxQuestion} from '../models/question-textbox';
import {Observable, of} from 'rxjs';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<QuestionBase<string>[]>{
    let questions: QuestionBase<string>[];
    questions = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
