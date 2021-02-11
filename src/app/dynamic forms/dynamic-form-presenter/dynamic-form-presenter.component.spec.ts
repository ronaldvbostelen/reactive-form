import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormPresenterComponent } from './dynamic-form-presenter.component';

describe('DynamicFormPresenterComponent', () => {
  let component: DynamicFormPresenterComponent;
  let fixture: ComponentFixture<DynamicFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
