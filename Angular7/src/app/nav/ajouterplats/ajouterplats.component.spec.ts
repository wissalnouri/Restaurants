import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterplatsComponent } from './ajouterplats.component';

describe('AjouterplatsComponent', () => {
  let component: AjouterplatsComponent;
  let fixture: ComponentFixture<AjouterplatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterplatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
