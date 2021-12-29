import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDrinkComponent } from './ajouter-drink.component';

describe('AjouterDrinkComponent', () => {
  let component: AjouterDrinkComponent;
  let fixture: ComponentFixture<AjouterDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
