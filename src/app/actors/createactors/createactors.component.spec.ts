import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateactorsComponent } from './createactors.component';

describe('CreateactorsComponent', () => {
  let component: CreateactorsComponent;
  let fixture: ComponentFixture<CreateactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
