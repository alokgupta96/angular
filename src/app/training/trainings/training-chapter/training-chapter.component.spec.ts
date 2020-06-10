import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingChapterComponent } from './training-chapter.component';

describe('TrainingChapterComponent', () => {
  let component: TrainingChapterComponent;
  let fixture: ComponentFixture<TrainingChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
