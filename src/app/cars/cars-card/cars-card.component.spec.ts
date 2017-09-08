import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCardComponent } from './cars-card.component';

describe('CarsCardComponent', () => {
  let component: CarsCardComponent;
  let fixture: ComponentFixture<CarsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
