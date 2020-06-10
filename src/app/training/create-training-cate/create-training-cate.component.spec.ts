import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingCateComponent } from './create-training-cate.component';

describe('CreateTrainingCateComponent', () => {
  let component: CreateTrainingCateComponent;
  let fixture: ComponentFixture<CreateTrainingCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrainingCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrainingCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
