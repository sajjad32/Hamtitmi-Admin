import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorMultiDaysComponent } from './refactor-multi-days.component';

describe('RefactorMultiDaysComponent', () => {
  let component: RefactorMultiDaysComponent;
  let fixture: ComponentFixture<RefactorMultiDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefactorMultiDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactorMultiDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
