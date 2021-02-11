import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {DynamicFormRoutingModule} from './dynamic-form-routing.module';
import { DynamicFormPresenterComponent } from './dynamic-form-presenter/dynamic-form-presenter.component';
import {QuestionService} from './services/question.service';
import {QuestionControlService} from './services/question-control.service';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormPresenterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormRoutingModule,
  ],
  providers: [QuestionService, QuestionControlService]
})
export class DynamicFormModule { }
