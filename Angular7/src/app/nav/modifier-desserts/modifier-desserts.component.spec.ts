import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDessertsComponent } from './modifier-desserts.component';

describe('ModifierDessertsComponent', () => {
  let component: ModifierDessertsComponent;
  let fixture: ComponentFixture<ModifierDessertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierDessertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
