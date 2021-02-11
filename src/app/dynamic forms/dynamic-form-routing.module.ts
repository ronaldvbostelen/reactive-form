import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicFormPresenterComponent} from './dynamic-form-presenter/dynamic-form-presenter.component';

const routes: Routes = [
  {path: '', component: DynamicFormPresenterComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DynamicFormRoutingModule {
  constructor() {
    console.log('loaded');
  }
}
