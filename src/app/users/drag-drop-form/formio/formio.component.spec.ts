import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioComponent } from './formio.component';

describe('FormioComponent', () => {
  let component: FormioComponent;
  let fixture: ComponentFixture<FormioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
