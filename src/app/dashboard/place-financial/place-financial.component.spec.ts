import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFinancialComponent } from './place-financial.component';

describe('PlaceFinancialComponent', () => {
  let component: PlaceFinancialComponent;
  let fixture: ComponentFixture<PlaceFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
