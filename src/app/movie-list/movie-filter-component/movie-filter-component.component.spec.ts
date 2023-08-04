import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilterComponentComponent } from './movie-filter-component.component';

describe('MovieFilterComponentComponent', () => {
  let component: MovieFilterComponentComponent;
  let fixture: ComponentFixture<MovieFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFilterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
