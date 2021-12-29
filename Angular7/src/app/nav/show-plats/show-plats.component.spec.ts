import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlatsComponent } from './show-plats.component';

describe('ShowPlatsComponent', () => {
  let component: ShowPlatsComponent;
  let fixture: ComponentFixture<ShowPlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
