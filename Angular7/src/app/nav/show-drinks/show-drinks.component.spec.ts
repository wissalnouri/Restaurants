import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDrinksComponent } from './show-drinks.component';

describe('ShowDrinksComponent', () => {
  let component: ShowDrinksComponent;
  let fixture: ComponentFixture<ShowDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
