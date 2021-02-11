import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: '', component: ReactiveFormsComponent},
  {path: 'form', loadChildren: () => import('./dynamic forms/dynamic-form.module')
  .then(c => c.DynamicFormModule), data: {preload: true}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
