import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Hero} from '../../models/Hero';
import {forbiddenNameValidator} from '../../shared/forbidden-name.directive';
import {HeroesService} from '../../models/IHeroesService';
import {SERVICE_TOKEN} from '../../services/Tokens';
import {NameValidatorAsync} from '../../shared/name.validator';
import {identityRevealedValidator} from '../../shared/identity-revealed.directive';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
  form: FormGroup;
  hero: Hero = {id: 0, name: '', alterEgo: '', power: ''};

  constructor(private fb: FormBuilder,
              private nameValidator: NameValidatorAsync) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: [this.hero.name,
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            forbiddenNameValidator(/bob/i)
          ]),
          this.nameValidator.userValidator()
        ],
        alterEgo: [this.hero.alterEgo],
        power: [this.hero.power, Validators.required],
      },{validators: identityRevealedValidator}
    );
  }

  get name(): AbstractControl{
    return this.form.get('name');
  }

  get power(): AbstractControl{
    return this.form.get('power');
  }
}
