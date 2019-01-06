import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFacilitiesComponent } from './place-facilities.component';

describe('PlaceFacilitiesComponent', () => {
  let component: PlaceFacilitiesComponent;
  let fixture: ComponentFixture<PlaceFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
