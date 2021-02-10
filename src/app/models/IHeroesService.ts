import {Observable} from 'rxjs';
import {Hero} from './Hero';

export interface HeroesService {
  getHeroes: () => Observable<Hero[]>;
  isNameTaken: (alterEgo: string) => Observable<boolean>;
}
