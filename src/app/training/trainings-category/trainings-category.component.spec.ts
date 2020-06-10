import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsCategoryComponent } from './trainings-category.component';

describe('TrainingsCategoryComponent', () => {
  let component: TrainingsCategoryComponent;
  let fixture: ComponentFixture<TrainingsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
