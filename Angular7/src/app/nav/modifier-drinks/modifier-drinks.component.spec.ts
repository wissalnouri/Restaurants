import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDrinksComponent } from './modifier-drinks.component';

describe('ModifierDrinksComponent', () => {
  let component: ModifierDrinksComponent;
  let fixture: ComponentFixture<ModifierDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
