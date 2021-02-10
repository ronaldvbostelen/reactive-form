import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ParentInputComponent } from './input-parent-child/parent-input/parent-input.component';
import { ChildInputComponent } from './input-parent-child/child-input/child-input.component';
import { ValidatorComponent } from './validating/validator/validator.component';
import {HeroService} from './services/hero.service';
import {SERVICE_TOKEN} from './services/Tokens';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ParentInputComponent,
    ChildInputComponent,
    ValidatorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: SERVICE_TOKEN, useClass: HeroService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

