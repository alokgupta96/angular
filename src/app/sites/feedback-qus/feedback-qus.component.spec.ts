import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackQusComponent } from './feedback-qus.component';

describe('FeedbackQusComponent', () => {
  let component: FeedbackQusComponent;
  let fixture: ComponentFixture<FeedbackQusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackQusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackQusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
