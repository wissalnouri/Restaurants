import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDessertComponent } from './ajouter-dessert.component';

describe('AjouterDessertComponent', () => {
  let component: AjouterDessertComponent;
  let fixture: ComponentFixture<AjouterDessertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDessertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
