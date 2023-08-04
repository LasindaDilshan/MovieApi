import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemovieTheatersComponent } from './createmovie-theaters.component';

describe('CreatemovieTheatersComponent', () => {
  let component: CreatemovieTheatersComponent;
  let fixture: ComponentFixture<CreatemovieTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemovieTheatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemovieTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
