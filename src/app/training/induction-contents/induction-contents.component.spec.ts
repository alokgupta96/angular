import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionContentsComponent } from './induction-contents.component';

describe('InductionContentsComponent', () => {
  let component: InductionContentsComponent;
  let fixture: ComponentFixture<InductionContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
