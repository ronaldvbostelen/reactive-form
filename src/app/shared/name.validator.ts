import {Inject, Injectable} from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';
import {HeroService} from '../services/hero.service';
import {SERVICE_TOKEN} from '../services/Tokens';


@Injectable({
  providedIn: 'root'
})
export class NameValidatorAsync {
  constructor(@Inject(SERVICE_TOKEN) private heroService: HeroService) {}

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.heroService.isNameTaken(control.value)
        .pipe(
          map(res => {
            return res ? {userNameExists: true} : null;
          })
        );
    };

  }

}
