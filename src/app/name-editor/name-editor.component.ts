import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {concatAll, debounceTime, delay, distinctUntilChanged, map, startWith, switchMap, tap} from 'rxjs/operators';
import {concat, EMPTY, fromEvent, interval, Observable, of} from 'rxjs';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar') searchBar: ElementRef;
  @ViewChild('btnTest') btnTest: ElementRef;

  changeLog: string[] = [];

  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.name.registerOnChange((x: string) => this.pushChange(x));
  }



  pushChange(change: string): void{
    this.changeLog.push(`new: ${change}`);
  }

  updateName(): void{
    this.name.setValue('Kees');
  }

  ngAfterViewInit(): void {

    const searchText$: Observable<string> =
      fromEvent<any>(this.searchBar.nativeElement, 'keyup').pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      );

    searchText$.pipe(
      tap(t => console.log(t)),
      switchMap(s => this.searchKeywords(s))
    ).subscribe();

    let x = 1;
    const btnClickObservable$: Observable<string> =
      fromEvent<any>(this.btnTest.nativeElement, 'click').pipe(
        map(e => {
          interval(500).pipe(
            map(i => `click: ${x++}, i:${i}`)).subscribe(console.log);
          return e;
        }),
        debounceTime(100),
        distinctUntilChanged()
      );

    btnClickObservable$.subscribe(console.log);
  }

  searchKeywords(s: string): Observable<string>{
    if (!s){return of('');}
    return of(s);
  }


}
