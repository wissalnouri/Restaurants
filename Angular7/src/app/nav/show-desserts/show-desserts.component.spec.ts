import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDessertsComponent } from './show-desserts.component';

describe('ShowDessertsComponent', () => {
  let component: ShowDessertsComponent;
  let fixture: ComponentFixture<ShowDessertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDessertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
