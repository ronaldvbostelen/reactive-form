import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable, of} from 'rxjs';
import {Hero} from '../models/Hero';
import {HeroesService} from '../models/IHeroesService';
import {catchError, debounceTime, filter, map, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements HeroesService{

  constructor(private client: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.client.get('http://localhost:5000/api/heroes') as Observable<Hero[]>;
  }

  isNameTaken(name: string): Observable<boolean> {
    return this.getHeroes().pipe(
      map((v: Hero[]) => v.filter(x => x.name === name).length > 0)
    );
  }
}
