import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Hero} from './models/Hero';
import {HeroesService} from './models/IHeroesService';
import {SERVICE_TOKEN} from './services/Tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-form';
  heroes$: Observable<Hero[]>;

  constructor(@Inject(SERVICE_TOKEN) private heroesService: HeroesService) {
  }
  ngOnInit(): void {
    this.heroes$ = this.heroesService.getHeroes();

    this.heroesService.isNameTaken('Ragnaros').subscribe(console.log);
  }


}
