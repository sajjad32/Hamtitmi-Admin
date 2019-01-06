import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAlbumComponent } from './place-album.component';

describe('PlaceAlbumComponent', () => {
  let component: PlaceAlbumComponent;
  let fixture: ComponentFixture<PlaceAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
