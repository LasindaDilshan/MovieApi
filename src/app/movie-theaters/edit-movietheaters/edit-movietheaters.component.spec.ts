import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovietheatersComponent } from './edit-movietheaters.component';

describe('EditMovietheatersComponent', () => {
  let component: EditMovietheatersComponent;
  let fixture: ComponentFixture<EditMovietheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovietheatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMovietheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
